import SectionTitle from "./SectionTitle";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function send(e) {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => setStatus("✅ Sent! I’ll get back soon."),
        () => setStatus("❌ Failed. Please try again.")
      );
    e.target.reset();
  }

  return (
    <section id="contact" className="container py-16">
      {/* Section Heading */}
      <SectionTitle kicker="Contact">Let’s work together</SectionTitle>

      {/* Contact Form */}
      <form
        onSubmit={send}
        className="grid md:grid-cols-2 gap-4 rounded-2xl border border-pink-500/30 
                   p-6 md:p-8 bg-white dark:bg-gray-900 shadow-md ml-7"
      >
        <input
          name="name"
          required
          placeholder="Your name"
          className="border rounded-lg px-3 py-2 bg-white dark:bg-gray-950 
                     border-gray-200 dark:border-gray-800 
                     focus:ring-2 focus:ring-pink-500 outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="border rounded-lg px-3 py-2 bg-white dark:bg-gray-950 
                     border-gray-200 dark:border-gray-800 
                     focus:ring-2 focus:ring-pink-500 outline-none"
        />
        <input
          name="subject"
          placeholder="Subject"
          className="md:col-span-2 border rounded-lg px-3 py-2 bg-white dark:bg-gray-950 
                     border-gray-200 dark:border-gray-800 
                     focus:ring-2 focus:ring-pink-500 outline-none"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          rows="5"
          className="md:col-span-2 border rounded-lg px-3 py-2 bg-white dark:bg-gray-950 
                     border-gray-200 dark:border-gray-800 
                     focus:ring-2 focus:ring-pink-500 outline-none"
        />
        <button
          className="md:col-span-2 w-fit px-6 py-2 rounded-xl text-sm font-medium 
                     bg-pink-600 text-white hover:bg-pink-700 
                     dark:bg-pink-500 dark:hover:bg-pink-600 
                     transition-colors"
          type="submit"
        >
          🚀 Send Message
        </button>

        {status && (
          <p className="text-sm text-gray-600 dark:text-gray-400 md:col-span-2 mt-2">
            {status}
          </p>
        )}
      </form>

      {/* Contact Info Card */}
      <div className="mt-10 rounded-2xl border border-pink-500/30 bg-white dark:bg-gray-900 shadow-md p-6">
        <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-4">
          📬 My Contact Details
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-medium text-pink-600 dark:text-pink-400">Email:</span>{" "}
            <a href="mailto:hello@example.com" className="hover:underline">
              hello@example.com
            </a>
          </li>
          <li>
            <span className="font-medium text-pink-600 dark:text-pink-400">Phone:</span>{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +1 234 567 890
            </a>
          </li>
          <li>
            <span className="font-medium text-pink-600 dark:text-pink-400">Location:</span>{" "}
            Dubai, UAE
          </li>
          <li>
            <span className="font-medium text-pink-600 dark:text-pink-400">GitHub:</span>{" "}
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              github.com/yourname
            </a>
          </li>
          <li>
            <span className="font-medium text-pink-600 dark:text-pink-400">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/yourname
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
