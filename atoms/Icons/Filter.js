export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="filtera"
        d="M9.002 12.826l-7.764-9.18A1 1 0 0 1 2.002 2h20a1 1 0 0 1 .763 1.646l-7.763 9.18V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9.002 19v-6.174zM19.847 4H4.157l6.608 7.814a1 1 0 0 1 .237.646v5.922l2 1V12.46a1 1 0 0 1 .236-.646L19.847 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filterb" fill="#fff">
        <use xlinkHref="#filtera" />
      </mask>
      <use fill="#fff" fillRule="nonzero" xlinkHref="#filtera" />
      <g fill="#fff" mask="url(#filterb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
