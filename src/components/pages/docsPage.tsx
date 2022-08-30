import GeneralPage from "@layout/general";
import { NextSeo } from "next-seo";
import DocsSidebar from "@section/navigation/docsSidebar";
import Container from "@layout/container";
import { DocsLayoutProps } from "~types/components";

export default function DocsLayout({ children, title, description }: DocsLayoutProps) {
  const metaTitle = title ? `${title}` : "Nayeon's Docs";
  const metaDescription = description ? `${description}` : "Documentation bot for Nayeon bot";
  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        openGraph={{
          title: "Nayeon's Docs",
          description: "A list of documentation for Nayeon bot",
        }}
      />
      <GeneralPage>
        <Container size="md" className="mb-8 md:flex">
          <DocsSidebar />
          <article className="prose prose-invert w-full py-4 prose-a:text-anchor-blue md:my-8 md:ml-16">{children}</article>
        </Container>
      </GeneralPage>
    </>
  );
}
