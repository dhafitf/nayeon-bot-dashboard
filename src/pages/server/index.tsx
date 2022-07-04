import type { NextPage } from "next";
import GeneralPage from "@layout/general";
import { NextSeo } from "next-seo";
import Container from "@layout/container";
import Links from "~components/other/links";
import { AiFillSetting } from "react-icons/ai";

const Dashboard: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Dashboard"
        description="Guild dashboard for Nayeon bot"
        openGraph={{
          title: "Nayeon's Dashboard",
          description: "Guild dashboard for Nayeon bot",
        }}
        additionalMetaTags={[
          {
            name: "summary",
            content: "Guild dashboard for Nayeon bot",
          },
        ]}
      />
      <GeneralPage>
        <Container size="md" className="flex h-screenNoHeader flex-col items-center justify-center">
          <div className="flex items-center gap-2 text-center text-4xl font-semibold">
            <AiFillSetting />
            <span>Be back soon!</span>
          </div>
          <div className="pt-2 text-center text-2xl">We are developing a web dashboard, join the support server to receive the latest updates.</div>
          <div className="flex items-center gap-6 pt-8 max-md:flex-col">
            <Links href="/" className="w-48 cursor-pointer rounded-md bg-[#46494D] py-2 text-center text-lg transition-colors hover:bg-[#5a5e63]" text="Go back home" />
            <Links
              isOutsite
              href="/support"
              className="w-48 cursor-pointer rounded-md bg-light-blue py-2 text-center text-lg transition-colors hover:bg-[#5770cc]"
              text="Join Support Server"
            />
          </div>
        </Container>
      </GeneralPage>
    </>
  );
};

export default Dashboard;
