import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Seo from "@/components/Seo";
import TransitionEffect from "@/components/TransitionEffect";
import { education, experience, internships, profile, stats } from "@/data/profile";
import portrait from "../../public/images/aayan-portrait.jpg";

const experienceItems = [
  ...experience.map((e) => ({
    title: e.position,
    subtitle: e.company,
    meta: `${e.time} | ${e.place}`,
    children: (
      <ul className="list-disc space-y-1 pl-5">
        {e.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    ),
  })),
  {
    title: "Internships",
    meta: "2024",
    children: (
      <ul className="list-disc space-y-1 pl-5">
        {internships.map((i) => (
          <li key={i.company}>
            {i.position}, <span className="font-semibold">{i.company}</span> · {i.time}
          </li>
        ))}
      </ul>
    ),
  },
];

const educationItems = education.map((e) => ({
  title: e.type,
  meta: `${e.time} | ${e.place}`,
  children: <p>{e.info}</p>,
}));

export default function About() {
  return (
    <>
      <Seo title="About" path="/about/" description={`About ${profile.name}: experience, skills and education.`} />
      <TransitionEffect />
      <article className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Reliability Is A Feature!" className="mb-16 !text-8xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
              {profile.bio.map((para) => (
                <p key={para.slice(0, 20)} className="my-2 font-medium first:mt-0">
                  {para}
                </p>
              ))}
              <p className="mt-4 font-medium">
                Based in {profile.location} ({profile.timezone}) and {profile.availability.toLowerCase()}.
              </p>
            </div>

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
              <Image
                src={portrait}
                alt={`${profile.name} in a black suit`}
                placeholder="blur"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="h-auto w-full rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">{s.value}</span>
                  <h3 className="text-right text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {s.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <Skills />
          <Timeline heading="Experience" items={experienceItems} />
          <Timeline heading="Education" items={educationItems} />
        </Layout>
      </article>
    </>
  );
}
