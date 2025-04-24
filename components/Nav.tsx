"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // ✅ use this instead
import { motion } from "motion/react";
import { Heart, Menu, Users, MessageCircle, List } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ this gives you the current path

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `flex items-center gap-2 text-sm font-bold border-2 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
      isActive(path)
        ? "bg-pink-400 text-white border-pink-400"
        : "bg-white border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
    }`;

  return (
    <div className="bg-pink-50">
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
          <Link href="/">
            <h1 className="text-2xl font-bold ml-6">KIZUNA</h1>
          </Link>
        </motion.div>

        <div className="md:flex hidden gap-6 justify-center flex-1">
          <Link href="/Matches" className={linkClass("/Matches")}>
            <Users className="h-5 w-5" />
            Matches
          </Link>
          <Link href="/Chats" className={linkClass("/Chats")}>
            <MessageCircle className="h-5 w-5" />
            Chats
          </Link>
          <Link href="/Lists" className={linkClass("/Lists")}>
            <List className="h-5 w-5" />
            Lists
          </Link>
        </div>

        <div className="md:flex hidden gap-6">
          <Link
            href="/login"
            className="text-sm font-bold border-2 border-black bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-sm font-bold border-2 border-black bg-pink-400 text-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-white p-2 rounded-md border-2 border-black"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 px-4 py-4 border-b-2 border-black bg-pink-100/95">
          <Link href="/Matches" className={linkClass("/Matches")}>
            <Users className="h-5 w-5" />
            Matches
          </Link>
          <Link href="/Chats" className={linkClass("/Chats")}>
            <MessageCircle className="h-5 w-5" />
            Chats
          </Link>
          <Link href="/Lists" className={linkClass("/Lists")}>
            <List className="h-5 w-5" />
            Lists
          </Link>
          <Link
            href="/login"
            className="w-full text-center bg-white px-4 py-2 rounded-xl border-2 border-black font-semibold shadow-md"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="w-full text-center bg-pink-400 px-4 py-2 rounded-xl border-2 border-black font-semibold shadow-md text-white"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
