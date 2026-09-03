// translations/en.ts: English dictionary. Single source of truth for all
// static UI copy (nav, sections, hero boot sequence, profile, stack, comms,
// footer, 404). Keeping this in one file means a future edit touches here and
// en only — never the components.

const en = {
  // ---------- document / meta ----------
  siteTitle: 'Souf · DevOps Portfolio',
  siteDescription:
    "Souf — CS student with a Systems & Network background building toward DevOps/DevSecOps. Lab projects, stack inventory, and contact.",
  ogLocale: 'en_US',

  // ---------- nav ----------
  nav: {
    about: 'System',
    lab: 'Lab',
    stack: 'Stack',
    comms: 'Comms',
  },
  langSwitcherLabel: 'Language',

  // ---------- hero ----------
  hero: {
    terminalTitle: 'souf@infra:~',
    boot: [
      '$ ssh souf@infra',
      'Connecting...',
      'Authenticated as S0uf12n8',
      '> whoami',
      'Souf: CS student with a Systems & Network technician background, building toward DevOps/DevSecOps.',
      '> status',
      'Final-year Licence GI · Faculty of Taroudant, Morocco',
    ],
    bootDim: [1, 2],
    bootPrompt: [0, 3, 5],
    viewProfile: '[ View Profile ]',
    contact: '[ Contact ]',
    vizHead: '// INFRA TOPOLOGY',
  },

  // ---------- profile ----------
  profile: {
    label: '// PROFILE',
    terminalTitle: 'souf@infra: ~/profile',
    downloadCV: '[ Download CV ]',
    viewProfile: '[ View Profile ]',
    tabs: { about: 'About', experience: 'Experience', education: 'Education' },
    tabRailAria: 'Profile sections',
    whoami: {
      systemStatus: 'System_Status:',
      active: 'Active',
      base: 'Base:',
      baseVal: 'Taroudant, Morocco',
      background: 'Background:',
      backgroundVal: 'Bac+2 DTS Systems & Network (ISTA Taroudant) → Systems & Network technician, Casablanca → Licence GI, final year',
      currentFocus: 'Current_Focus:',
      currentFocusVal: '[ Docker, Docker Compose, Kubernetes (k3s), CI/CD (GitHub Actions), Prometheus/Grafana observability ]',
      target: 'Target:',
      targetVal: 'Infrastructure engineering',
    },
    contextKicker: '// context',
    bio: 'Worked as a systems & network technician at a networking enterprise in Casablanca. It was enough time to learn that the interesting problems live upstream of the hardware, in the pipelines and infrastructure that make deployments repeatable and failures observable. DevOps is where that background meets the CS theory I\'m finishing now.',
    cvTitle: 'CV upload pending',
  },

  // experience timeline
  experience: {
    dewebKicker: 'networking & voip',
    dewebTitle: 'DEWEB Technology',
    dewebMeta: 'Casablanca, Morocco · on-site',
    dewebSub1Title: 'Network & IT Technician',
    fullTime: 'full-time',
    dewebSub1Period: 'Nov 2025 – Jan 2026',
    dewebSub1Points: [
      'Configuration and administration of network equipment (switches, routers, VLANs, DHCP, IP addressing)',
      'Installation and management of IP telephony systems (SIP accounts, extensions, provisioning)',
    ],
    dewebSub1Skills: ['Windows Server', 'VoIP'],
    dewebSub2Title: 'IT Infrastructure & Support Intern',
    intern: 'intern',
    dewebSub2Period: 'Sep 2025 – Nov 2025',
    dewebSub2Points: [
      'Assisted in configuring network devices, basic VLAN setup, and IP assignments',
      'Supported deployment of surveillance systems, NVR settings, and access control configurations',
    ],
    accessKicker: 'cctv & networking',
    accessTitle: 'Access Point IT',
    accessMeta: 'Taroudant, Souss-Massa, Morocco · on-site',
    accessSubTitle: 'Internship Trainee',
    accessPeriod: 'Feb 2023 – Mar 2023',
    accessPoints: [
      'Assisted with network device configuration, Wi-Fi setup, and troubleshooting',
      'Participated in installation and maintenance of CCTV systems and security servers',
    ],
    accessSkills: ['Networking', 'Cabling'],
  },

  // education timeline
  education: {
    techKicker: 'ofppt · ntic',
    techTitle: 'Specialized Technician, Digital Infrastructure / Network and System Administration',
    techMeta: 'Specialized Institute of Applied Technology NTIC (OFPPT) · 2021–2023',
    deugKicker: 'deug',
    deugTitle: 'DEUG, Computer Science',
    deugMeta: 'Université Ibn Zohr · 2023–2026',
    deugNote: 'Two-year foundation: algorithmics, Python, C, object-oriented programming',
    licenceKicker: 'licence · final year',
    licenceTitle: 'Licence, Computer Science',
    licenceMeta: 'Université Ibn Zohr · 2023–2027 (final year)',
  },

  // ---------- lab ----------
  lab: { label: '// LAB / PROJECTS', expandHint: 'details →' },

  projectDetail: {
    closeAria: 'Close detail panel',
    dialogAria: 'Project details',
    github: 'GitHub →',
    link: 'Link →',
    noPublicLink: 'no public link',
  },

  projects: {
    acomedMobile: {
      description:
        "An offline-first audit platform built for a healthcare ministry field-inspection workflow, where network connectivity is the exception, not the default. Every core action — template loading, form completion, evidence capture — works fully offline; synchronization is a deferred operation resolved server-side via Last-Write-Wins conflict resolution against a Node.js/PostgreSQL backend. The sync queue deduplicates on a composite key, so repeated edits to the same field never produce duplicate writes. Built with React Native, Expo SDK 54, and TypeScript, and documented with the same rigor it's built: known limitations (unencrypted token storage, no automated test coverage yet) are tracked openly rather than hidden.",
    },
    cvBuilder: {
      description:
        "A resume-building tool where the AI assistance runs entirely client-side. TensorFlow.js handles content suggestions and ATS-keyword analysis in the browser, so no resume data is ever sent to a server. Exports to PDF, DOCX, or HTML, with template-based formatting.",
    },
    homelab: {
      description:
        "A production-inspired homelab, built and documented as Infrastructure as Code rather than manually configured. The guiding constraint: if it's not in Git, it doesn't exist. Linux hardening (SSH key auth, UFW, Fail2Ban, automatic security updates) is fully automated via Ansible; containerized workloads via Docker are in active buildout, with Kubernetes, GitOps, and observability tooling staged as the next phases. Every change is incremental, reproducible, and version-controlled by design.",
    },
    rpg: {
      description:
        "A C++ combat engine built for an OOP coursework project, and as much a systems-coordination exercise as a technical one: repo structure, Makefile, branching strategy, and work-order documentation were set up to keep a team project shippable despite inconsistent collaborator availability.",
    },
  },

  // ---------- stack ----------
  stack: {
    label: '// STACK / INVENTORY',
    revealKicker: "> how it's used",
    note: 'click a tool card for how it maps into a Lab project · hover to pause, drag to browse',
  },

  // stack tool briefs
  stackBriefs: {
    typescript: "Type safety across the app's screens and sync services.",
    reactNative: 'Core framework for the offline-first audit UI.',
    expo: 'Build tooling and device APIs (camera, storage).',
    javascript: 'Core logic for the resume builder and ATS-suggestion engine.',
    htmlcss: 'Structure and styling for the builder UI.',
    docker: 'Containerizing services on the homelab nodes.',
    compose: 'Multi-container orchestration, automated via Ansible.',
    ansible: 'Linux hardening and infrastructure provisioning playbooks.',
    cpp: "OOP combat engine; also set up the team's repo structure and workflow.",
  },

  // ---------- comms ----------
  comms: {
    label: '// COMMS / CONTACT',
    reachOut: 'Reach out via:',
    orSend: 'Or send a message:',
    formName: 'name_',
    formEmail: 'email_',
    formMessage: 'message_',
    send: '[ send ]',
  },

  // ---------- footer ----------
  footer: {
    built: '© 2026 Souf · built with Astro',
    lastDeployed: 'last deployed:',
  },

  // ---------- 404 ----------
  notFound: {
    ariaLabel: 'Return to home',
    returnIndex: '[ return to index ]',
    curlCmd: '$ curl --request GET /this-page',
    curlErr: 'curl: (22) The requested URL returned error: 404',
    connRefused: 'route not found · connection refused',
    diagnostics: '> diagnostics',
    offMap: "→ you're either off-map or the link is stale.",
    knownRoutes: '→ all known routes live on the index.',
  },

  // ---------- sound toggle ----------
  sound: {
    ariaOff: 'sfx: off, enable UI sounds',
    ariaOn: 'sfx: on, mute UI sounds',
    titleOff: 'UI sounds: off',
    titleOn: 'UI sounds: on',
    label: 'sfx:',
  },
} as const;

export type Dictionary = typeof en;
export default en;