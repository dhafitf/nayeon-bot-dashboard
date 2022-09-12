import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineServer } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";
import Link from "next/link";
import { PartialUser } from "~types/discord";

export function ProfileMenu({ onLogout, user }: { onLogout: () => void; user: PartialUser }) {
  const { username, iconURL, discriminator } = user;

  return (
    <div className="inline-flex h-full justify-end text-right transition-colors hover:rounded-lg hover:bg-[#46494D]">
      <Menu as="div" className="relative inline-flex">
        <Menu.Button className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium mid:px-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={iconURL} alt={`${username}'s avatar`} layout="fill" objectFit="cover" objectPosition="center" />
          </div>
          <div className="hidden items-center pl-2 font-semibold md:flex">
            <span>
              {username}#{discriminator}
            </span>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-12 origin-top-right divide-y divide-[#484848] rounded-md bg-[#23272A] pt-4 text-white shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none">
            <div className="px-4 pb-4">
              <div className="flex items-center">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={iconURL} alt={`${username}'s avatar`} layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <div className="ml-3">
                  <div className="font-semibold">
                    {username}#{discriminator}
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <Menu.Item>
                <Link href="/server">
                  <a className="group flex w-full items-center px-4 py-2 text-sm hover:bg-[#41454B]">
                    <HiOutlineServer className="text-xl" />
                    <div className="pl-3">My Server</div>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/docs">
                  <a className="group flex w-full items-center px-4 py-2 text-sm hover:bg-[#41454B]">
                    <FiHelpCircle className="text-xl" />
                    <div className="pl-3">Help</div>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button onClick={onLogout} className="group flex w-full items-center px-4 py-2 text-sm hover:bg-[#41454B]">
                  <MdOutlineLogout className="text-xl" />
                  <div className="pl-3">Logout</div>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
