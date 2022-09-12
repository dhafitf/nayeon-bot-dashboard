import clsx from "~utils/clsx";
import DiscordMessage from "@discord/discordMessage";
import DropdownSelection from "./dropdownSelection";
import SubscriptionItem from "./subscriptionItem";
import ProcessButton from "../other/processButton";
import { SubsPageProps } from "~types/components";

export default function SubscriptionPage({
  name,
  channelsList,
  selectedChannel,
  setSelectedChannel,
  rolesList,
  selectedRole,
  setSelectedRole,
  query,
  setQuery,
  handleSubmit,
  isChange,
  messagePreview,
  subscriptionsList,
  isLoading,
}: SubsPageProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:grid lg:grid-cols-2">
      <div className="rounded-lg bg-[#393D42] py-4 px-8">
        <h3 className="pb-6 font-semibold uppercase">Subscribe to {name}</h3>
        <div>
          <div className="mt-1 mb-4">
            <label htmlFor="trigger" className="text-sm font-medium leading-5 text-[#9FA2B4]">
              Channel
            </label>
            <DropdownSelection data={channelsList} selectedValue={selectedChannel} setSelectedValue={setSelectedChannel} query={query} setQuery={setQuery} />
          </div>
          <div className="mt-1 mb-4">
            <label htmlFor="trigger" className="text-sm font-medium leading-5 text-[#9FA2B4]">
              Role
            </label>
            <DropdownSelection data={rolesList} selectedValue={selectedRole} setSelectedValue={setSelectedRole} query={query} setQuery={setQuery} />
          </div>
        </div>
        <div className="mb-8">
          <div className="pb-2 text-sm font-medium leading-5 text-[#9FA2B4]">Message Preview</div>
          <DiscordMessage message={messagePreview} />
        </div>
        <button
          disabled={isLoading || !isChange}
          onClick={handleSubmit}
          className={clsx(
            "flex h-8 w-fit items-center whitespace-nowrap rounded p-5 text-sm transition-colors",
            isChange ? "cursor-pointer bg-[#2d7d46] hover:bg-[#215b32]" : "cursor-not-allowed bg-[#5e5f65]"
          )}
        >
          {isLoading ? <ProcessButton /> : <span>Save Changes</span>}
        </button>
      </div>
      <div className="rounded-lg bg-[#393D42] py-4 px-8">
        <h3 className="pb-2 font-semibold uppercase">Subscriptions List</h3>
        <div className="pb-6 text-xs text-[#9FA2B4]">*For now, {name} subscriptions can&apos;t be change.</div>
        <div className="grid gap-3 text-sm">
          {subscriptionsList.map((item: any, index: number) => {
            const { name, href, iconURL } = item;
            return <SubscriptionItem key={index} href={href} name={name} iconURL={iconURL} />;
          })}
        </div>
      </div>
    </div>
  );
}
