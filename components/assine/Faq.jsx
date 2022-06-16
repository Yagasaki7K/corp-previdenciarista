import { useState, useRef } from 'react';
import PlusIcon from '../../atoms/Icons/Plus';
import MinusIcon from '../../atoms/Icons/Minus';
import ReactHtmlParser from 'react-html-parser';
import SectionRow from './Section';

const getHeader = (text, open) => {
  const Icon = open ? MinusIcon : PlusIcon;
  return (
    <div className="flex items-center">
      <Icon />
      <p className="pl-2 font-calibri font-semibold text-sm text-assine-header_faq">{text}</p>
    </div>
  );
};

const Faq = ({props}) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')

  const contentSpace = useRef(null || {})

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
  }

  return  (
    <div className="flex flex-col border-b border-prev-assine-border_faq">
      <button
        className="mb-[37px] p-4 text-left flex items-center justify-between"
        onClick={toggleAccordion}
      >
        {getHeader(props.q, active)}
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="px-10 overflow-auto"
      >
        <SectionRow>{ReactHtmlParser(props.a)}</SectionRow>
      </div>
  </div>
  );

};

export default Faq;
