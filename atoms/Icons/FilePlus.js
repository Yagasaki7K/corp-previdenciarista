export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="file-plusa"
        d="M11 16H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2zm8-7h-5a1 1 0 0 1-1-1V3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h1a1 1 0 0 0 1-1v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h8a1 1 0 0 1 .707.293l6 6a1 1 0 0 1 .217.324zm-4-4.586V7h2.586L15 4.414z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="file-plusb" fill="#fff">
        <use xlinkHref="#file-plusa" />
      </mask>
      <use fill="#63A3D9" fillRule="nonzero" xlinkHref="#file-plusa" />
      <g fill="#63A3D9" mask="url(#file-plusb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
