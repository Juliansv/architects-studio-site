"use client"

import { useEffect, useState } from "react";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import HomeMission from "./components/home-mission";
import RecruitmentSection from "./components/recruitment-section";
import TeamSection from "./components/team-section";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <main className="block">
      {isLoading && <Loading /> || 
        <div id="content" className="fade-in">
          <HeroSection />
          <HomeMission />
          <TeamSection />
          <RecruitmentSection />
          <Footer />
        </div>
      }
    </main>
  );
}
