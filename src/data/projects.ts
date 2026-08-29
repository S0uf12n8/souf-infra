export interface ProjectSection {
  heading: string;
  items: string[];
}

export interface Project {
  name: string;
  /** one-line summary used on standard-size cards */
  tagline?: string;
  /** full detail: used on featured cards and in the detail panel */
  description: string;
  /** optional structured detail blocks (subsystems, phases, limitations) */
  sections?: ProjectSection[];
  stack: string[];
  status: 'PUBLIC' | 'PRIVATE' | 'IN PROGRESS' | 'STABLE' | 'ACTIVE';
  url: string | null;
  /** featured cards span the full grid row */
  featured?: boolean;
}

export const projectSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export type StackStatus = 'RUNNING' | 'LEARNING' | 'STABLE';

export interface StackTool {
  tool: string;
  /** local SVG in /public/icons/{slug}.svg, Simple Icons path in the tool's brand color */
  icon: string;
  status: StackStatus;
  /** slug of the Lab project this tool is used in: must resolve via projectSlug(projects[].name) */
  project: string;
  /** one-line "how it's used" note shown in the click-reveal */
  brief: string;
}

export const stackTools: StackTool[] = [
  { tool: 'TypeScript',       icon: 'typescript', status: 'RUNNING', project: 'acomed-mobile',    brief: "Type safety across the app's screens and sync services." },
  { tool: 'React Native',     icon: 'react',      status: 'RUNNING', project: 'acomed-mobile',    brief: 'Core framework for the offline-first audit UI.' },
  { tool: 'Expo (SDK 54)',    icon: 'expo',       status: 'RUNNING', project: 'acomed-mobile',    brief: 'Build tooling and device APIs (camera, storage).' },
  { tool: 'JavaScript',       icon: 'javascript', status: 'RUNNING', project: 'cvbuilder',         brief: 'Core logic for the resume builder and ATS-suggestion engine.' },
  { tool: 'HTML/CSS',         icon: 'html5',      status: 'RUNNING', project: 'cvbuilder',         brief: 'Structure and styling for the builder UI.' },
  { tool: 'Docker',           icon: 'docker',     status: 'RUNNING', project: 'homelab-as-code',  brief: 'Containerizing services on the homelab nodes.' },
  { tool: 'Docker Compose',   icon: 'docker',     status: 'RUNNING', project: 'homelab-as-code',  brief: 'Multi-container orchestration, automated via Ansible.' },
  { tool: 'Ansible',          icon: 'ansible',    status: 'RUNNING', project: 'homelab-as-code',  brief: 'Linux hardening and infrastructure provisioning playbooks.' },
  { tool: 'C++',              icon: 'cplusplus',  status: 'STABLE',   project: 'rpg-combat-cpp',  brief: "OOP combat engine; also set up the team's repo structure and workflow." },
];

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
      'Resume builder web app with client-side AI assistance for content and ATS-keyword suggestions. TensorFlow.js runs text analysis entirely in-browser: no server-side AI calls, and nothing leaves the page. Resumes persist to LocalStorage and export to PDF/DOCX/HTML.',
    stack: ['HTML/CSS/JS', 'TensorFlow.js'],
    status: 'PUBLIC',
    url: 'https://github.com/S0uf12n8/CVBuilder',
  },
  {
    name: 'Homelab-as-Code',
    description:
      "Production-inspired DevOps homelab built as Infrastructure-as-Code on Oracle Cloud. Phase 0 (environment setup) and Phase 1 (Ansible Linux hardening: SSH hardening, UFW, Fail2Ban) are complete; Phase 2 (Docker platform) is in progress. Kubernetes, GitOps, and observability are roadmap items, not built yet.",
    stack: ['Ansible', 'Docker', 'Oracle Cloud', 'Ubuntu Server'],
    status: 'IN PROGRESS',
    url: 'https://github.com/S0uf12n8/homelab-as-code',
  },
  {
    name: 'rpg-combat-cpp',
    description:
      'C++ RPG combat engine, OOP coursework project. Souf built the repo structure, Makefile, branching strategy, and work-order docs the rest of the team worked against.',
    stack: ['C++'],
    status: 'PUBLIC',
    url: 'https://github.com/S0uf12n8/rpg-combat-cpp',
  },
];