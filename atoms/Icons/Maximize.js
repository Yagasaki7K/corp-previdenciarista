export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="maximaze"
        d="M8 2H5a3 3 0 0 0-3 3v3a1 1 0 1 0 2 0V5a1 1 0 0 1 1-1h3a1 1 0 1 0 0-2zm14 6V5a3 3 0 0 0-3-3h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0zm-6 14h3a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2zM2 16v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2H5a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="maximazeb" fill="#fff">
        <use xlinkHref="#maximaze" />
      </mask>
      <use fill="#9FA5AD" fillRule="nonzero" xlinkHref="#maximaze" />
      <g fill="#9FA5AD" mask="url(#maximazeb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
