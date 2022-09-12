import { useEffect, useState } from "react";
import DashboardTitle from "@other/dashboardTitle";
import { vliveMessagePreview } from "~utils/moduleMessagePreview";
import SubscriptionPage from "@presentational/subscriptionPage";
import { DashboardSubsProps } from "~types/components";
import { filteredData, defaultIndex, valueOrNull, getChannelType } from "~helpers/subsPageHelper";
import { vliveSubsList } from "~utils/subscriptionsList";

export default function DashboardVlive({ roles, channels, settings }: DashboardSubsProps) {
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

  const [unsaved, setUnsaved] = useState({
    channel: {},
    role: {},
  }) as any;

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
      <DashboardTitle title="Vlive" />
      <SubscriptionPage
        name="Vlive"
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
        messagePreview={vliveMessagePreview(selectedRole.id, selectedRole.name)}
        subscriptionsList={vliveSubsList}
        isLoading={isLoading}
      />
    </>
  );
}
