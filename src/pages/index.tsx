import type { NextPage } from "next";
import GeneralPage from "@layout/general";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@pages/homePage"), {
  ssr: false,
});

const Index: NextPage = () => {
  return (
    <>
      <GeneralPage>
        <HomePage />
      </GeneralPage>
    </>
  );
};

export default Index;
