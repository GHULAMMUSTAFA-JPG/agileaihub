import Header from "@/app/component/Header/Header";
import TechBanner from "@/app/component/banner-roll/TechBanner";
export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <TechBanner />
    </div>
  );
}
