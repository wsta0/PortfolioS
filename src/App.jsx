import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";

// Components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Extra features
import Testimonials from "./components/Testimonials";
import GitHubStats from "./components/GitHubStats";
import SEO from "./components/SEO";
import Analytics from "./components/Analytics";

export default function App() {
  const vantaRef = useRef(null);
  const [palette, setPalette] = useState("emerald");
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    let vantaEffect;

    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3f81,
        backgroundColor: 0x000000,
        onInit: () => {
          console.log("✅ Vanta initialized");
          // we don’t hide loader here yet, wait for data too
        }
      });
    }

    // Safety timeout to always hide loader
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.warn("⚠️ Forcing hide loader after 5s");
    }, 5000);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      clearTimeout(timer);
    };
  }, []);

  // Simulate waiting for "app data" (e.g. GitHub stats) + Vanta
  useEffect(() => {
    const simulateDataLoad = async () => {
      await new Promise(res => setTimeout(res, 1500)); // fake data load
      setIsLoading(false);
    };
    simulateDataLoad();
  }, []);

  return (
    <>
      <SEO />
      <Analytics />

      {/* Global Loader */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-[1000]">
          <div className="flex flex-col items-center">
            <div className="animate-spin w-14 h-14 border-4 border-pink-600 border-t-transparent rounded-full"></div>
            <p className="text-white mt-4 text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Vanta Background Section */}
      <div ref={vantaRef} className="relative w-full">
        <div className="relative z-10 flex flex-col min-h-screen text-white">
          <Nav />
          <main className="flex flex-col gap-8">
            <Hero
              toggleTheme={toggleTheme}
              palette={palette}
              setPalette={setPalette}
            />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <GitHubStats username="YOUR_GITHUB" />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-white dark:bg-gray-950 text-black dark:text-white">
        <Footer />
      </div>
    </>
  );
}
