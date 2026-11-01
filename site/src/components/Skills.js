import { motion } from "framer-motion";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section className="mt-64 lg:mt-48 md:mt-32">
      <h2 className="w-full text-center text-8xl font-bold md:text-6xl xs:text-4xl">Skills</h2>
      <div className="relative mt-20 grid grid-cols-2 gap-8 rounded-3xl bg-circularLight p-12 dark:bg-circularDark lg:grid-cols-1 lg:bg-circularLightMd lg:dark:bg-circularDarkMd md:p-6 sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        {skills.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className={`rounded-2xl border border-solid border-dark bg-light/90 p-8 backdrop-blur-sm dark:border-light dark:bg-dark/90 md:p-5 ${
              gi === skills.length - 1 && skills.length % 2 === 1 ? "col-span-2 lg:col-span-1" : ""
            }`}
          >
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-primary dark:text-primaryDark">{group.group}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded-full bg-dark px-4 py-1.5 text-sm font-semibold text-light shadow-dark transition-transform hover:-translate-y-0.5 dark:bg-light dark:text-dark xs:px-3 xs:text-xs"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
