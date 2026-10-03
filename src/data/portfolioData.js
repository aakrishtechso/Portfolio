// =========================================================================
// AJEET PATEL — PORTFOLIO CONFIGURATION & DATA
// =========================================================================

export const PERSONAL_INFO = {
  name: 'Ajeet Patel',
  title: 'Founder, Web Developer, Digital Marketer & AI Builder',
  email: 'ajeetlodhii01@gmail.com',
  phone: '+91 9691822276',
  // Clearly labeled WhatsApp configuration: Clean digits with country code (919691822276)
  whatsappNumber: '919691822276',
  location: 'India',
  bio: 'Founder of MyRyedo and builder of Aakrish Tech. I turn ideas into real digital products, high-converting platforms, and scalable growth systems.',
  // Real resume file served directly from public/
  resumeUrl: 'https://drive.google.com/file/d/1JNWUGzjKU1r-2O95PFH62jSBpdqVTX6s/view?usp=sharing',
  socialLinks: {
    github: 'https://github.com/ajeetlodhii',
    linkedin: 'https://linkedin.com',
    email: 'mailto:ajeetlodhii01@gmail.com',
    phone: 'tel:+919691822276'
  }
};

export const CONVERSATIONAL_ABOUT = [
  {
    id: 'who',
    question: 'WHO IS AJEET?',
    shortTag: 'Identity',
    answer: "I'm a developer, entrepreneur and digital creator who enjoys turning ideas into real digital products. Based in India, I combine technical engineering with commercial strategy to build things people genuinely love using."
  },
  {
    id: 'build',
    question: 'WHAT DOES HE BUILD?',
    shortTag: 'Creations',
    answer: 'Websites, applications, digital experiences, marketing systems, and AI-powered ideas. I focus on sub-second speed, clean typography, and zero-bloat functionality.'
  },
  {
    id: 'why',
    question: 'WHY DOES HE BUILD?',
    shortTag: 'Philosophy',
    answer: 'Because turning an idea from a blank screen into something real that someone can interact with, use, and benefit from is the closest thing to real-world magic.'
  },
  {
    id: 'working',
    question: 'WHAT IS HE WORKING ON?',
    shortTag: 'Current Focus',
    answer: 'Scaling MyRyedo (my vehicle sharing & rental startup platform) and growing Aakrish Tech (my digital agency helping businesses build, improve, and grow digitally through technology and AI).'
  },
  {
    id: 'learning',
    question: 'WHAT IS HE LEARNING?',
    shortTag: 'Growth',
    answer: 'Deepening real-time state synchronization, multi-agent AI orchestration, full-stack performance tuning in modern React, and organic acquisition growth loops.'
  }
];

export const STARTUPS_DATA = {
  myryedo: {
    name: 'MyRyedo',
    subheadline: 'Your Vehicle. Their Journey. Your Earnings.',
    websiteUrl: 'https://myryedo.com',
    description: 'MyRyedo is a platform built to make vehicle sharing and renting easier, more flexible, and more accessible.',
    status: 'NOW LIVE',
    forOwners: {
      title: 'FOR VEHICLE OWNERS',
      text: 'Have a vehicle that’s sitting unused? List it on MyRyedo and earn when someone rents it.',
      badge: 'Earn from Idle Assets',
      benefits: ['Simple listing process', 'Flexible calendar control', 'Direct owner payouts', 'Verified renters']
    },
    forRenters: {
      title: 'FOR RENTERS',
      text: 'Need a vehicle? Find one that fits your needs and rent it for a few hours, a day, 5 days, a week, or as long as you need.',
      badge: 'Rent with Total Flexibility',
      durations: ['A few hours', '1 Day', '5 Days', '1 Week', 'Custom duration'],
      benefits: ['Instant local search', 'Transparent pricing', 'Clean vehicles', 'Zero hidden fees']
    },
    philosophyTitle: 'ONE PLATFORM. MORE FLEXIBILITY.',
    philosophyTagline: 'Your vehicle can earn. Someone else can move.',
    launchNote: 'MyRyedo is now live, and this is just the beginning.',
    myRole: 'Founder & Lead Builder',
    technologies: ['React', 'JavaScript', 'Node.js', 'Realtime Booking UI', 'Tailwind CSS']
  },
  aakrishTech: {
    name: 'Aakrish Tech',
    subheadline: 'BUILD. GROW. GO DIGITAL.',
    websiteUrl: 'https://aakrish.vercel.app',
    description: 'Aakrish Tech is a digital agency/company focused on helping businesses grow through technology and digital solutions.',
    mission: 'We do not simply build technology; our purpose is to help businesses build, improve, and grow digitally.',
    capabilities: [
      { name: 'Websites', desc: 'High-performance, modern web architectures with unmatched speed and responsive craft.' },
      { name: 'Applications', desc: 'Custom web apps, client dashboards, and dynamic digital tools that streamline operations.' },
      { name: 'Digital Products', desc: 'Zero-to-one product design, UI/UX systems, and production engineering.' },
      { name: 'Digital Experiences', desc: 'Memorable brand touchpoints, fluid interactions, and delightful customer journeys.' },
      { name: 'Digital Marketing', desc: 'Technical SEO, organic search discovery, social positioning, and content funnels.' },
      { name: 'Business Growth Solutions', desc: 'Conversion rate optimization (CRO), automated pipelines, and lead generation.' },
      { name: 'AI-Powered Solutions', desc: 'Practical generative AI automations, prompt workflows, and intelligent business tooling.' }
    ],
    myRole: 'Founder & Builder',
    technologies: ['Modern Web Architecture', 'Next.js / React', 'Technical SEO', 'AI Automations', 'Growth Funnels']
  }
};

