import Container from "@layout/container";
import HeroSection from "@section/heroSection";
import FeatureSection from "@section/featureSection";

export default function HomePage() {
  return (
    <>
      <Container size="md">
        <HeroSection />
      </Container>
      <div className="my-10 mx-5 h-[2px] max-w-[1440px] rounded bg-[#4E4F50] xl:mx-auto"></div>
      <Container size="lg">
        <FeatureSection />
      </Container>
    </>
  );
}
