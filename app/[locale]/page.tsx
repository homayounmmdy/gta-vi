import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

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
      {" "}
      <h1>{t("title")}</h1>
      {/* Your page content */}
    </main>
  );
}
