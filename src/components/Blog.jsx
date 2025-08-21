import { posts } from "../data/posts.js";
import SectionTitle from "./SectionTitle";

export default function Blog() {
  return (
    <section id="blog" className="container py-16 ">
      <SectionTitle  kicker="Writing">Blog</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-7">
        {posts.map((p) => (
         <article
  key={p.id || p.title}
  className="rounded-xl border border-pink-500/30 bg-white dark:bg-gray-900 p-6 flex flex-col shadow-md hover:shadow-lg hover:border-pink-500/60 transition-all"
>
  {p.image && (
    <img 
      src={p.image} 
      alt={p.title} 
      className="w-full h-40 object-cover rounded-lg mb-4" 
    />
  )}
  <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
    {p.title}
  </h3>
  <p className="text-sm text-gray-500 mt-1">
    {new Date(p.date).toLocaleDateString()}
  </p>
  <p className="text-gray-700 dark:text-gray-300 mt-3 flex-1">
    {p.summary || p.excerpt}
  </p>
  <a
    href={p.link || "#"}
    target="_blank"
    rel="noreferrer"
    className="mt-4 inline-flex px-4 py-2 rounded-xl text-sm font-medium 
               bg-pink-600 text-white hover:bg-pink-700 
               dark:bg-pink-500 dark:hover:bg-pink-600 
               transition-colors"
  >
    Read →
  </a>
</article>

        ))}
      </div>
    </section>
  );
}
