import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { profile } from "@/data/profile";

const NAV = [
  { href: "/", title: "Home" },
  { href: "/about/", title: "About" },
  { href: "/projects/", title: "Projects" },
];

function isActive(router, href) {
  const path = router.asPath.split(/[?#]/)[0];
  return href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, ""));
}

function NavLink({ href, title, className = "", onClick }) {
  const router = useRouter();
  const active = isActive(router, href);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative ${className}`}
      aria-current={active ? "page" : undefined}
    >
      {title}
      <span
        className={`absolute -bottom-0.5 left-0 inline-block h-[1px] bg-current transition-[width] duration-300 ease group-hover:w-full ${
          active ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

function Socials({ size = "w-6" }) {
  const items = [
    { href: profile.links.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  ];
  return items.map(({ href, label, Icon }) => (
    <motion.a
      key={label}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`${size} mx-3 sm:mx-2`}
    >
      <Icon />
    </motion.a>
  ));
}

function ThemeToggle({ mode, setMode }) {
  return (
    <button
      type="button"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`ml-3 flex h-8 w-8 items-center justify-center rounded-full p-1.5 ${
        mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {mode === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  return (
    <header className="relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        type="button"
        className="hidden flex-col items-center justify-center lg:flex"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${open ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`} />
        <span className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${open ? "opacity-0" : "opacity-100"}`} />
        <span className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${open ? "-translate-y-1 -rotate-45" : "translate-y-0.5"}`} />
      </button>

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav aria-label="Main">
          {NAV.map((item, i) => (
            <NavLink key={item.href} {...item} className={i === 0 ? "mr-4" : "mx-4"} />
          ))}
        </nav>
        <nav aria-label="Social" className="flex flex-wrap items-center justify-center">
          <Socials />
          <ThemeToggle mode={mode} setMode={setMode} />
        </nav>
      </div>

      {open ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed left-1/2 top-1/2 z-30 hidden min-w-[70vw] flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md dark:bg-light/75 lg:flex"
        >
          <nav aria-label="Mobile" className="flex flex-col items-center justify-center gap-3 text-light dark:text-dark">
            {NAV.map((item) => (
              <NavLink key={item.href} {...item} onClick={() => setOpen(false)} />
            ))}
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              Resume
            </a>
          </nav>
          <div className="mt-6 flex flex-wrap items-center justify-center">
            <Socials size="w-6" />
            <ThemeToggle mode={mode} setMode={setMode} />
          </div>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
