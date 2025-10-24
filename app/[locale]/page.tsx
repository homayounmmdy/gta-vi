import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger)

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main id="main">
      <Hero />
    </main>
  );
}
