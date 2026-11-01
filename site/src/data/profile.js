// Everything on the site comes from here. Edit this file to update the
// portfolio; no component needs to change.

export const profile = {
  name: "Aayan Qamar",
  initials: "AQ",
  title: "Software Engineer",
  focus: "AI Agents, Backend Development and CRM Automation",
  location: "Lahore, Pakistan",
  timezone: "UTC+5",
  availability: "Open to remote opportunities",
  email: "ayanqamar18@gmail.com",
  phone: "+92 300 4164595",
  resume: "/Aayan-Qamar-Resume.pdf",
  siteUrl: "https://aayanqamar.netlify.app",
  links: {
    github: "https://github.com/ayan-devs18",
    linkedin: "https://www.linkedin.com/in/ayan-qamar-dev",
  },
  headline: "Turning Business Problems Into Reliable Software.",
  intro:
    "Software engineer building AI voice and SMS agents, Node.js and PostgreSQL backends, and CRM automation that teams can trust in production. Explore the systems I have shipped and how I work.",
  bio: [
    "Hi, I'm Aayan Qamar, a software engineer who has been building for the web professionally since 2024 and completed a Computer Science degree in 2026.",
    "My recent work spans production voice and SMS automation with TypeScript, Node.js and PostgreSQL, and responsive applications in React and Vue. Today I configure and validate HubSpot and Clio integrations, data mapping and operational workflows for a law firm.",
    "I use AI coding tools the careful way: automated tests, default-off feature flags and human review before anything ships. The goal is always the same, changes that are fast to deliver and safe to run.",
  ],
};

// Facts taken from the resume; no invented client counts.
export const stats = [
  { value: "2024", label: "Building For The Web Since" },
  { value: "6", label: "Professional Roles" },
  { value: "3rd", label: "Place, Final Year Project" },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis / Valkey",
      "BullMQ",
      "REST APIs",
      "Webhooks",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "Vue.js", "Responsive Design", "UI/UX", "Figma", "WordPress"],
  },
  {
    group: "AI and Voice",
    items: [
      "Claude Code",
      "LLM Applications",
      "Agent Orchestration",
      "Tool Calling",
      "Twilio",
      "LiveKit",
      "ElevenLabs",
      "SIP / jambonz",
      "A2P 10DLC",
    ],
  },
  {
    group: "CRM and Delivery",
    items: [
      "HubSpot",
      "Clio",
      "Data Mapping",
      "Git",
      "Vitest",
      "Docker",
      "Kubernetes",
      "DigitalOcean",
      "CI/CD",
      "Turborepo",
      "pnpm",
    ],
  },
];

