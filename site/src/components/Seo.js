import Head from "next/head";
import { profile } from "@/data/profile";

export default function Seo({ title, description, path = "/" }) {
  const full = title ? `${title} | ${profile.name}` : `${profile.name} | ${profile.title}`;
  const url = `${profile.siteUrl}${path}`;
  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
