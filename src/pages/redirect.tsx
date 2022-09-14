import { robotBlockingPageProps } from "~config/DefaultSeoProps";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@layout/container";
import GeneralPage from "@layout/general";

const Redirect: NextPage = () => {
  const { push } = useRouter();

  const validateGuildId = () => {
    try {
      const guildId = new URL(window?.location.href).searchParams.get("guild_id");
      if (guildId) return push(`/server/${guildId}`);
      return push("/");
    } catch (error) {
      return push("/");
    }
  };

  useEffect(() => {
    void validateGuildId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NextSeo title="Oauth redirect" nofollow noindex robotsProps={robotBlockingPageProps} />
      <GeneralPage>
        <Container size="md" className="flex h-screenNoHeader items-center justify-center">
          <svg className="mr-2 flex h-9 w-9 animate-spin items-center justify-center text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <div className="text-center text-4xl font-semibold">Loading</div>
        </Container>
      </GeneralPage>
    </>
  );
};

export default Redirect;
