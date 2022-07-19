import InviteButton from "@other/inviteButton";
import Container from "@layout/container";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Links from "@other/links";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#23272A] py-8 text-sm">
      <Container size="lg" className="md:flex md:flex-col lg:flex-row lg:gap-12">
        <div className="md:max-w-md max-md:text-center">
          <div className="text-2xl font-bold">Nayeon Bot</div>
          <p className="pt-3 md:pb-2 max-md:pb-6">Nayeon bot is a bot dedicated to notifying updates from TWICE, and also provides other commands.</p>
          <div className="flex max-md:justify-center">
            <InviteButton />
          </div>
        </div>
        <div className="grid w-full gap-8 max-md:mt-8">
          <div className="row-[1/3]">
            <div className="pb-3 text-lg font-semibold">Quick Links</div>
            <div className="flex flex-col gap-1">
              <Links className="hover:underline" href="/commands" text="Commands" />
              <Links className="hover:underline" href="/docs" text="Documentation" />
              <Links className="hover:underline" href="/docs/privacy-policy" text="Privacy Policy" />
              <Links className="hover:underline" href="/docs/terms" text="Terms of Services" />
            </div>
          </div>
          <div className="row-[1/3] max-md:text-end">
            <div className="pb-3 text-lg font-semibold">Support Us!</div>
            <div className="flex flex-col gap-1">
              <Links className="hover:underline" href="https://www.patreon.com/nayeonbot" text="Patreon" />
              <Links className="hover:underline" href="https://www.buymeacoffee.com/nayeonbot" text="Buy me a coffee" />
            </div>
          </div>
          <div className="md:row-[1/3] max-md:col-[1/3]">
            <div className="pb-3 text-lg font-semibold max-md:hidden">Other</div>
            <div className="flex gap-2 md:flex-col max-md:justify-center max-md:gap-6">
              <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/dhafitf" className="flex items-center gap-2 hover:text-light-blue max-md:text-xl">
                <FaGithub />
                <span className="max-md:hidden">Github</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.instagram.com/dhafitf/"
                className="flex items-center gap-2 hover:text-light-blue max-md:text-xl"
              >
                <FaInstagram />
                <span className="max-md:hidden">Instagram</span>
              </a>
              <a target="_blank" rel="noopener noreferrer nofollow" href="https://twitter.com/DhafitF" className="flex items-center gap-2 hover:text-light-blue max-md:text-xl">
                <FaTwitter />
                <span className="max-md:hidden">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full pt-3 text-center text-gray-600 md:pt-6">
        © 2022{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://dhafit.vercel.app/" className="hover:underline">
          dhafitf
        </a>
        , All rights reserved
      </div>
    </footer>
  );
}
