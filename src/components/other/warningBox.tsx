import { WarningBoxProps } from "~types/components";
import clsx from "~utils/clsx";
import ProcessButton from "./processButton";

export default function WarningBox({ isChanged, onCancel, onSave, isLoading }: WarningBoxProps) {
  return (
    <div className={clsx("absolute flex w-full justify-center transition-all", isChanged ? "bottom-12" : "bottom-0")}>
      {isChanged && (
        <div className="flex max-w-2xl flex-auto items-center overflow-hidden rounded-md bg-[#202225e6] px-4 py-[10px] shadow-[0_2px_10px_0_rgb(0_0_0_/_20%)]">
          <div className="mr-3 flex-auto items-center overflow-hidden text-ellipsis whitespace-nowrap">Careful — you have unsaved changes!</div>
          <div className="flex flex-initial text-sm">
            <button onClick={onCancel} className="ml-3 hover:underline">
              Cancel
            </button>
            <button
              disabled={isLoading}
              onClick={onSave}
              className={clsx(
                "ml-3 flex h-8 items-center justify-center whitespace-nowrap rounded bg-[#2d7d46] px-3 transition-colors hover:bg-[#215b32]",
                isLoading && "cursor-not-allowed"
              )}
            >
              {isLoading ? <ProcessButton /> : <span>Save Changes</span>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
