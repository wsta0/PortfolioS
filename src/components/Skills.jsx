import SectionTitle from "./SectionTitle"
import { Code2, Server, Wrench } from "lucide-react"

export default function Skills() {
  const skills = {
    Frontend: ["React", "Tailwind CSS", "TypeScript", "Vite", "Framer Motion"],
    Backend: ["Node.js", "Express", "MongoDB", "REST APIs", "Firebase"],
    Tools: ["Git & GitHub", "Vercel / Netlify", "VS Code", "Docker (basic)"],
  }

  const icons = {
    Frontend: <Code2 className="w-10 h-10 text-pink-700 dark:text-pink-500" />,
    Backend: <Server className="w-10 h-10 text-pink-700 dark:text-pink-500" />,
    Tools: <Wrench className="w-10 h-10 text-pink-700 dark:text-pink-500" />,
  }

  return (
    <section id="skills" className="container py-16">
      <div className="flex items-start gap-16">
        
        {/* Heading on the left */}
        <SectionTitle kicker="Skills">What I use</SectionTitle>

        {/* Skills cards on the right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {Object.entries(skills).map(([group, list]) => (
            <div
              key={group}
              className="card p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              {icons[group]}

              {/* Divider line */}
              <div className="h-px w-12 bg-pink-300 dark:bg-pink-700 my-3"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
                {group}
              </h3>

              {/* Skills */}
              <ul className="mt-3 grid gap-2">
                {list.map((item) => (
                  <li
                    key={item}
                    className="text-pink-600 dark:text-pink-400 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
