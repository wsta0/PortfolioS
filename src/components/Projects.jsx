import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import Modal from "./Modal.jsx";
import { projects, allTags } from "../data/projects.js";

export default function Projects() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  // Filtered list
  const filtered = useMemo(() =>
    projects.filter(p =>
      (tag === "All" || p.tags.includes(tag)) &&
      (
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.desc?.toLowerCase().includes(q.toLowerCase()) ||
        p.tags.join(" ").toLowerCase().includes(q.toLowerCase())
      )
    ), [q, tag]);

  return (
    <section id="projects" className="container py-16">
      <SectionTitle kicker="Projects">Things I’ve built</SectionTitle>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center mb-8">
        <input 
          value={q} 
          onChange={e => setQ(e.target.value)} 
          placeholder="Search projects…" 
          className="border border-pink-400 dark:border-pink-600 rounded-lg px-3 py-2 w-full sm:w-auto
                     focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400
                     text-pink-700 dark:text-pink-300 placeholder-pink-400 bg-white dark:bg-pink-950"
        />
       <select 
  value={tag} 
  onChange={e => setTag(e.target.value)} 
  className="px-4 py-2 rounded-xl border border-pink-300 dark:border-pink-700 
             bg-white dark:bg-gray-900 text-pink-700 dark:text-pink-300 
             focus:outline-none focus:ring-2 focus:ring-pink-500 
             hover:border-pink-500 transition"
>
  {allTags.map(t => <option key={t}>{t}</option>)}
</select>
      </div>

     {/* Project Cards */}
<div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center ml-5">
  {filtered.map((p, i) => (
    <motion.article
      key={p.title}
      whileHover={{ y: -4 }}
      className="card p-6 flex flex-col border border-pink-200 dark:border-pink-800 max-w-lg w-full mx-auto"
    >
      <img 
        src={p.thumb} 
        alt={p.title} 
        className="rounded-xl border border-pink-200 dark:border-pink-800"
      />
      <h3 className="text-xl font-semibold mt-4 text-pink-600 dark:text-pink-400">{p.title}</h3>
      <p className="mt-2 flex-1 text-pink-700 dark:text-pink-300">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map(t => (
          <span key={t} className="px-3 py-1 text-sm rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {p.live && (
          <a 
            className="px-4 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition"
            href={p.live} 
            target="_blank" 
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {p.code && (
          <a 
            className="px-4 py-2 rounded-xl border border-pink-600 text-pink-600 dark:border-pink-400 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900 transition"
            href={p.code} 
            target="_blank" 
            rel="noreferrer"
          >
            Code
          </a>
        )}
        {p.caseStudy && (
          <button 
            className="px-4 py-2 rounded-xl border border-pink-600 text-pink-600 dark:border-pink-400 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900 transition"
            onClick={() => { setActive(p); setOpen(true); }}
          >
            Case study
          </button>
        )}
      </div>
    </motion.article>
  ))}
</div>

      {/* Modal for Case Studies */}
      <Modal open={open} onClose={() => setOpen(false)}>
        {active && (
          <div className="p-4">
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">
              {active.title} — Case Study
            </h3>
            <ul className="mt-4 space-y-3 text-pink-700 dark:text-pink-300">
              <li><b>Problem:</b> {active.caseStudy.problem}</li>
              <li><b>Solution:</b> {active.caseStudy.solution}</li>
              <li><b>Impact:</b> {active.caseStudy.impact}</li>
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}
