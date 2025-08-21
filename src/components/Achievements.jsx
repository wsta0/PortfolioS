import SectionTitle from "./SectionTitle"
import { Trophy, Rocket, GitBranch } from "lucide-react" // 👈 icons

export default function Achievements() {
  const items = [
    { 
      title: 'Top 5% on HackerRank (JS)', 
      detail: 'Problem solving & algorithms',
      icon: Trophy
    },
    { 
      title: 'Shipped 10 projects in 30 days', 
      detail: 'Learning in public challenge',
      icon: Rocket
    },
    { 
      title: 'Open-Source Contributor', 
      detail: 'PRs merged in 3 repos',
      icon: GitBranch
    },
  ]

  return (
    <section id="achievements" className="container py-12">
      <SectionTitle kicker="Highlights">Achievements</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6 ml-7">
        {items.map((it, idx) => {
          const Icon = it.icon
          return (
            <div key={idx} className="card p-6 flex flex-col items-center text-center">
              <Icon className="w-10 h-10 text-pink-600 dark:text-pink-400 mb-4" /> 
              <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">{it.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{it.detail}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
