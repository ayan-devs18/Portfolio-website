import { profile } from "@/data/profile";

/**
 * Spinning circular label with a "Hire Me" button in the middle — the
 * original design used a PNG of the text; this draws it as SVG so the words
 * can be changed and stay sharp.
 */
export default function HireMe() {
  const label = "Software Engineer · AI Agents · Backend · ";
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center overflow-hidden md:absolute md:bottom-auto md:left-auto md:right-8 md:top-0 sm:right-0">
      <div className="relative flex h-auto w-48 items-center justify-center md:w-24">
        <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow fill-dark dark:fill-light" aria-hidden="true">
          <defs>
            <path id="hire-circle" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
          </defs>
          <text className="text-[17px] font-semibold uppercase tracking-[0.12em]">
            <textPath href="#hire-circle" textLength="470">
              {label}
            </textPath>
          </text>
        </svg>
        <a
          href={`mailto:${profile.email}?subject=Opportunity%20for%20Aayan`}
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-dark bg-dark font-semibold text-light shadow-md hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:h-12 md:w-12 md:text-[10px]"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}
