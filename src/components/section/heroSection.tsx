import Image from "next/image";
import InviteButton from "@other/inviteButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div id="top" className="py-8 md:flex md:items-center md:py-16">
      <div className="relative mx-auto mt-11 mb-8 aspect-square w-full max-w-[314px]">
        <Image
          className="rounded-full"
          src="https://cdn.discordapp.com/avatars/939369011773321336/c1aa2d7a6d6ed8ac596e8b5bc30a8314.png?size=2048"
          layout="fill"
          alt="nayeon-bot"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="md:ml-8 mid:m-0 mid:max-w-md">
        <h1 className="text-4xl font-bold max-md:text-center">Nayeon Bot</h1>
        <p className="pt-6 pb-8 text-lg max-md:text-center">Nayeon bot is a discord bot dedicated to notifying updates from TWICE, and also provides other commands.</p>
        <div className="flex items-center gap-6 max-md:flex-col max-md:justify-center">
          <InviteButton className="w-48 justify-center gap-3 py-2 text-lg" />
          <Link href="/server">
            <a className="w-48 cursor-pointer rounded-md border-2 border-[#46494D] py-2 text-center text-lg transition-colors hover:bg-[#46494D]">Dashboard</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
