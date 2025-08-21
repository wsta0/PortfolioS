// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-gray-950 dark:text-white py-6 mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <div className="mt-3 flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            className="hover:text-magenta-600 dark:hover:text-magenta-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="hover:text-magenta-600 dark:hover:text-magenta-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-magenta-600 dark:hover:text-magenta-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
