export default ({ color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
  >
    <defs>
      <path
        id="arrowa"
        d="M17.586 11l-4.293-4.293a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 0 1 0-2h13.586z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrowb" fill="#fff">
        <use xlinkHref="#arrowa" />
      </mask>
      <use fill={color} fillRule="nonzero" xlinkHref="#arrowa" />
      <g fill={color} mask="url(#arrowb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
