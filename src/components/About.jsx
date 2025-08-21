import { motion } from "framer-motion"
import "./About.css"

export default function About() {
  const aboutItems = [
    {
      title: "Who I Am",
      text: "I’m a full-stack developer with a passion for creating modern, scalable web applications.",
      img: "/codethinking.svg",
    },
    {
      title: "What I Do",
      text: "I specialize in React, Node.js, and Tailwind, building clean and efficient solutions.",
      img: "/product.svg",
    },
    {
      title: "My Vision",
      text: "To transform ideas into polished, impactful products that people love using.",
      img: "/codegeneration.svg",
    },
  ]

  return (
    <section id="about" className="container py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-10 mr-6 text-center">About Me</h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutItems.map((item, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="card flex flex-col overflow-hidden rounded-2xl shadow-soft bg-white dark:bg-gray-900"
          >
            {/* Illustration full size */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-contain bg-gray-50 dark:bg-gray-800"
            />

            {/* Text Section */}
            <div className="p-6 text-center flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {item.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
