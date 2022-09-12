import { FaUserFriends } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { BsTagsFill } from "react-icons/bs";
import DashboardTitle from "@other/dashboardTitle";
import { DashboardOverviewProps } from "~types/components";

export default function DashboardOverview({ membersCount, channelsCount, rolesCount }: DashboardOverviewProps) {
  return (
    <>
      <DashboardTitle title="Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded bg-[#393D42] py-4 px-8">
          <div className="flex items-center">
            <span className="text-3xl">
              <FaUserFriends />
            </span>
            <span className="pl-3 font-bold text-[#9FA2B4]">Total Members</span>
          </div>
          <div className="pt-4 text-3xl font-semibold">{membersCount}</div>
        </div>
        <div className="rounded bg-[#393D42] py-4 px-8">
          <div className="flex items-center">
            <span className="text-3xl">
              <FiHash />
            </span>
            <span className="pl-3 font-bold text-[#9FA2B4]">Total Channels</span>
          </div>
          <div className="pt-4 text-3xl font-semibold">{channelsCount}</div>
        </div>
        <div className="rounded bg-[#393D42] py-4 px-8">
          <div className="flex items-center">
            <span className="text-3xl">
              <BsTagsFill />
            </span>
            <span className="pl-3 font-bold text-[#9FA2B4]">Total Roles</span>
          </div>
          <div className="pt-4 text-3xl font-semibold">{rolesCount}</div>
        </div>
      </div>
    </>
  );
}
