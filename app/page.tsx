
"use client"
import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import Connection from "@/components/Connection";
import HowitWorks from "@/components/How-it-works";
import Feauterdcards from "@/components/Feauterdcards";

export default function Home() {
  

  return (
    <>
      <div>
        
        <div className="bg-pink-100">
          <Navbar />
          <Hero />
          <Connection />
          <Feauterdcards />
          <HowitWorks />

        </div>
      </div>
    </>
  );
}
