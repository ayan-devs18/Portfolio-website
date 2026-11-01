export const GithubIcon = ({ className = "", ...rest }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" className={`w-full h-auto ${className}`} {...rest}>
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className = "", ...rest }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" className={`w-full h-auto ${className}`} {...rest}>
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      fill="#fff"
      d="M7.1 9.5H4.6V19h2.5V9.5ZM5.85 5.2a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM19.4 13.6c0-2.6-1.4-4.3-3.7-4.3-1.3 0-2.2.7-2.6 1.4V9.5h-2.4V19h2.5v-5c0-1.3.6-2.1 1.7-2.1 1 0 1.5.7 1.5 2.1v5h2.5v-5.4Z"
    />
  </svg>
);

export const MailIcon = ({ className = "", ...rest }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" className={`w-full h-auto ${className}`} {...rest}>
    <rect x="2" y="4" width="20" height="16" rx="3" fill="#B63E96" />
    <path d="m4 7 8 6 8-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LinkArrow = ({ className = "", ...rest }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" className={`w-full h-auto ${className}`} {...rest}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 4h6v6M20 4 10 14M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"
    />
  </svg>
);

export const SunIcon = ({ className = "", ...rest }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" className={`w-full h-auto ${className}`} {...rest}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </g>
  </svg>
);

export const MoonIcon = ({ className = "", ...rest }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true" className={`w-full h-auto ${className}`} {...rest}>
    <path fill="currentColor" d="M20.6 14.2A8.5 8.5 0 0 1 9.8 3.4a.6.6 0 0 0-.8-.7A9.5 9.5 0 1 0 21.3 15a.6.6 0 0 0-.7-.8Z" />
  </svg>
);
