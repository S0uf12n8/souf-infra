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
  if (path === '/') {
    canonical = '/';
  } else if (path.endsWith('/index') || path.endsWith('/index/')) {
    canonical = '/';
  } else {
    // path already has the locale prefix from Astro.url.pathname — keep it
    canonical = path.replace(/\/index\/?$/, '');
    if (!canonical.endsWith('/')) canonical += '/';
  }

  // For the target locale, replace the current prefix with the target's
  let href: string;
  if (target === defaultLocale) {
    // Strip any /en or /fr prefix to get the canonical path
    href = canonical.replace(/^\/(en|fr)(\/|$)/, '/$2' === '/' ? '' : '/');
    if (!href.startsWith('/')) href = '/' + href;
  } else {
    // Ensure the target prefix is present
    href = canonical.replace(/^\/(en|fr)(\/|$)/, `/${target}$2`);
    if (!href.startsWith('/')) href = `/${target}${href}`;
  }

  if (href.endsWith('/404')) {
    href = target === defaultLocale ? '/404' : `/${target}/404`;
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
