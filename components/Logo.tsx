export default function Logo({ size = 30 }: { size?: number }) {
  // Stacked "material layers" mark — matches the ALPHA brand lockup.
  return (
    <svg
      viewBox="0 0 64 60"
      width={size}
      height={(size * 60) / 64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="alpha-top" x1="32" y1="4" x2="32" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E1A3E" />
          <stop offset="1" stopColor="#4F8DFF" />
        </linearGradient>
      </defs>

      {/* bottom layer, muted outline */}
      <path
        d="M32 34 54 45 32 56 10 45Z"
        fill="none"
        stroke="rgba(174,183,198,.55)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* middle layer, accent outline */}
      <path
        d="M32 19 54 30 32 41 10 30Z"
        fill="none"
        stroke="#4F8DFF"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* top layer, filled gradient */}
      <path
        d="M32 4 54 15 32 26 10 15Z"
        fill="url(#alpha-top)"
        stroke="#5B95FF"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
