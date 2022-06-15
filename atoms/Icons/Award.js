export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="award"
        d="M9.015 15.425l-.75 5.65 3.22-1.932a1 1 0 0 1 1.03 0l3.22 1.932-.749-5.65A7.978 7.978 0 0 1 12 16a7.978 7.978 0 0 1-2.985-.575zm-1.876-1.07a8 8 0 1 1 9.722 0l1.13 8.513a1 1 0 0 1-1.505.99L12 21.165l-4.486 2.691a1 1 0 0 1-1.505-.989l1.13-8.513zm8.192-1.364A6 6 0 1 0 12 14c1.163 0 2.25-.331 3.17-.905a.995.995 0 0 1 .16-.104z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="awardb" fill="#fff">
        <use xlinkHref="#award" />
      </mask>
      <use fill="#9FA5AD" fillRule="nonzero" xlinkHref="#award" />
      <g fill="#9FA5AD" mask="url(#awardb)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
