import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import Connection from "@/components/Connection";
export default function Home() {
  return (
    <>
      <div>
        <div className="bg-pink-100">
          <Navbar />
          <Hero />
          <Connection />
        </div>

      </div>
    </>
  );
}
