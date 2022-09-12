import type { GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { DashboardOverview, DashboardSettings, DashboardYoutube, DashboardInstagram, DashboardVlive, DashboardTiktok } from "@pages/dashboard";
import axiosReq from "~utils/lib/axiosReq";
import validateCookies from "~helpers/validateCookies";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id }: any = ctx.params;
  const headers: any = validateCookies(ctx);

  const guilds = await axiosReq(headers, {
    method: "get",
    endpoint: "/guilds",
  });

  const selectedGuild = guilds.filter((g: any) => g.id === id[0]);
  if (!selectedGuild[0].mutual) {
    return {
      redirect: {
        destination: `https://discord.com/oauth2/authorize?client_id=939369011773321336&permissions=139855326334&scope=bot%20applications.commands&guild_id=${id[0]}redirect_uri=https://bot.oncetwice.one/`,
      },
    };
  }

  if (id.length === 1) {
    await axiosReq(headers, {
      method: "put",
      endpoint: `/guilds/${id}/update`,
    }); // update guild data if on overview page
  }

  const guild = await axiosReq(headers, {
    method: "get",
    endpoint: `/guilds/${id[0]}`,
  });

  return { props: { guild } };
}

const DashboardLayout = dynamic(() => import("@layout/dashboardLayout"), {
  ssr: false,
});

const Dashboard: NextPage = ({ guild }: any) => {
  const router = useRouter();
  const [guildId, ...path] = router.query.id ?? (["", [""]] as string[]);
  const joinedPath = path.join("/");

  const renderSettings = () => {
    switch (joinedPath) {
      case "settings":
        return <DashboardSettings setting={guild.settings} />;
      case "youtube":
        return <DashboardYoutube settings={guild.notificationSettings.youtube} roles={guild.roles} channels={guild.channels} />;
      case "instagram":
        return <DashboardInstagram settings={guild.notificationSettings.instagram} roles={guild.roles} channels={guild.channels} />;
      case "vlive":
        return <DashboardVlive settings={guild.notificationSettings.vlive} roles={guild.roles} channels={guild.channels} />;
      case "tiktok":
        return <DashboardTiktok settings={guild.notificationSettings.tiktok} roles={guild.roles} channels={guild.channels} />;
      default:
        return <DashboardOverview membersCount={guild.memberCount} channelsCount={guild.channels.length} rolesCount={guild.roles.length} />;
    }
  };

  return (
    <>
      <NextSeo
        titleTemplate={`%s - ${guild.name}`}
        title={joinedPath.charAt(0).toUpperCase() + joinedPath.slice(1) || "Overview"}
        description="Dashboard for Nayeon bot settings"
      />
      <DashboardLayout guildID={guildId} path={joinedPath} guild={guild}>
        {renderSettings()}
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
