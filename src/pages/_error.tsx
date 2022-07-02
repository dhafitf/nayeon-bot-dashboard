import { robotBlockingPageProps } from "~config/DefaultSeoProps";
import Error from "@pages/errorPage";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const ErrorPage: NextPage = () => (
  <>
    <NextSeo title="500" description="You got lost?" nofollow noindex robotsProps={robotBlockingPageProps} />
    <Error />
  </>
);

export default ErrorPage;
