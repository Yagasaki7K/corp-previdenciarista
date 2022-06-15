export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="alertOctagon"
        d="M7.86 1h8.28a1 1 0 0 1 .707.293l5.86 5.86A1 1 0 0 1 23 7.86v8.28a1 1 0 0 1-.293.707l-5.86 5.86a1 1 0 0 1-.707.293H7.86a1 1 0 0 1-.707-.293l-5.86-5.86A1 1 0 0 1 1 16.14V7.86a1 1 0 0 1 .293-.707l5.86-5.86A1 1 0 0 1 7.86 1zm.414 2L3 8.274v7.452L8.274 21h7.452L21 15.726V8.274L15.726 3H8.274zM11 8a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V8zm.293 7.707a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="86v8" fill="#fff">
        <use xlinkHref="#alertOctagon" />
      </mask>
      <use fill="#9FA5AD" xlinkHref="#alertOctagon" />
      <g fill="#9FA5AD" mask="url(#86v8)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
