import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import HomeMission from "./components/home-mission";
import RecruitmentSection from "./components/recruitment-section";
import TeamSection from "./components/team-section";


export default function Home() {
  return (
    <main className="block">
      <div id="content" className="">
        <HeroSection />
        <HomeMission />
        <TeamSection />
        <RecruitmentSection />
        <Footer />
      </div>
    </main>
  );
}
