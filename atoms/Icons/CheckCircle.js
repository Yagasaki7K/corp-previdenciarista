export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="checkcircle"
        d="M20 11.076a1 1 0 1 1 2 0v.93a11 11 0 1 1-6.523-10.053 1 1 0 1 1-.814 1.827A9 9 0 1 0 20 12.006v-.93zm-9 1.516L21.293 2.3a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 8.707 10.3L11 12.592z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="checkcircleb" fill="#fff">
        <use xlinkHref="#checkcircle" />
      </mask>
      <use fill="#9FA5AD" fillRule="nonzero" xlinkHref="#checkcircle" />
      <g fill="#9FA5AD" mask="url(#checkcircleb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
