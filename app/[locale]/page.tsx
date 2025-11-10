import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import FinalVideo from "./sections/FinalVideo";
import Hero from "./sections/Hero";
import JasonInfo from "./sections/JasonInfo";
import JasonVideo from "./sections/JasonVideo";
import LuciaInfo from "./sections/LuciaInfo";
import LuciaVideo from "./sections/LuciaVideo";
import Outro from "./sections/Outro";
import ViceCity from "./sections/ViceCity";

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

      <JasonVideo />
      <JasonInfo />

      <LuciaVideo />
      <LuciaInfo />

      <ViceCity />

      <FinalVideo />
      <Outro />
    </main>
  );
}
