export function ShieldIcon({ size = 40, color = "var(--color-green)", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <circle cx="12" cy="10" r="3"></circle>
      <path d="M7 20c0-3.3 2.7-6 5-6s5 2.7 5 6"></path>
    </svg>
  );
}