export const PROJECTS_DATA = [
  {
    id: 'dsa-game-hub',
    title: 'DSA Game Hub',
    featured: true,
    tagline: 'Interactive Data Structures & Algorithms visual gaming and practice tool.',
    whatItIs: 'A playful and educational web platform that turns abstract algorithms and data structures into interactive gamified simulations.',
    whatItDoes: 'Allows users to visualize, play with, and step through complex algorithm workflows including sorting techniques, pathfinding graph traversals, and tree algorithms in real time.',
    whyItMatters: 'Makes CS fundamentals enjoyable and intuitive rather than dry and intimidating, helping learners grasp edge cases and time complexities visually.',
    liveUrl: 'https://ajeetlodhii.github.io/Dsa-Game/',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Algorithms', 'Interactive UI'],
    categoryBadge: 'Interactive Tool & Game',
    accentColor: 'purple'
  },
  {
    id: 'smart-resume-analyzer',
    title: 'Smart Resume Analyzer',
    featured: true,
    tagline: 'Intelligent resume scoring, ATS optimization, and semantic skill-gap detector.',
    whatItIs: 'An intelligent career optimization platform designed to solve the black-box problem of Applicant Tracking Systems (ATS).',
    whatItDoes: 'Parses resume content against targeted job descriptions, calculates compatibility scores, highlights missing industry keywords, and suggests actionable bullet point upgrades.',
    whyItMatters: 'Empowers job seekers to optimize their applications with quantifiable metrics, boosting interview callback rates.',
    liveUrl: 'https://ajeetlodhii.github.io/Resume-Analyzer/index.html',
    technologies: ['JavaScript', 'Text Extraction', 'NLP Matcher', 'Tailwind CSS', 'Web APIs'],
    categoryBadge: 'AI & Career Productivity',
    accentColor: 'indigo'
  }
];

export const ASK_AJEET_QUESTIONS = [
  {
    id: 'q-myryedo',
    question: 'Why did you start MyRyedo?',
    topic: 'Startup Origin',
    answer: 'I noticed how many vehicles sit parked and unused for hours or days while people nearby struggle to find flexible, affordable transport. I wanted to build a simple, reliable platform where vehicle owners can turn idle assets into earnings and renters can access mobility for a few hours, a day, 5 days, or as long as they need—without cumbersome red tape.'
  },
  {
    id: 'q-aakrish',
    question: 'What is Aakrish Tech?',
    topic: 'Venture & Agency',
    answer: 'Aakrish Tech is my digital agency and company. We help businesses build, improve, and grow digitally. We don’t just write code; we design complete digital experiences, high-converting websites, web apps, marketing funnels, and AI-powered solutions that drive measurable business growth.'
  },
  {
    id: 'q-learning',
    question: 'What are you learning right now?',
    topic: 'Continuous Learning',
    answer: 'Right now, I am exploring low-latency real-time state synchronization, multi-agent AI orchestration, and advanced web performance optimization. On the business side, I’m studying organic acquisition loops and user retention mechanics.'
  },
  {
    id: 'q-enjoy',
    question: 'What do you enjoy building?',
    topic: 'Passion',
    answer: 'I love building software that feels alive, fast, and tactile. Whether it’s a vehicle sharing platform like MyRyedo or a sleek web application, there’s immense joy in watching people use something you designed from scratch to solve an everyday problem.'
  },
  {
    id: 'q-biggest',
    question: 'What is your biggest project?',
    topic: 'Major Work',
    answer: 'MyRyedo is my biggest startup venture to date. Bringing a vehicle sharing and rental platform from idea to live deployment required full-stack engineering, real-time booking flows, responsive UI design, and thinking through both owner and renter experiences.'
  },
  {
    id: 'q-next',
    question: 'What are you working on next?',
    topic: 'Roadmap',
    answer: 'Scaling MyRyedo with new features, expanding our fleet categories, and onboarding more verified owners and renters. Parallel to that, delivering high-impact web products and growth campaigns for our clients at Aakrish Tech.'
  },
  {
    id: 'q-opportunities',
    question: 'What kind of opportunities are you looking for?',
    topic: 'Collaborations',
    answer: 'I am always excited to connect with ambitious founders, businesses looking for a high-velocity digital partner to build or scale their product, and visionary collaborators passionate about mobility, web tech, and AI.'
  }
];

export const SKILLS = [
  {
    category: 'Web & App Engineering',
    items: ['JavaScript (ES6+)', 'React.js', 'Next.js', 'HTML5 & Modern CSS', 'Tailwind CSS', 'Responsive UI/UX', 'Component Systems']
  },
  {
    category: 'Backend & Cloud APIs',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Database Management', 'Git & GitHub Workflows', 'Performance Optimization']
  },
  {
    category: 'AI & Automation Solutions',
    items: ['Generative AI APIs', 'Prompt Engineering', 'AI Workflow Automation', 'LLM Integration', 'Task Automation']
  },
  {
    category: 'Digital Marketing & Growth',
    items: ['Search Engine Optimization (SEO)', 'Content Strategy', 'Conversion Rate Optimization (CRO)', 'Analytics', 'Social Distribution']
  }
];
