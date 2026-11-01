import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Seo from "@/components/Seo";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/Icons";
import { profile } from "@/data/profile";
import portrait from "../../public/images/aayan.jpg";

export default function Home() {
  return (
    <>
      <Seo description={`${profile.name}, ${profile.title.toLowerCase()} specialising in ${profile.focus}. ${profile.availability}.`} />
      <TransitionEffect />
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-8">
          <div className="flex w-full items-center justify-between lg:flex-col">
            <div className="w-1/2 pr-12 lg:w-full lg:max-w-md lg:pr-0 md:max-w-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto max-w-lg"
              >
                <div className="absolute -right-4 top-4 -z-10 h-full w-full rounded-[2rem] bg-dark dark:bg-light" />
                <Image
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  priority
                  placeholder="blur"
                  sizes="(max-width: 767px) 320px, (max-width: 1023px) 448px, 50vw"
                  className="h-auto w-full rounded-[2rem] border-2 border-solid border-dark object-cover dark:border-light"
                />
              </motion.div>
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:mt-12 lg:w-full lg:text-center">
              <p className="mb-4 self-start rounded-full border border-solid border-dark px-4 py-1 text-sm font-semibold uppercase tracking-wider dark:border-light lg:self-center xs:text-xs">
                {profile.title} · {profile.availability}
              </p>
              <AnimatedText
                text={profile.headline}
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">{profile.intro}</p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </a>
                <Link
                  href="/projects/"
                  className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light md:text-base"
                >
                  See my work
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light md:text-base"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </article>
    </>
  );
}
