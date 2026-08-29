export interface ProjectSection {
  heading: string;
  items: string[];
}

export interface Project {
  name: string;
  /** one-line summary used on standard-size cards */
  tagline?: string;
  /** full detail — used on featured cards and in the detail panel */
  description: string;
  /** optional structured detail blocks (subsystems, phases, limitations) */
  sections?: ProjectSection[];
  stack: string[];
  status: 'PUBLIC' | 'PRIVATE' | 'IN PROGRESS' | 'STABLE' | 'ACTIVE';
  url: string | null;
  /** featured cards span the full grid row */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'ACOMED Mobile',
    description:
      'Offline-first React Native audit app for healthcare facility inspections, built for a Moroccan Ministry of Health workflow. Changes are queued locally and deduplicated on a composite key, then reconciled with a Node.js/PostgreSQL backend using Last-Write-Wins conflict resolution on updated_at timestamps. Dynamic form rendering with conditional branching and photo evidence capture keep the full audit usable offline.',
    stack: ['React Native', 'Expo SDK 54', 'TypeScript', 'React Navigation v7', 'AsyncStorage'],
    status: 'PUBLIC',
    url: 'https://github.com/ACOMED/acomed-mobile',
    featured: true,
  },
  {
    name: 'CVBuilder',
    description:
      'Resume builder web app with client-side AI assistance for content and ATS-keyword suggestions. TensorFlow.js runs text analysis entirely in-browser — no server-side AI calls, nothing leaves the page. Resumes persist to LocalStorage and export to PDF/DOCX/HTML.',
    stack: ['HTML/CSS/JS', 'TensorFlow.js'],
    status: 'PUBLIC',
    url: 'https://github.com/S0uf12n8/CVBuilder',
  },
  {
    name: 'Homelab-as-Code',
    description:
      "Production-inspired DevOps homelab built as Infrastructure-as-Code on Oracle Cloud. Phase 0 (environment setup) and Phase 1 (Ansible Linux hardening — SSH hardening, UFW, Fail2Ban) are complete; Phase 2 (Docker platform) is in progress. Kubernetes, GitOps, and observability are roadmap items — not built yet.",
    stack: ['Ansible', 'Docker', 'Oracle Cloud', 'Ubuntu Server'],
    status: 'IN PROGRESS',
    url: 'https://github.com/S0uf12n8/homelab-as-code',
  },
];