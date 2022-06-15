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
        id="searcha"
        d="M17.176 15.762l4.531 4.53a1 1 0 0 1-1.414 1.415l-4.531-4.531a8.5 8.5 0 1 1 1.414-1.414zm-2.016-.73a6.5 6.5 0 1 0-.128.128 1.013 1.013 0 0 1 .128-.128z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="searchb" fill="#fff">
        <use xlinkHref="#searcha" />
      </mask>
      <use fill="#5FA1D8" fillRule="nonzero" xlinkHref="#searcha" />
      <g fill="#5FA1D8" mask="url(#searchb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
