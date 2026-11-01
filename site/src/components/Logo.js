import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const MotionLink = motion.create(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        aria-label={`${profile.name}, home`}
        className="flex h-16 w-16 items-center justify-center rounded-full border border-solid border-transparent bg-dark text-2xl font-bold text-light dark:border-light md:h-12 md:w-12 md:text-lg"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        {profile.initials}
      </MotionLink>
    </div>
  );
}
