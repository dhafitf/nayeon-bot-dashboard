import type { GetServerSidePropsContext, NextPage } from "next";
import GeneralPage from "@layout/general";
import { NextSeo } from "next-seo";
import Container from "@layout/container";
import { FaServer } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import AuthContext from "~/contexts/authContext";
import axiosReq from "~utils/lib/axiosReq";
import validateCookies from "~helpers/validateCookies";

type ServerItemProps = {
  href: string;
  name: string;
  icon: string | null;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const headers: any = validateCookies(ctx);

  const user = await axiosReq(headers, {
    method: "get",
    endpoint: "/user",
  });

  const guilds = await axiosReq(headers, {
    method: "get",
    endpoint: "/guilds?update=true",
  });

  return {
    props: {
      user,
      guilds,
    },
  };
}

const ServerItem = ({ icon, name, href }: ServerItemProps) => {
  const splitedName = name.split(" ");
  const abbreviation = splitedName.map((name) => name.charAt(0)).join("");

  return (
    <Link href={href}>
      <a className="flex cursor-pointer flex-col items-center justify-center rounded-md bg-[#41454B] p-4 transition-all hover:bg-[#5a5e63]">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          {icon ? (
            <Image src={icon} alt={`${name} icons`} layout="fill" objectFit="cover" objectPosition="center" />
          ) : (
            <div className="flex h-full items-center justify-center bg-[#2f3237] text-lg">{abbreviation}</div>
          )}
        </div>
        <div className="pt-2 text-center font-semibold">{name}</div>
      </a>
    </Link>
  );
};

const Dashboard: NextPage = ({ guilds, user }: any) => {
  const userContext = useContext(AuthContext);
  const { setUser } = userContext;
  const { username, discriminator, iconURL } = user.user;

  useEffect(() => {
    setUser(user.user);
    const { id, username, discriminator, iconURL, email } = user.user;
    const userData = { id, username, discriminator, iconURL, email };
    window.localStorage.setItem("user", JSON.stringify(userData));
  }, [setUser, user]);

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
        <Container size="lg" className="py-8">
          <div className="flex justify-between pb-8 md:pb-16 max-md:flex-col max-md:gap-4">
            <div className="flex items-center">
              <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-[#5a5e63]">
                <Image src={iconURL} alt={`${username}'s avatar`} layout="fill" objectFit="cover" objectPosition="center" />
              </div>
              <div className="pl-4 text-2xl font-bold tracking-wide">
                {username}
                <span className="text-base text-[#9FA2B4]">#{discriminator}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center text-lg font-bold">
              <span>
                <FaServer />
              </span>
              <span className="ml-2">
                Your Managed Servers <span className="text-sm text-[#9FA2B4]">({guilds.length})</span>
              </span>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-4">
              {guilds.map((server: any, index: number) => {
                const iconURL = server.icon ? `https://cdn.discordapp.com/icons/${server.id}/${server.icon}` : null;
                return <ServerItem key={index} href={`/server/${server.id}`} name={server.name} icon={iconURL} />;
              })}
            </div>
          </div>
        </Container>
      </GeneralPage>
    </>
  );
};

export default Dashboard;
