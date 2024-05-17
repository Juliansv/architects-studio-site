import HeroSection from "./components/hero-section";
import HomeMission from "./components/home-mission";
import TeamSection from "./components/team-section";


export default function Home() {
  return (
    <main className="block">
      <div id="content" className="">
        <HeroSection />
        <HomeMission />
        <TeamSection />
      </div>
    </main>
  );
}
