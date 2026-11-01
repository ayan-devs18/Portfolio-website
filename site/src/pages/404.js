import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist." />
      <article className="flex min-h-[60vh] w-full items-center justify-center dark:text-light">
        <Layout className="flex flex-col items-center !pt-0">
          <AnimatedText text="404" className="!text-9xl sm:!text-7xl" />
          <p className="mt-4 text-lg font-medium">This page took a different route.</p>
          <Link href="/" className="mt-6 rounded-lg bg-dark px-6 py-2.5 font-semibold text-light dark:bg-light dark:text-dark">
            Go home
          </Link>
        </Layout>
      </article>
    </>
  );
}
