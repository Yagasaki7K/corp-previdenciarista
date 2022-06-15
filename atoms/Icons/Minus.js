export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <path id="minusa" d="M5 13h14a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="minusb" fill="#fff">
        <use xlinkHref="#minusa" />
      </mask>
      <use fill="#ff7522" fillRule="nonzero" xlinkHref="#minusa" />
      <g fill="#ff7522" mask="url(#minusb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
