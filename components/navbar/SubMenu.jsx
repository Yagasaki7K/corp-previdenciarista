/* eslint-disable @next/next/no-img-element */
import React from "react";

const SubMenu = ({props}) => {

  return (
    <>
      <li className="my-2.5">
        <a href={props.urlRef} className="text-lg flex items-center"
        >
          <img
            src={props.urlImage}
            alt=""
            className="my-2.5	mx-2.5 w-5 h-5"
          />
          <span>{props.subTitle}</span>
        </a>
      </li>
    </>
  )
}

export default SubMenu;