import DashboardTitle from "@other/dashboardTitle";
import { useState, useEffect } from "react";
import WarningBox from "@other/warningBox";
import { DashboardSettingsProps } from "~types/components";

function InputSetting({ label, value, onChange, reset }: DashboardSettingsProps) {
  const id = label.toLowerCase().replace(/ /g, "-");
  return (
    <div>
      <div className="pb-2 font-semibold">{label}</div>
      <div className="relative">
        <input
          type="text"
          name={id}
          value={value}
          maxLength={5}
          className="w-[60%] appearance-none rounded bg-[#393D42] py-2 px-3 focus:outline-none md:w-[335px]"
          onChange={onChange}
        />
        <button onClick={reset} className="ml-4 rounded border-2 border-light-blue px-4 py-1 text-light-blue transition-colors hover:bg-light-blue hover:text-white">
          Reset
        </button>
      </div>
    </div>
  );
}

export default function DashboardSettings({ setting }: any) {
  const [saved, setSaved] = useState(setting);
  const [value, setValue] = useState(saved);
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handlePrefixReset = () => {
    setValue({ ...value, prefix: ";" });
  };

  useEffect(() => {
    if (value.prefix !== saved.prefix) return setIsChanged(true);
    setIsChanged(false);
  }, [value, saved]);

  const handleCancel = () => {
    setValue(saved);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    await fetch("/api/settings", {
      method: "PUT",
      body: JSON.stringify(value),
    });

    setSaved(value);
    setIsChanged(false);
    setIsLoading(false);
  };

  return (
    <>
      <DashboardTitle title="Server Settings" />
      <div className="flex flex-col gap-4">
        <InputSetting label="Prefix" value={value.prefix} onChange={handleChange} reset={handlePrefixReset} />
      </div>
      <WarningBox isChanged={isChanged} onCancel={handleCancel} onSave={handleSave} isLoading={isLoading} />
    </>
  );
}
