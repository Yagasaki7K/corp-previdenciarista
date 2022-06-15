export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="hearta"
        d="M12.804 3.905a6.5 6.5 0 0 1 11.1 4.597 6.5 6.5 0 0 1-1.906 4.597l-8.84 8.84a1 1 0 0 1-1.414 0l-8.84-8.84a6.501 6.501 0 0 1 9.194-9.194l.353.353.353-.353zm-.353 15.913l7.073-7.073 1.06-1.06A4.5 4.5 0 0 0 17.401 4a4.5 4.5 0 0 0-3.183 1.319l-1.06 1.06a1 1 0 0 1-1.414 0l-1.06-1.06a4.501 4.501 0 0 0-6.366 6.366l8.133 8.133z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="heartb" fill="#fff">
        <use xlinkHref="#hearta" />
      </mask>
      <use fill="#63A3D9" fillRule="nonzero" xlinkHref="#hearta" />
      <g fill="#63A3D9" mask="url(#heartb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
