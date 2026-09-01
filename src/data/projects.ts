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
      'An offline-first audit platform built for a healthcare ministry field-inspection workflow, where network connectivity is the exception, not the default. Every core action, template loading, form completion, evidence capture, works fully offline; synchronization is a deferred operation resolved server-side via Last-Write-Wins conflict resolution against a Node.js/PostgreSQL backend. The sync queue deduplicates on a composite key, so repeated edits to the same field never produce duplicate writes. Built with React Native, Expo SDK 54, and TypeScript, and documented with the same rigor it\'s built: known limitations (unencrypted token storage, no automated test coverage yet) are tracked openly rather than hidden.',
    stack: ['React Native', 'Expo SDK 54', 'TypeScript', 'React Navigation v7', 'AsyncStorage'],
    status: 'PUBLIC',
    url: 'https://github.com/ACOMED/acomed-mobile',
    featured: true,
  },
  {
    name: 'CVBuilder',
    description:
      'A resume-building tool where the AI assistance runs entirely client-side. TensorFlow.js handles content suggestions and ATS-keyword analysis in the browser, so no resume data is ever sent to a server. Exports to PDF, DOCX, or HTML, with template-based formatting.',
    stack: ['HTML/CSS/JS', 'TensorFlow.js'],
    status: 'PUBLIC',
    url: 'https://github.com/S0uf12n8/CVBuilder',
  },
  {
    name: 'Homelab-as-Code',
    description:
      "A production-inspired homelab, built and documented as Infrastructure as Code rather than manually configured. The guiding constraint: if it's not in Git, it doesn't exist. Linux hardening (SSH key auth, UFW, Fail2Ban, automatic security updates) is fully automated via Ansible; containerized workloads via Docker are in active buildout, with Kubernetes, GitOps, and observability tooling staged as the next phases. Every change is incremental, reproducible, and version-controlled by design.",
    stack: ['Ansible', 'Docker', 'Oracle Cloud', 'Ubuntu Server'],
    status: 'IN PROGRESS',
    url: 'https://github.com/S0uf12n8/homelab-as-code',
  },
  {
    name: 'rpg-combat-cpp',
    description:
      'A C++ combat engine built for an OOP coursework project, and as much a systems-coordination exercise as a technical one: repo structure, Makefile, branching strategy, and work-order documentation were set up to keep a team project shippable despite inconsistent collaborator availability.',
    stack: ['C++'],
    status: 'PUBLIC',
    url: 'https://github.com/S0uf12n8/rpg-combat-cpp',
  },
];