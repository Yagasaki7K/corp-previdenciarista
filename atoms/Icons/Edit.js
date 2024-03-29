export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="edita"
        d="M19 14.66a1 1 0 0 1 2 0V20a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5.34a1 1 0 1 1 0 2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.34zm-.293-13.367l4 4a1 1 0 0 1 0 1.414l-10 10A1 1 0 0 1 12 17H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10a1 1 0 0 1 1.414 0zM9 12.414V15h2.586l9-9L18 3.414l-9 9z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="editb" fill="#fff">
        <use xlinkHref="#edita" />
      </mask>
      <use fill="#63A3D9" fillRule="nonzero" xlinkHref="#edita" />
      <g fill="#63A3D9" mask="url(#editb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
