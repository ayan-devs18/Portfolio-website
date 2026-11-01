import { motion } from "framer-motion";

/** Three colour panels that sweep across on each page change. */
export default function TransitionEffect() {
  const panel = "fixed top-0 bottom-0 right-full w-screen h-screen";
  return (
    <>
      <motion.div
        className={`${panel} z-30 bg-primary dark:bg-primaryDark`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className={`${panel} z-20 bg-light`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className={`${panel} z-10 bg-dark`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}
