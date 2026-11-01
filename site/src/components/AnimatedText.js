import { motion } from "framer-motion";

const quote = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.08 } },
};

const word = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AnimatedText({ text, className = "", as = "h1" }) {
  const Tag = motion[as];
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center sm:py-0">
      <Tag
        className={`inline-block w-full font-bold capitalize text-dark dark:text-light text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
        aria-label={text}
      >
        {text.split(" ").map((w, i) => (
          <motion.span key={`${w}-${i}`} className="inline-block" variants={word} aria-hidden="true">
            {w}&nbsp;
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}
