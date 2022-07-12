import Container from "@layout/container";
import clsx from "~/src/utils/clsx";
import CommandItem from "@presentational/commandItem";
import { useState } from "react";
import { CommandItemProps } from "~types/components";

interface commandListsProps {
  commandLists: CommandItemProps[];
}

export default function CommandsPage({ commandLists }: commandListsProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const uniqCategories = [...new Set(commandLists.map((command) => command.category))];

  const [searchCommand, setSearchCommand] = useState("");

  const filteredCommandByCategory = commandLists.filter((command) => {
    if (selectedCategory === "") {
      return true;
    }
    return command.category === selectedCategory;
  });

  const filteredCommandBySearch = filteredCommandByCategory.filter((command) => {
    if (searchCommand === "") {
      return true;
    }
    return command.name.toLowerCase().includes(searchCommand.toLowerCase());
  });

  const handleSearchCommand = (e: any) => {
    setSearchCommand(e.target.value);
  };

  return (
    <>
      <Container size="lg">
        <h2 className="my-8 text-center text-3xl font-bold max-md:text-center">Commands</h2>
        <div className="mb-10 flex gap-6 max-md:flex-col">
          <div className="md:commandCategory h-fit md:w-[20%] md:rounded-lg md:bg-[#3c4146] md:px-3 md:py-4">
            <input
              type="text"
              className="w-full appearance-none rounded bg-[#424952] py-3 px-4 leading-tight text-white placeholder:text-[#fafafa61] focus:outline-none md:text-sm"
              placeholder="Search commands"
              onChange={handleSearchCommand}
            />
            <div className="mt-4">
              <div className="pb-2 font-semibold max-md:hidden">Category</div>
              <ul className="flex gap-1 md:flex-col md:gap-2 max-md:flex-wrap">
                <li
                  onClick={() => setSelectedCategory("")}
                  className={clsx(
                    "cursor-pointer rounded-md border-2 border-[#7289da91] px-3 py-1 transition-colors hover:bg-light-blue",
                    selectedCategory === "" && "bg-light-blue"
                  )}
                >
                  All
                </li>
                {uniqCategories.map((item, index) => {
                  return (
                    <li
                      onClick={() => setSelectedCategory(item as string)}
                      className={clsx(
                        "cursor-pointer rounded-md border-2 border-[#7289da91] px-3 py-1 transition-colors hover:bg-light-blue",
                        selectedCategory === item && "bg-light-blue"
                      )}
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex min-h-[50vh] w-full flex-col gap-3  md:max-w-[80%]">
            {filteredCommandBySearch.length ? (
              filteredCommandBySearch.map((item, index) => {
                return <CommandItem key={index} name={item.name} description={item.description} aliases={item.aliases} usages={item.usages} examples={item.examples} />;
              })
            ) : (
              <div className="rounded bg-[#3c4146] py-[10px] text-center">No commands found</div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
