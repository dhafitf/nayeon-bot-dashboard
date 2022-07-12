import type { NextPage } from "next";
import GeneralPage from "@layout/general";
import dynamic from "next/dynamic";
import commandLists from "~utils/lib/commandLists";
import { NextSeo } from "next-seo";

const CommandsPage = dynamic(() => import("@pages/commandsPage"), {
  ssr: false,
});

const Commands: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Commands"
        description="A list of commands for Nayeon bot"
        openGraph={{
          title: "Nayeon's Commands",
          description: "A list of commands for Nayeon bot",
        }}
        additionalMetaTags={[
          {
            name: "summary",
            content: "A list of commands for Nayeon bot",
          },
        ]}
      />
      <GeneralPage>
        <CommandsPage commandLists={commandLists} />
      </GeneralPage>
    </>
  );
};

export default Commands;
