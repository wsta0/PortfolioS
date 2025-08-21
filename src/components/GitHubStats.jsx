import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa"; // ⬅️ GitHub logo

export default function GitHubStats({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!username) {
      // fallback demo data
      setData({ followers: 123, publicRepos: 45, stars: 678 });
      return;
    }

    (async () => {
      try {
        const user = await fetch(`https://api.github.com/users/${username}`).then(r => r.json());
        const repos = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(r => r.json());

        if (user.message === "Not Found") {
          setData({ followers: 123, publicRepos: 45, stars: 678 }); // fallback
          return;
        }

        const stars = Array.isArray(repos)
          ? repos.reduce((s, r) => s + (r.stargazers_count || 0), 0)
          : 0;

        setData({ followers: user.followers, publicRepos: user.public_repos, stars });
      } catch (err) {
        setData({ followers: 123, publicRepos: 45, stars: 678 }); // fallback
      }
    })();
  }, [username]);

  if (!data) return null;

  return (
    <section className="container py-1"> {/* ⬅️ reduced padding (py-8 instead of py-16) */}
      <div className="flex items-center mb-6">
        <FaGithub className="text-3xl text-pink-600 dark:text-pink-400 mr-3" />
        <h2 className="text-3xl font-bold mr-8">GitHub</h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { k: "Followers", v: data.followers },
          { k: "Public Repos", v: data.publicRepos },
          { k: "Total Stars", v: data.stars },
        ].map(x => (
          <div
            key={x.k}
            className="rounded-xl border p-6 bg-white dark:bg-gray-900 text-center shadow-sm"
          >
            <div className="text-3xl font-extrabold text-pink-600 dark:text-pink-400">
              {x.v}
            </div>
            <div className="text-gray-500 dark:text-gray-400">{x.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
