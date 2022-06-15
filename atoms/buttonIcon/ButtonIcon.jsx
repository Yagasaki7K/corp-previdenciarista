import Link from 'next/link';
import Arrow from '../Icons/Arrow';

const ArrowButton = ({ children, ...props }) => (
  <Link
    href={props.href}
    className="flex items-center py-1.5 px-[15px] cursor-pointer text-size14 shadow-lg bg-prev-default-text_white"
    {...props}
  >
    <a className="flex" target="_blank">
      <div className="mr-2 text-prev-default-subtitle">
        {children}
      </div>
      <Arrow className="arrow-icon" color="#5fa1d8" />
    </a>
  </Link>
);

export default ArrowButton;
