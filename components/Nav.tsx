"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, motion } from "motion/react";

import {
    Heart,
    Menu
} from "lucide-react";

export default function Navbar() {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <>
        <div className="bg-pink-50">
         

          {/* Sticky Navbar */}
          <header className="sticky top-0 z-50 bg-pink-100/90 backdrop-blur-md border-b-2 border-black px-4 py-4 flex justify-between items-center md:px-10 shadow-md">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-pink-400 p-2 rounded-xl border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <h1 className="text-2xl font-bold ml-6">KIZUNA</h1>
            </motion.div>

            <div className="md:flex hidden gap-4">
              <Link
                href="#"
                className="text-sm font-bold border-2 border-black bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="text-sm font-bold border-2 border-black bg-pink-400 text-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-white p-2 rounded-md border-2 border-black"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Mobile Menu Options */}
          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col items-center gap-2 px-4 py-4 border-b-2 border-black bg-pink-100/95">
              <Link
                href="#"
                className="w-full text-center bg-white px-4 py-2 rounded-xl border-2 border-black font-semibold shadow-md"
              >
                Login
              </Link>
              <Link
                href="#"
                className="w-full text-center bg-pink-400 px-4 py-2 rounded-xl border-2 border-black font-semibold shadow-md text-white"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </>
    );
}
