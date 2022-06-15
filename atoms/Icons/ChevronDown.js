export default (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="chevrona"
        d="M12 13.586L6.707 8.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414L12 13.586z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chevronb" fill="#fff">
        <use xlinkHref="#chevrona" />
      </mask>
      <use fill="#fff" fillRule="nonzero" xlinkHref="#chevrona" />
      <g fill="#fff" mask="url(#chevronb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
