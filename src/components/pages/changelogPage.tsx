import GeneralPage from "@layout/general";
import { NextSeo } from "next-seo";
import ChangelogTab from "@section/navigation/changelogTab";
import Container from "@layout/container";
import { DocsLayoutProps } from "~types/components";

export default function ChangelogLayout({ children, title, description }: DocsLayoutProps) {
  const metaTitle = title ? `${title}` : "Changelog";
  const metaDescription = description ? `${description}` : "Changelogs for Nayeon bot application, including discord bot, websites, etc";
  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        openGraph={{
          title: "Changelog",
          description: "Changelogs for Nayeon bot application, including discord bot, websites, etc",
        }}
      />
      <GeneralPage>
        <Container size="md" className="mb-8">
          <ChangelogTab />
          <article className="prose prose-invert w-full py-4 prose-h3:font-medium">{children}</article>
        </Container>
      </GeneralPage>
    </>
  );
}
