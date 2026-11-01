import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

/** Circle on the timeline that fills in as its entry scrolls past. */
function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90 md:h-[60px] md:w-[60px] xs:h-[40px] xs:w-[40px]" width="75" height="75" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="75" cy="50" r="20" className="fill-none stroke-1 stroke-primary dark:stroke-primaryDark" />
        <motion.circle cx="75" cy="50" r="20" className="fill-light stroke-[5px] dark:fill-dark" style={{ pathLength: scrollYProgress }} />
        <circle cx="75" cy="50" r="10" className="animate-pulse fill-primary stroke-1 dark:fill-primaryDark" />
      </svg>
    </figure>
  );
}

function Entry({ title, subtitle, meta, children }) {
  const ref = useRef(null);
  return (
    <li ref={ref} className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="text-2xl font-bold sm:text-xl xs:text-lg">
          {title}
          {subtitle ? <span className="text-primary dark:text-primaryDark"> @{subtitle}</span> : null}
        </h3>
        <p className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">{meta}</p>
        <div className="mt-2 w-full font-medium md:text-sm">{children}</div>
      </motion.div>
    </li>
  );
}

export default function Timeline({ heading, items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] });

  return (
    <section className="my-64 lg:my-48 md:my-32">
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">{heading}</h2>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-primaryDark dark:shadow-3xl md:left-[30px] md:w-[2px] xs:left-[20px]"
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          {items.map((item) => (
            <Entry key={`${item.title}-${item.meta}`} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
