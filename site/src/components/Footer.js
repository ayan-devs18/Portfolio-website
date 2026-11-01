import Layout from "./Layout";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium dark:border-light dark:text-light sm:text-base">
      <Layout className="flex items-center justify-between !py-8 lg:flex-col lg:gap-3 lg:!py-6">
        <span>{new Date().getFullYear()} &copy; {profile.name}</span>
        <span>
          {profile.location} · {profile.timezone}
        </span>
        <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
          Say hello
        </a>
      </Layout>
    </footer>
  );
}
