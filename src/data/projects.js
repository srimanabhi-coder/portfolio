export const projects = [
  {
    id: 1,
    kicker: 'Web · Multi-tenant',
    title: 'Lending operations dashboard',
    description:
      'Single React codebase serving 4+ lending brands via hostname-based routing across Auth, Chat, CDP, LOS, LMS, and Payments. Lazy loading and code splitting cut initial bundle size and improved time-to-interactive for credit and ops teams.',
    impact: '4+ tenants · one codebase',
    technologies: ['React.js', 'TypeScript', 'Vite', 'TanStack Query', 'JWT', 'RBAC'],
  },
  {
    id: 2,
    kicker: 'Realtime',
    title: 'Operations chat with offline sync',
    description:
      'MQTT over SharedWorker, Firebase Cloud Messaging, and IndexedDB so operators keep a reliable thread across tabs and flaky networks. Cross-tab message loss was the failure mode this architecture was built to kill.',
    impact: 'Offline-first · no cross-tab loss',
    technologies: ['MQTT', 'SharedWorker', 'IndexedDB', 'FCM', 'React.js'],
  },
  {
    id: 3,
    kicker: 'Mobile · React Native',
    title: 'Full loan-lifecycle app',
    description:
      'Origination through KYC, approval, disbursal, and EMI repayment. Production release train with CodePush, white-label branding, Sentry, Crashlytics, and Amplitude — 100k+ downloads, 4.5★ Play Store, 99.5% crash-free sessions.',
    impact: '100k+ downloads · 99.5% crash-free',
    technologies: ['React Native 0.84', 'CodePush', 'Sentry', 'Crashlytics', 'Amplitude'],
  },
  {
    id: 4,
    kicker: 'Compliance',
    title: 'Regulated KYC & collections',
    description:
      'DigiLocker Aadhaar/PAN, CKYC OTP, and Account Aggregator consent wired into CDP/LOS. On web: Customer 360 + CRM, JWT-gated disbursal, and collections workflows used daily by credit and recovery.',
    impact: 'KYC in production · Customer 360',
    technologies: ['DigiLocker', 'CKYC', 'Account Aggregator', 'LOS/LMS', 'JWT'],
  },
];

export const labs = [
  {
    id: 1,
    title: 'PokeMon App',
    description: 'Search and inspect Pokémon with React.',
    github: 'https://github.com/srimanabhi-coder/PokeMon-App',
    live: 'https://melodic-bombolone-a9ac3f.netlify.app/',
  },
  {
    id: 2,
    title: 'Recipe App',
    description: 'Meal search against TheMealDB with React.',
    github: 'https://github.com/srimanabhi-coder/Recipe-App',
    live: 'https://delightful-travesseiro-f5c834.netlify.app/',
  },
  {
    id: 3,
    title: 'Calculator and Clock',
    description: 'Scientific calculator and live clock in vanilla JS.',
    github: 'https://github.com/srimanabhi-coder/Calc-and-Clock',
    live: 'https://tranquil-sunshine-40203c.netlify.app/',
  },
];
