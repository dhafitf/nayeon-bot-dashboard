import { useEffect, useState } from "react";
import DashboardTitle from "@other/dashboardTitle";
import { instagramMessagePreview } from "~utils/moduleMessagePreview";
import { DashboardSubsProps } from "~types/components";
import { instagramSubsList } from "~utils/subscriptionsList";
import SubscriptionPage from "@presentational/subscriptionPage";
import { filteredData, defaultIndex, getChannelType, valueOrNull } from "~helpers/subsPageHelper";

export default function DashboardInstagram({ roles, channels, settings }: DashboardSubsProps) {
  const { channelsList, rolesList } = filteredData(channels, roles);

  const [selectedChannel, setSelectedChannel] = useState(defaultIndex(channelsList, settings.channel));
  const [selectedRole, setSelectedRole] = useState(defaultIndex(rolesList, settings.role));

  const [saved, setSaved] = useState({
    channel: {
      id: valueOrNull(selectedChannel.id),
      name: valueOrNull(selectedChannel.name),
      type: getChannelType(selectedChannel.type),
    },
    role: {
      id: valueOrNull(selectedRole.id),
      name: valueOrNull(selectedRole.name),
    },
  });

  const [unsaved, setUnsaved] = useState<any>({
    channel: {},
    role: {},
  });

  const [isChange, setIsChange] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setUnsaved({
      channel: {
        id: valueOrNull(selectedChannel.id),
        name: valueOrNull(selectedChannel.name),
        type: getChannelType(selectedChannel.type),
      },
      role: {
        id: valueOrNull(selectedRole.id),
        name: valueOrNull(selectedRole.name),
      },
    });
  }, [selectedRole, selectedChannel]);

  useEffect(() => {
    if (saved.channel.id !== unsaved.channel.id || saved.role.id !== unsaved.role.id) return setIsChange(true);
    setIsChange(false);
  }, [saved, unsaved]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await fetch("/api/subscriptions", {
      method: "PUT",
      body: JSON.stringify(unsaved),
    });

    setSaved(unsaved);
    setIsChange(false);
    setIsLoading(false);
  };

  return (
    <>
      <DashboardTitle title="Instagram" />
      <SubscriptionPage
        name="Instagram"
        channelsList={channelsList}
        selectedChannel={selectedChannel}
        setSelectedChannel={setSelectedChannel}
        rolesList={rolesList}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        isChange={isChange}
        messagePreview={instagramMessagePreview(selectedRole.id, selectedRole.name)}
        subscriptionsList={instagramSubsList}
        isLoading={isLoading}
      />
    </>
  );
}
