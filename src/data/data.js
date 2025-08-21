// Example project + blog data for portfolio

export const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio built with React, Tailwind, and Vite. Showcases projects, skills, and blogs.",
    thumb: "/thumbs/portfolio.png",   // put image in public/thumbs/
    tags: ["React", "Tailwind", "Vite"],
    live: "https://your-portfolio.vercel.app",
    code: "https://github.com/yourusername/portfolio"
  },
  {
    title: "E-Commerce Store",
    desc: "Full-stack e-commerce app with authentication, product management, and payments integration.",
    thumb: "/thumbs/store.png",
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://ecommerce-demo.vercel.app",
    code: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "AI Chatbot",
    desc: "Conversational AI chatbot built with OpenAI API, styled in Tailwind, deployed on Vercel.",
    thumb: "/thumbs/chatbot.png",
    tags: ["React", "OpenAI", "Tailwind"],
    live: "https://ai-chatbot.vercel.app",
    code: "https://github.com/yourusername/ai-chatbot"
  },
]

export const posts = [
  {
    id: 1,
    title: "How I Built My Portfolio with React & Tailwind",
    excerpt: "Sharing my step-by-step process of building and deploying a modern developer portfolio using React, Tailwind CSS, and Vercel.",
    date: "2024-07-12"
  },
  {
    id: 2,
    title: "Top 5 Mistakes Junior Devs Make",
    excerpt: "After mentoring beginners, I’ve noticed these common mistakes that hold them back. Here’s how to avoid them.",
    date: "2024-08-02"
  },
  {
    id: 3,
    title: "Mastering Dark Mode in React",
    excerpt: "Dark mode is almost expected in modern apps. Here’s how to implement it cleanly with Context and Tailwind.",
    date: "2024-09-05"
  },
]
