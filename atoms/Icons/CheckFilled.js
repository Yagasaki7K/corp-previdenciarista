export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    {...props}
  >
    <defs>
      <path
        id="circlefilleda"
        d="M2.157 5.634a.458.458 0 1 0-.648.648l2.292 2.292c.179.18.47.18.648 0l5.042-5.042a.458.458 0 1 0-.648-.648L4.125 7.602 2.157 5.634z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx="9" cy="9" r="9" fill="#3CB624" fillRule="nonzero" />
      <g transform="translate(3.724 3.724)">
        <mask id="circlefilledb" fill="#fff">
          <use xlinkHref="#circlefilleda" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#circlefilleda" />
        <g fill="#FFF" mask="url(#circlefilledb)">
          <path d="M0 0h11v11H0z" />
        </g>
      </g>
    </g>
  </svg>
);
