import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Hero from "./components/Hero";
import JasonInfo from "./components/JasonInfo";
import JasonVideo from "./components/JasonVideo";
import LuciaVideo from "./components/LuciaVideo";
import LuciaInfo from "./components/LuciaInfo";

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
    </main>
  );
}
