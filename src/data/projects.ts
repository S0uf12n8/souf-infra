export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: 'PUBLIC' | 'PRIVATE' | 'IN PROGRESS' | 'STABLE' | 'ACTIVE';
  url: string | null;
}

export const projects: Project[] = [
  {
    name: 'ACOMED',
    description:
      'Offline-first healthcare audit platform built for a Moroccan Ministry of Health use case. Souf owns mobile dev and the offline-sync layer: delta sync via updated_at timestamps, last-write-wins conflict resolution. 3-person team, protected main branch, biweekly demo cadence.',
    stack: ['React Native', 'SQLite', 'Node.js', 'PostgreSQL'],
    status: 'PRIVATE',
    url: null,
  },
  {
    name: 'rpg-combat-cpp',
    description:
      "C++ RPG combat engine, OOP coursework project. Souf built the repo structure, Makefile, branching strategy, and work-order docs the rest of the team worked against — as much a 'got a team project under control' story as a combat-engine one.",
    stack: ['C++'],
    status: 'PUBLIC',
    url: 'https://github.com/S0uf12n8/rpg-combat-cpp',
  },
  {
    name: 'CVBuilder',
    description: 'TODO — pull actual description/stack from the repo before writing final copy.',
    stack: ['TODO'],
    status: 'PUBLIC',
    url: 'https://github.com/S0uf12n8/CVBuilder',
  },
  {
    name: 'Infra Lab',
    description:
      'Personal DevOps sandbox: containerizing services with Docker/Compose, deploying to k3s on Oracle Cloud free tier, GitHub Actions pipelines, Prometheus/Grafana monitoring.',
    stack: ['Docker', 'k3s', 'GitHub Actions', 'Prometheus', 'Grafana'],
    status: 'IN PROGRESS',
    url: null,
  },
];
