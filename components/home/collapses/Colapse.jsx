import { useState, useRef } from "react";

const CollapseHome = ({ props }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
  }

  return (
    <>
      <div
        className="flex flex-col mt-4 pl-6 rounded-md	py-4 shadow-md"
      >
        <button
          className="box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
          onClick={toggleAccordion}
        >
          <p className="">{props.title}</p>
          <div className="mr-4">
            {active ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          </div>
        </button>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-auto mt-0"
        >
          {props.body.map((data, index) => {
            return (
              <div key={index} className="my-1">
                - {data.text}
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default CollapseHome;
