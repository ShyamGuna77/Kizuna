"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";
import FemaleChat from "@/app/Images/FemaleChat.png";
import Heart from "@/app/Images/Heart.png";
import MaleChat from "@/app/Images/Malechat.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Connection() {
  return (
    <>
      <div>
        <AnimatedSection className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="text-center mb-4">
              <div className="inline-block bg-pink-300 px-4 py-1 rounded-full border-2 border-black mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Connect & Chat
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Find Your Perfect Connection
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Our app brings people together through meaningful conversations
                that lead to real connections
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative max-w-4xl mx-auto h-[400px] md:h-[500px]"
            >
            
              <div className="absolute left-0 bottom-12 md:bottom-16 w-1/3 h-full flex items-end justify-center">
                <Image
                  src={FemaleChat}
                  alt="Female chatting Svg"
                  className="object-contain"
                />
              </div>

              
              <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-1/4">
                <Image
                  src={Heart}
                  alt="Heart pic"
                  className="object-contain mx-auto"
                />
              </div>

             
              <div className="absolute right-0 bottom-12 md:bottom-16 w-1/3 h-full flex items-end justify-center">
                <Image
                  src={MaleChat}
                  alt="Male chatting"
                  className="object-contain"
                />
              </div>

          
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 500"
                preserveAspectRatio="none"
                style={{ zIndex: -1 }}
              >
               
                <path
                  d="M200,200 Q300,150 400,167"
                  fill="none"
                  stroke="#F472B6"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                
                <path
                  d="M400,167 Q500,150 600,200"
                  fill="none"
                  stroke="#F472B6"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                <path
                  d="M600,240 Q500,290 400,250"
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                
                <path
                  d="M400,250 Q300,290 200,240"
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                
                <circle r="5" fill="#F9A8D4">
                  <animateMotion
                    path="M200,200 Q300,150 400,167"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>

                
                <circle r="5" fill="#F9A8D4">
                  <animateMotion
                    path="M600,240 Q500,290 400,250"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Match & Connect",
                  description:
                    "Find people who share your interests and values for deeper connections",
                  color: "bg-red-100",
                },
                {
                  title: "Chat & Share",
                  description:
                    "Engage in meaningful conversations that go beyond small talk",
                  color: "bg-pink-200",
                },
                {
                  title: "Meet & Fall in Love",
                  description:
                    "Take your online connection to the real world and find true love",
                  color: "bg-pink-300",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`${item.color} p-6 rounded-xl border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-transform duration-300`}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
