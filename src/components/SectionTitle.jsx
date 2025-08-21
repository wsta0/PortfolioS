export default function SectionTitle({ children, kicker }) {
  return (
    <div className="mb-6">
      {kicker && (
        <span className="text-brand font-semibold tracking-wide uppercase text-sm">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-bold mt-1">{children}</h2>
    </div>
  )
}
