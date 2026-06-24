export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 72"
      width={size}
      height={(size * 72) / 64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="sh-body"
        d="M32 1.6 60 12v24.5C60 53.4 48.4 64.6 32 70.4 15.6 64.6 4 53.4 4 36.5V12L32 1.6Z"
      />
      <path
        className="sh-stroke"
        d="M32 1.6 60 12v24.5C60 53.4 48.4 64.6 32 70.4 15.6 64.6 4 53.4 4 36.5V12L32 1.6Z"
      />
      <path className="sh-a" d="M32 17 45 48H38.4L32 31.6 27.1 44h9.1l2.1 5H18l14-32Z" />
      <path className="sh-road" d="M16 52 31 45l17 6-17 4-15-3Z" />
      <g className="sh-dots">
        <circle cx="14" cy="22" r="1.1" />
        <circle cx="19" cy="22" r="1.1" />
        <circle cx="24" cy="22" r="1.1" />
        <circle cx="14" cy="27" r="1.1" />
        <circle cx="19" cy="27" r="1.1" />
        <circle cx="14" cy="32" r="1.1" />
      </g>
    </svg>
  );
}
