export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="alertTriangle"
        d="M9.88 3.449a3.002 3.002 0 0 1 5.135 0l8.478 14.154a3 3 0 0 1-2.576 4.5H3.966a3 3 0 0 1-2.557-4.514l8.47-14.14zM3.132 18.603a1 1 0 0 0 .844 1.5h16.929a1 1 0 0 0 .863-1.486L13.302 4.48a1 1 0 0 0-1.709-.002l-8.46 14.124zm8.314-9.5a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4zm.293 7.707a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="M9.88" fill="#fff">
        <use xlinkHref="#alertTriangle" />
      </mask>
      <use fill="#63A3D9" fillRule="nonzero" xlinkHref="#alertTriangle" />
      <g fill="#63A3D9" mask="url(#M9.88)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
