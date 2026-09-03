// translations/fr.ts: French dictionary — mirror of en.ts. Structure must be
// identical so `dictionaries[locale]` stays typed against the English shape.
// Technical terms (React Native, Docker, CI/CD, ...) are deliberately left in
// their original form; proper nouns and institution names are untouched.

import type { Dictionary } from './en';

const fr: Dictionary = {
  // ---------- document / meta ----------
  siteTitle: 'Souf · Portfolio DevOps',
  siteDescription:
    "Souf — étudiant en informatique avec un parcours Systèmes & Réseaux, en route vers DevOps/DevSecOps. Projets de lab, inventaire de la stack et contact.",
  ogLocale: 'fr_FR',

  // ---------- nav ----------
  nav: {
    about: 'Système',
    lab: 'Lab',
    stack: 'Stack',
    comms: 'Comms',
  },
  langSwitcherLabel: 'Langue',

  // ---------- hero ----------
  hero: {
    terminalTitle: 'souf@infra:~',
    boot: [
      '$ ssh souf@infra',
      'Connexion...',
      'Authentifié en tant que S0uf12n8',
      '> whoami',
      'Souf : étudiant en informatique, parcours technicien Systèmes & Réseaux, vers DevOps/DevSecOps.',
      '> status',
      'Licence GI dernière année · Faculté de Taroudant, Maroc',
    ],
    bootDim: [1, 2],
    bootPrompt: [0, 3, 5],
    viewProfile: '[ Voir le profil ]',
    contact: '[ Contact ]',
    vizHead: '// INFRA TOPOLOGY',
  },

  // ---------- profile ----------
  profile: {
    label: '// PROFIL',
    terminalTitle: 'souf@infra: ~/profil',
    downloadCV: '[ Télécharger le CV ]',
    viewProfile: '[ Voir le profil ]',
    tabs: { about: 'APROPOS', experience: 'Expérience', education: 'Formation' },
    tabRailAria: 'Sections du profil',
    whoami: {
      systemStatus: 'System_Status:',
      active: 'Actif',
      base: 'Base:',
      baseVal: 'Taroudant, Maroc',
      background: 'Background:',
      backgroundVal: 'Bac+2 DTS Systèmes & Réseaux (ISTA Taroudant) → technicien Systèmes & Réseaux, Casablanca → Licence GI, dernière année',
      currentFocus: 'Current_Focus:',
      currentFocusVal: '[ Docker, Docker Compose, Kubernetes (k3s), CI/CD (GitHub Actions), observabilité Prometheus/Grafana ]',
      target: 'Target:',
      targetVal: 'Ingénierie d\'infrastructure',
    },
    contextKicker: '// contexte',
    bio: 'J\'ai travaillé comme technicien systèmes et réseaux dans une entreprise d\'infrastructure à Casablanca. Le temps d\'apprendre que les problèmes intéressants vivent en amont du matériel, dans les pipelines et l\'infrastructure qui rendent les déploiements reproductibles et les pannes observables. DevOps, c\'est là où ce parcours rencontre la théorie informatique que je termine aujourd\'hui.',
    cvTitle: 'CV non encore mis en ligne',
  },

  // experience timeline
  experience: {
    dewebKicker: 'réseaux & voip',
    dewebTitle: 'DEWEB Technology',
    dewebMeta: 'Casablanca, Maroc · sur site',
    dewebSub1Title: 'Technicien Réseaux & IT',
    fullTime: 'temps plein',
    dewebSub1Period: 'Nov 2025 – Jan 2026',
    dewebSub1Points: [
      'Configuration et administration d\'équipements réseau (switchs, routeurs, VLANs, DHCP, adressage IP)',
      'Installation et gestion de systèmes de téléphonie IP (comptes SIP, postes, provisioning)',
    ],
    dewebSub1Skills: ['Windows Server', 'VoIP'],
    dewebSub2Title: 'Stagiaire Infra IT & Support',
    intern: 'stage',
    dewebSub2Period: 'Sep 2025 – Nov 2025',
    dewebSub2Points: [
      'Participation à la configuration de dispositifs réseau, aux VLANs de base et aux adressages IP',
      'Support au déploiement de systèmes de vidéosurveillance, aux paramètres NVR et à la configuration du contrôle d\'accès',
    ],
    accessKicker: 'cctv & réseaux',
    accessTitle: 'Access Point IT',
    accessMeta: 'Taroudant, Souss-Massa, Maroc · sur site',
    accessSubTitle: 'Stagiaire',
    accessPeriod: 'Fév 2023 – Mar 2023',
    accessPoints: [
      'Assistance à la configuration des périphériques réseau, bornes Wi-Fi et dépannage',
      'Participation à l\'installation et la maintenance des systèmes CCTV et des serveurs de sécurité',
    ],
    accessSkills: ['Réseau', 'Câblage'],
  },

  // education timeline
  education: {
    techKicker: 'ofppt · ntic',
    techTitle: 'Technicien Spécialisé, Infrastructure Digitale / Administration Réseaux et Systèmes',
    techMeta: 'Institut Spécialisé de Technologie Appliquée NTIC (OFPPT) · 2021–2023',
    deugKicker: 'deug',
    deugTitle: 'DEUG, Informatique',
    deugMeta: 'Université Ibn Zohr · 2023–2026',
    deugNote: 'Fondations sur deux ans : algorithmique, Python, C, programmation orientée objet',
    licenceKicker: 'licence · dernière année',
    licenceTitle: 'Licence, Informatique',
    licenceMeta: 'Université Ibn Zohr · 2023–2027 (dernière année)',
  },

  // ---------- lab ----------
  lab: { label: '// LAB / PROJETS', expandHint: 'détails →' },

  projectDetail: {
    closeAria: 'Fermer le panneau de détails',
    dialogAria: 'Détails du projet',
    github: 'GitHub →',
    link: 'Lien →',
    noPublicLink: 'pas de lien public',
  },

  projects: {
    acomedMobile: {
      description:
        "Une plateforme d'audit pensé offline-first pour un workflow d'inspection terrain du ministère de la Santé, où la connectivité réseau est l'exception plutôt que la règle. Toutes les actions clés — chargement des modèles, saisie des formulaires, capture des preuves — fonctionnent intégralement hors ligne ; la synchronisation est une opération différée résolue côté serveur par résolution de conflit Last-Write-Wins contre un backend Node.js/PostgreSQL. La file d'attente de sync se dédoublonne sur une clé composite, donc des éditions répétées du même champ ne produisent jamais d'écritures en double. Construit avec React Native, Expo SDK 54 et TypeScript, et documenté avec la même rigueur qu'il est développé : les limitations connues (stockage des jetons non chiffré, pas encore de couverture de tests automatisés) sont suivies ouvertement plutôt que cachées.",
    },
    cvBuilder: {
      description:
        "Un outil de création de CV dont l'assistance IA tourne entièrement côté client. TensorFlow.js gère les suggestions de contenu et l'analyse des mots-clés ATS dans le navigateur, de sorte qu'aucune donnée de CV n'est jamais envoyée à un serveur. Export vers PDF, DOCX ou HTML, avec une mise en forme par modèle.",
    },
    homelab: {
      description:
        "Un homelab inspiré de la production, construit et documenté en Infrastructure as Code plutôt que configuré à la main. La contrainte directrice : si ce n'est pas dans Git, ça n'existe pas. Le durcissement Linux (authentification SSH par clé, UFW, Fail2Ban, mises à jour de sécurité automatiques) est entièrement automatisé via Ansible ; les workloads conteneurisés via Docker sont en construction active, avec Kubernetes, GitOps et les outils d'observabilité prévus pour les prochaines phases. Chaque changement est incrémental, reproductible et versionné par conception.",
    },
    rpg: {
      description:
        "Un moteur de combat en C++ construit pour un projet de cours en POO, autant un exercice de coordination d'équipe que technique : structure du repo, Makefile, stratégie de branches et documentation des ordres de travail ont été mis en place pour qu'un projet d'équipe reste livrable malgré une disponibilité irrégulière des contributeurs.",
    },
  },

  // ---------- stack ----------
  stack: {
    label: '// STACK / INVENTAIRE',
    revealKicker: '> usage',
    note: 'cliquez sur une carte outil pour son usage dans un projet Lab · survolez pour suspendre, glissez pour parcourir',
  },

  // stack tool briefs
  stackBriefs: {
    typescript: 'Sécurité de typage sur les écrans et les services de sync de l\'app.',
    reactNative: 'Framework principal pour l\'UI d\'audit offline-first.',
    expo: 'Outillage de build et API périphériques (caméra, stockage).',
    javascript: 'Logique centrale du builder de CV et du moteur de suggestions ATS.',
    htmlcss: 'Structure et styles pour l\'UI du builder.',
    docker: 'Conteneurisation des services sur les nœuds du homelab.',
    compose: 'Orchestration multi-conteneurs, automatisée via Ansible.',
    ansible: 'Durcissement Linux et playbooks de provisionnement d\'infra.',
    cpp: 'Moteur de combat POO ; a aussi mis en place la structure du repo et le workflow de l\'équipe.',
  },

  // ---------- comms ----------
  comms: {
    label: '// COMMS / CONTACT',
    reachOut: 'Contactez-moi via :',
    orSend: 'Ou envoyez un message :',
    formName: 'nom_',
    formEmail: 'email_',
    formMessage: 'message_',
    send: '[ envoyer ]',
  },

  // ---------- footer ----------
  footer: {
    built: '© 2026 Souf · construit avec Astro',
    lastDeployed: 'dernier déploiement :',
  },

  // ---------- 404 ----------
  notFound: {
    ariaLabel: 'Retour à l\'accueil',
    returnIndex: '[ retour à l\'index ]',
    curlCmd: '$ curl --request GET /this-page',
    curlErr: 'curl: (22) The requested URL returned error: 404',
    connRefused: 'route introuvable · connexion refusée',
    diagnostics: '> diagnostics',
    offMap: '→ vous êtes hors-carte ou le lien est obsolète.',
    knownRoutes: '→ toutes les routes connues vivent sur l\'index.',
  },

  // ---------- sound toggle ----------
  sound: {
    ariaOff: 'sfx: off, activer les sons UI',
    ariaOn: 'sfx: on, couper les sons UI',
    titleOff: 'Sons UI : off',
    titleOn: 'Sons UI : on',
    label: 'sfx:',
  },
};

export default fr;