export const experience = [
  {
    position: "CRM and Automation Specialist",
    company: "Oikonomakis Law",
    time: "Sep 2026 - Present",
    place: "Remote",
    points: [
      "Configure and validate HubSpot-to-Clio integration workflows, including contact and matter mapping, staff assignments and synchronization status.",
      "Verify migrated matters and identifiers across both systems; investigate missing fields, duplicate risks and records routed for manual review.",
      "Configure restricted-access roles and matter permissions, correct assignments and support user access troubleshooting.",
      "Prepare reporting protocols and bilingual assignment-email templates; test workflow components before enabling automation.",
    ],
  },
  {
    position: "Agentic AI Engineer",
    company: "Orion AI Solutions",
    time: "Jun 2026 - Sep 2026",
    place: "Remote (US)",
    points: [
      "Owned reliability work in a large TypeScript monorepo, from diagnosis to automated tests and review-ready pull requests behind default-off feature flags.",
      "Built outbound voice and SMS workflows for dialing, AI booking and reminders across Twilio, SIP/jambonz, LiveKit and ElevenLabs, with quiet hours and do-not-contact checks.",
      "Resolved stuck-session defects through session reconciliation and requeue logic, with instrumentation to verify behavior in production.",
      "Strengthened billing correctness with row-locked credit deduction, idempotency keys and audit records; enforced tenant isolation in API routes.",
      "Coordinated AI coding agents in isolated Git worktrees with documented guardrails and human review before merging.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Systemic Digital",
    time: "May 2026 - Sep 2026",
    place: "Remote (US)",
    points: [
      "Built and deployed responsive business and marketing websites, from layout through implementation and client delivery.",
    ],
  },
  {
    position: "Frontend Developer (Contract)",
    company: "Arcovia",
    time: "Jan 2024 - Apr 2025",
    place: "Remote (US)",
    points: [
      "Built and optimized multi-page React and Vue applications, improving mobile responsiveness, navigation and user experience.",
      "Reduced bounce rate by 30% through performance and layout work; SEO improvements increased organic traffic by 40%.",
    ],
  },
  {
    position: "Frontend Web Developer (Contract)",
    company: "PA Advisor Group",
    time: "Aug 2024 - May 2025",
    place: "Remote",
    points: [
      "Redesigned the corporate website and streamlined CMS workflows, reducing content update time by 50%.",
    ],
  },
  {
    position: "Web Developer, then Social Media Manager",
    company: "Tutify Educational Platform",
    time: "Jul 2024 - Jun 2025",
    place: "Islamabad, Pakistan",
    points: [
      "Rebuilt the website for a full rebrand; new landing pages converted 25% better than the previous ones.",
      "Managed Meta Ads campaigns, improving click-through rate by 35% and reducing cost per click by 20%.",
    ],
  },
];

export const internships = [
  { position: "Frontend Developer", company: "Cognifyz Technologies", time: "Aug 2024 - Sep 2024" },
  { position: "Summer Intern", company: "KaiRiz Cyber Technologies", time: "Jun 2024 - Aug 2024" },
  { position: "Web Development Intern", company: "Internee.pk", time: "Jun 2024 - Jul 2024" },
];

export const education = [
  {
    type: "Bachelor of Computer Science",
    time: "2022 - 2026",
    place: "University of Engineering and Technology, Taxila",
    info: "Achieved 3rd position for the Final Year Project, an AI-Based Personal Health Assistant, supervised by Dr. Syed Aun Irtaza. Executive, Media Team, Microsoft Learn Student Ambassadors.",
  },
  {
    type: "Frontend Development",
    time: "Certification",
    place: "Great Learning",
    info: "Modern frontend development fundamentals.",
  },
  {
    type: "Web Development and UI/UX",
    time: "Certification",
    place: "Digiskills.pk",
    info: "Web development and interface design.",
  },
];

export const projects = [
  {
    featured: true,
    kicker: "Reliability Engineering",
    title: "Webhook Reliability Console",
    summary:
      "A working Node.js application for inspecting persisted event deliveries, diagnosing failures, and retrying safely without duplicate downstream actions. It serves live delivery data through REST APIs, persists attempts and latency atomically, and tests idempotency keys and duplicate-retry protection.",
    tags: ["Node.js", "REST APIs", "Persistence", "Testing"],
    image: "/images/case-webhook.svg",
    live: "https://ayan-devs18.github.io/webhook-reliability-console/",
    source: "https://github.com/ayan-devs18/webhook-reliability-console",
  },
  {
    kicker: "Applied AI Operations",
    title: "AI Support Triage Workspace",
    summary:
      "A human-reviewed support workspace that turns incoming issues into a prioritized queue with priority, SLA and confidence signals, and a draft-response workflow that requires approval.",
    tags: ["AI Workflows", "Support Ops", "Human Review"],
    image: "/images/case-support.svg",
    live: "https://ayan-devs18.github.io/ai-support-triage-workspace/",
    source: "https://github.com/ayan-devs18/ai-support-triage-workspace",
  },
  {
    kicker: "Frontend Performance",
    title: "Web Vitals Command Center",
    summary:
      "A release-focused performance interface that tracks LCP, INP and CLS and turns measurements into a prioritized engineering queue.",
    tags: ["Core Web Vitals", "Performance", "UX"],
    image: "/images/case-vitals.svg",
    live: "https://ayan-devs18.github.io/web-vitals-command-center/",
    source: "https://github.com/ayan-devs18/web-vitals-command-center",
  },
  {
    featured: true,
    kicker: "Business Automation",
    title: "Client Automation Toolkit",
    summary:
      "A delivery blueprint connecting lead research, validation, CRM state, AI-assisted qualification, multichannel follow-up and reporting, with consent, opt-out, retry and failure-handling controls. Adaptable to n8n, GoHighLevel and custom APIs.",
    tags: ["CRM", "n8n", "APIs", "AI Agents"],
    image: "/images/case-automation.svg",
    source: "https://github.com/ayan-devs18/Client-Automation-Toolkit",
  },
];
