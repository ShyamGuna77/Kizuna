import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";

import Couple from "@/app/Images/Couple.jpg"
const HeroSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-12 h-12 bg-neubrutalism-yellow rounded-full animate-float opacity-70" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-neubrutalism-pink rounded-full animate-bounce-slight opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-neubrutalism-peach rounded-full animate-pulse-slight opacity-60" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display">
              Find Your <span className="text-neubrutalism-primary">Real</span>{" "}
              Connections
            </h1>
            <p className="text-xl mb-8 max-w-md">
              Join thousands of singles finding meaningful relationships through
              our smart matching system.
            </p>
            <Button className="text-lg px-8 py-6 bg-neubrutalism-primary text-white neubrutal-shadow hover:bg-neubrutalism-secondary">
              Join MatchMaker
            </Button>
          </div>

          <div className="relative">
            <div className="neubrutal-shadow bg-neubrutalism-peach rounded-2xl p-8 relative z-10 max-w-md mx-auto">
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src={Couple}
                    alt="Man and woman with phones"
                    className="w-full h-auto neubrutal-shadow"
                  />

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg neubrutal-shadow animate-float">
                    <Heart className="h-8 w-8 text-neubrutalism-red" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-neubrutalism-yellow p-2 rounded-lg neubrutal-shadow rotate-6 animate-bounce-slight">
                    <span className="text-lg font-bold">Match!</span>
                  </div>

                  <div className="absolute top-1/4 -right-12 bg-neubrutalism-purple p-3 rounded-lg neubrutal-shadow -rotate-12 animate-float">
                    <span className="font-bold">❤️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-black rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
