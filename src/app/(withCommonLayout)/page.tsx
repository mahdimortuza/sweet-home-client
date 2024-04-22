// const { Title } = Typography;

import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import PopularPropertySection from "@/components/UI/HomePage/PopularPropertySection/PopularPropertySection";
import SubscribeSection from "@/components/UI/HomePage/SubscribeSection/SubscribeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularPropertySection />
      <SubscribeSection />
    </main>
  );
}
