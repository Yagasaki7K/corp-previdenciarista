export default props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="62"
    height="62"
    viewBox="0 0 62 62"
    {...props}
  >
    <defs>
      <circle id="videob" cx="27" cy="27" r="27" />
      <filter
        id="videoa"
        width="124.1%"
        height="124.1%"
        x="-12%"
        y="-10.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.101420969 0"
        />
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter2" />
        <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="1" />
        <feColorMatrix
          in="shadowBlurOuter2"
          result="shadowMatrixOuter2"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.101420969 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="shadowMatrixOuter2" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(4 3)">
        <use fill="#000" filter="url(#videoa)" xlinkHref="#videob" />
        <use fill="#FFF" xlinkHref="#videob" />
      </g>
      <path fill="#1B1B1B" d="M26 21v18l13-9z" />
    </g>
  </svg>
);
