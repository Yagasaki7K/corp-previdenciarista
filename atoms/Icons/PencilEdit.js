export default props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <path
        id="penciledita"
        d="M4 16.414V20h3.586l12-12L16 4.414l-12 12zM16.707 2.293l5 5a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 22H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 .293-.707l13-13a1 1 0 0 1 1.414 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pencileditb" fill="#fff">
        <use xlinkHref="#penciledita" />
      </mask>
      <use fill="#fff" fillRule="nonzero" xlinkHref="#penciledita" />
      <g fill="#fff" mask="url(#pencileditb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
