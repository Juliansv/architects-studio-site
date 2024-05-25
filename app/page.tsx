"use client"

import { useEffect, useState } from "react";
import Loading from "./loading";
import HeroSection from "./components/hero-section"
import ProjectsSection from "./components/projects-section";
import HomeMission from "./components/home-mission";
import TeamSection from "./components/team-section";
import RecruitmentSection from "./components/recruitment-section";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <main className="block bg-stone-200">
      {/* {isLoading && <Loading /> ||  */}
        <div id="content" className="fade-in-500">
          <Navbar />
          <HeroSection />
          <ProjectsSection />
          <HomeMission />
          <TeamSection />
          <RecruitmentSection />
          <Footer />
        </div>
      {/* } */}
    </main>
  );
}
