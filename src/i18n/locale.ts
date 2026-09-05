// locale.ts: shared i18n helpers — a single source of truth for which locales
// exist, what the canonical URL prefix is for each, and how to resolve the
// currently active locale. Components read strings through `t(key)` rather
// than hardcoding copy, so adding a language is a data edit in translations/,
// never a per-component change.

import en from './translations/en';
import fr from './translations/fr';

export const defaultLocale = 'en';
export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
};

export const dictionaries: Record<Locale, typeof en> = { en, fr };

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (locales as readonly string[]).includes(value);

export interface LangProps {
  /** resolved active locale, e.g. `en` or `fr` */
  locale: Locale;
  /** path-prefix used in hrefs: "" for default locale, "/fr" for others */
  prefix: string;
  /** typed translation dictionary — pass straight into components */
  t: typeof en;
}

/** Build the props consumed by every translated component/layout. */
export function langProps(localeUnknown: unknown): LangProps {
  const locale = isLocale(localeUnknown) ? localeUnknown : defaultLocale;
  return {
    locale,
    prefix: locale === defaultLocale ? '' : `/${locale}`,
    t: dictionaries[locale],
  };
}

/** Link to the equivalent page in `target` keeping the current path + hash/appending suffix. */
export function localizedHref(
  target: Locale,
  current: Locale,
  path: string,
  hash = ''
): string {
  let canonical: string;
  if (path === '/' || path.endsWith('/index') || path.endsWith('/index/')) {
    // Root/`/en` is the default locale's URL — canonicalized as `/` (no prefix).
    canonical = '/';
  } else if (path.startsWith('/fr/')) {
    // French paths keep their `/fr` prefix.
    canonical = path.replace(/\/index\/?$/, '');
    if (!canonical.endsWith('/')) canonical += '/';
  } else {
    // Default-locale (en) paths are prefix-less.
    canonical = path.replace(/^\/en/, '').replace(/\/index\/?$/, '');
    if (!canonical.startsWith('/')) canonical = '/' + canonical;
    if (!canonical.endsWith('/')) canonical += '/';
  }

  // Resolve the target path: only French carries a non-default `/fr` prefix.
  let href: string;
  if (target === defaultLocale) {
    // English lives at the prefix-less path (e.g. `/` from `/fr/`).
    href = canonical.replace(/^\/fr\/?/, '/');
    if (!href.startsWith('/')) href = '/' + href;
    if (!href.endsWith('/')) href += '/';
  } else {
    // French always carries the `/fr` prefix (e.g. `/fr/` from `/` or `/en/`).
    href = canonical.replace(/^\/fr\/?/, `/fr/`);
    if (!href.startsWith('/fr/')) href = '/fr' + href;
    if (!href.endsWith('/')) href += '/';
  }

  if (href.endsWith('/404/')) {
    href = target === defaultLocale ? '/404/' : `/${target}/404/`;
  }
  if (hash) href += hash;
  return href;
}

/** Generate lang alternates for SEO: points every locale at the other locales. */
export function alternates(current: Locale, path: string, hash = '') {
  return locales.map((l) => ({
    hrefLang: l,
    href: `https://YOUR-DOMAIN-PLACEHOLDER.example${localizedHref(l, current, path, hash)}`,
  }));
}
