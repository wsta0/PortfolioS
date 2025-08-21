import { useTheme } from "../theme.jsx"
import "./navbar.css"

export default function Nav() {
  const { toggle } = useTheme()

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="container flex items-center justify-between py-3">
        {/* Logo / Name */}
        <a href="#about" className="font-extrabold text-xl tracking-tight">
          John<span className="text-brand">Doe</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-5 text-sm">
          <a className="hover:text-brand" href="#about">About</a>
          <a className="hover:text-brand" href="#skills">Skills</a>
          <a className="hover:text-brand" href="#projects">Projects</a>
          <a className="hover:text-brand" href="#achievements">Achievements</a>
          <a className="hover:text-brand" href="#blog">Blog</a>
          <a className="hover:text-brand" href="#contact">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="btn" aria-label="Toggle theme">
            🌗
          </button>
          <a href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
      </div>
    </header>
  )
}
