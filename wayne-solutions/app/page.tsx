import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceHighlights from "./components/ServiceHighlights";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-12 pt-24">
        <div className="max-w-4xl w-full">
          <div className="text-center space-y-8">
            <Hero />
            <ServiceHighlights />
          </div>
        </div>
      </div>
    </>
  );
}
