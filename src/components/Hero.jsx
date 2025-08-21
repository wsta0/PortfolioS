// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Centered Intro + Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content text-center flex flex-col items-center"
      >
        {/* Intro */}
        <div className="max-w-3xl">
          <h1 className="hero-title text-5xl md:text-6xl">
            Hi, I’m <span className="text-brand">John Doe</span>
          </h1>
          <p className="hero-text text-xl md:text-2xl mt-6 text-center">
            I am a dedicated <span className="text-brand">Web Developer</span> with expertise in creating modern, responsive, and user-focused digital solutions.  
            My focus is on delivering clean code, intuitive designs, and seamless user experiences that bring ideas to life.
          </p>
        </div>

        {/* Buttons */}
        <div className="hero-buttons mt-10 flex justify-center gap-6">
          <a href="/resume.pdf" download className="button bg-brand text-lg px-6 py-3 font-semibold text-white hover:bg-brand-600">
            ⬇️ Download Resume
          </a>

          <a href="#contact" className="button bg-brand text-lg px-6 py-3 font-semibold text-white hover:bg-brand-600">
            📬 Contact
          </a>
        </div>
      </motion.div>

      {/* Image Below */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-image mt-12 flex justify-center"
      >
        <img
          src="/Codingicon.svg"
          alt="Developer illustration"
          className="max-w-sm md:max-w-md"
        />
      </motion.div>
    </section>
  );
}
