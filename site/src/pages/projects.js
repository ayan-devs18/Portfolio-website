import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Seo from "@/components/Seo";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/data/profile";

const FramerImage = motion.create(Image);

function Tags({ tags }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-solid border-dark px-3 py-0.5 text-xs font-semibold dark:border-light">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Links({ live, source, title }) {
  return (
    <div className="mt-4 flex items-center">
      {source ? (
        <a href={source} target="_blank" rel="noopener noreferrer" className="w-10" aria-label={`${title} source on GitHub`}>
          <GithubIcon />
        </a>
      ) : null}
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
        >
          Visit Project
        </a>
      ) : (
        <a href={source} target="_blank" rel="noopener noreferrer" className="ml-4 text-lg font-semibold underline underline-offset-2 sm:text-base">
          Architecture &amp; Source
        </a>
      )}
    </div>
  );
}

function Shot({ image, title, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer overflow-hidden rounded-lg">
      <FramerImage
        src={image}
        alt={`${title} overview`}
        width={1200}
        height={750}
        className="h-auto w-full bg-light"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
    </a>
  );
}

function FeaturedProject({ kicker, title, summary, tags, image, live, source }) {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <div className="w-1/2 lg:w-full">
        <Shot image={image} title={title} href={live || source} />
      </div>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">{kicker}</span>
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">{title}</h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <Tags tags={tags} />
        <Links live={live} source={source} title={title} />
      </div>
    </article>
  );
}

function Project({ kicker, title, summary, tags, image, live, source }) {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Shot image={image} title={title} href={live || source} />
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">{kicker}</span>
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        <p className="font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <Tags tags={tags} />
        <Links live={live} source={source} title={title} />
      </div>
    </article>
  );
}

export default function Projects() {
  // Featured projects take the full row; the rest sit side by side.
  const rows = [];
  let pair = [];
  for (const p of projects) {
    if (p.featured) {
      if (pair.length) rows.push(pair), (pair = []);
      rows.push([p]);
    } else {
      pair.push(p);
      if (pair.length === 2) rows.push(pair), (pair = []);
    }
  }
  if (pair.length) rows.push(pair);

  return (
    <>
      <Seo title="Projects" path="/projects/" description="Systems built by Aayan Qamar: reliability engineering, applied AI, web performance and business automation." />
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Shipping Software People Can Trust!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {rows.map((row) =>
              row.length === 1 && row[0].featured ? (
                <div key={row[0].title} className="col-span-12">
                  <FeaturedProject {...row[0]} />
                </div>
              ) : (
                row.map((p) => (
                  <div key={p.title} className={`${row.length === 1 ? "col-span-12" : "col-span-6"} sm:col-span-12`}>
                    <Project {...p} />
                  </div>
                ))
              ),
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}
