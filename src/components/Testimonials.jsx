const items = [
  { 
    name: "Sarah K.", 
    role: "PM @ Acme", 
    quote: "John delivered ahead of schedule with spotless code.", 
    avatar: "/sarah.svg"  
  },
  { 
    name: "Mark T.", 
    role: "CTO @ Nova", 
    quote: "Great grasp of performance and DX. Highly recommend.", 
    avatar: "/mark.svg" 
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-16">
      <h2 className="text-3xl font-bold mb-6 mr-7">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(t => {
          const initials = t.name.split(" ").map(n => n[0]).join("");

          return (
            <figure 
              key={t.name} 
              className="rounded-xl border p-6 bg-white dark:bg-gray-900 flex gap-4 items-start shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Avatar or Gradient Initials */}
              {t.avatar ? (
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-500/60"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold ring-2 ring-pink-500/60">
                  {initials}
                </div>
              )}

              {/* Text */}
              <div>
                <blockquote className="text-gray-700 dark:text-gray-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-gray-500">
                  — {t.name}, {t.role}
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
