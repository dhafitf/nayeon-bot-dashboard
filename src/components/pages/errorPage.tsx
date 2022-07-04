import Container from "@layout/container";
import GeneralPage from "@layout/general";
import Links from "@other/links";

export default function ErrorPage() {
  return (
    <>
      <GeneralPage>
        <Container size="md" className="flex h-screenNoHeader flex-col items-center justify-center">
          <div className="text-center text-4xl font-semibold">Woah, looks like you got lost and ended up here!</div>
          <div className="flex items-center gap-6 pt-8 max-md:flex-col">
            <Links href="/" className="w-48 cursor-pointer rounded-md bg-[#46494D] py-2 text-center text-lg transition-colors hover:bg-[#5a5e63]" text="Go back home" />
            <Links
              isOutsite
              href="/support"
              className="w-48 cursor-pointer rounded-md bg-light-blue py-2 text-center text-lg transition-colors hover:bg-[#5770cc]"
              text="Join Support Server"
            />
          </div>
        </Container>
      </GeneralPage>
    </>
  );
}
