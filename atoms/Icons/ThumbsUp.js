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
        id="23H7a1"
        d="M19.649 8a3 3 0 0 1 3 3.452l-1.38 8.998A2.997 2.997 0 0 1 18.28 23H7a1 1 0 0 1-1-1V11a1 1 0 0 1 .086-.406l4-9A1 1 0 0 1 11 1a4 4 0 0 1 4 4v3h4.649zM8 21h10.291a1 1 0 0 0 1-.852l1.38-8.998A1 1 0 0 0 19.66 10H14a1 1 0 0 1-1-1V5a2 2 0 0 0-1.392-1.906L8 11.212V21zm-2-9H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v-9zm1 11H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="998A2" fill="#fff">
        <use xlinkHref="#23H7a1" />
      </mask>
      <use fill="#63A3D9" fillRule="nonzero" xlinkHref="#23H7a1" />
      <g fill="#63A3D9" mask="url(#998A2)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
