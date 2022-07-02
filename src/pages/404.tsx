import { robotBlockingPageProps } from "~config/DefaultSeoProps";
import Error from "@pages/errorPage";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Page404: NextPage = () => (
  <>
    <NextSeo title="404" description="You got lost?" nofollow noindex robotsProps={robotBlockingPageProps} />
    <Error />
  </>
);

export default Page404;
