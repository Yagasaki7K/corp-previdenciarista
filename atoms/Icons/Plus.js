export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <path
        id="plusa"
        d="M13 11h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6H5a1 1 0 0 1 0-2h6V5a1 1 0 0 1 2 0v6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="plusb" fill="#fff">
        <use xlinkHref="#plusa" />
      </mask>
      <use fill="#ff7522" fillRule="nonzero" xlinkHref="#plusa" />
      <g fill="#ff7522" mask="url(#plusb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
