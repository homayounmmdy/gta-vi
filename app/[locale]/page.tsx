import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import FinalVideo from "./components/FinalVideo";
import Hero from "./components/Hero";
import JasonInfo from "./components/JasonInfo";
import JasonVideo from "./components/JasonVideo";
import LuciaInfo from "./components/LuciaInfo";
import LuciaVideo from "./components/LuciaVideo";
import ViceCity from "./components/ViceCity";

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
    </main>
  );
}
