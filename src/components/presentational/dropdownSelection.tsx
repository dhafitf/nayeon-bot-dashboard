import { Transition, Combobox } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineCaretDown, AiOutlineCheck } from "react-icons/ai";
import clsx from "~utils/clsx";

export default function DropdownSelection({ data, selectedValue, setSelectedValue, query, setQuery }: any) {
  const filteredData = query === "" ? data : data.filter((res: any) => res.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));

  return (
    <div className="w-full pt-1">
      <Combobox value={selectedValue} onChange={setSelectedValue}>
        <div className="relative">
          <div className="relative flex w-full cursor-default overflow-hidden rounded-lg text-left">
            <Combobox.Input
              className="w-full appearance-none rounded-md border-2 border-[#5f5f5f] bg-transparent px-3 py-2 text-white transition-colors hover:border-blue-500 focus:border-blue-500 focus:outline-none sm:text-sm sm:leading-5"
              displayValue={(data: any) => data.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute top-0 right-0 translate-y-2/4 pr-2">
              <AiOutlineCaretDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery("")}>
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#62666a] py-1 text-base shadow-sm shadow-[#868686] sm:text-sm">
              {filteredData.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4">Nothing found.</div>
              ) : (
                filteredData.map((data: any) => (
                  <Combobox.Option
                    key={data.id}
                    className={({ selected, active }) => clsx("relative cursor-pointer select-none py-2 pl-10 pr-4 transition-colors", active && "bg-[#5a5e63]")}
                    value={data}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{data.name}</span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active && "text-white"}`}>
                            <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
