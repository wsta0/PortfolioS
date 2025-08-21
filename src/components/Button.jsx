export default function Button({ children, href = "#", variant = "primary" }) {
  const base =
    "px-5 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2"

  const styles = {
    primary:
      base +
      " bg-brand text-white hover:bg-brand-dark focus:ring-brand",
    secondary:
      base +
      " bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600",
  }

  return (
    <a href={href} className={styles[variant]}>
      {children}
    </a>
  )
}
