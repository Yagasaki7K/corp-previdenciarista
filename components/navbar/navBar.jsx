/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SubMenu from './SubMenu';
import { OptionSubMenuProduct, OptionSubMenuProductDesktopOne, OptionSubMenuProductDesktopTwo, OptionSubMenuTools } from './Options';
import Link from "next/link";

const NavBar = ({ischangeColor = true}) => {
  const [openSubMenuProduct, setOpenSubMenuProduct] = useState(false);
  const [openSubMenuTools, setOpenSubMenuTools] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [heightNavBar, setHeightNavBar] = useState('h-[72px] justify-center');

  function onHandlerClick() {
    const menu = document.querySelector(".mobile-menu");
    setIsClosed((prevState) => !prevState);
    setHeightNavBar((prevState) => prevState === 'h-[72px] justify-center' ? 'h-[100%] pt-[18px]' : 'h-[72px] justify-center');
    menu.classList.toggle("hidden");
  }

  function onHandlerChange() {
    const menu = document.querySelector(".mobile-menuu");
    // menu.classList.toggle("hidden");
  }

  function navProduct() {
    setOpenSubMenuProduct((prevState) => !prevState);
    setOpenSubMenuTools(false);
  }

  function navTools() {
    setOpenSubMenuTools((prevState) => !prevState);
    setOpenSubMenuProduct(false);
  }

  const navClass = `fixed flex flex-col z-[9999] top-0 left-0 ${heightNavBar}	right-0 bg-white shadow-md  overflow-auto	shrink-0`;

  return (
    <>
      <nav
        className={navClass}
        style={{ background: ischangeColor ? "white" :"#3375AB", color: ischangeColor ? "" : "white"}}
      >
        <div className="flex w-full items-center justify-around">
          <div className="flex  items-center">
            <Link href="/" className="flex items-center justify-center ">
              {
                ischangeColor ? (
                  <img
                    src="/images/logo-nav-bar/desktop-blue.svg"
                    alt="Logo"
                    style={{ width: "214px", height: "34px" }}
                  /> 
                ) : (
                  <img
                    src="/images/logo-nav-bar/desktop-white.svg"
                    alt="Logo"
                    style={{ width: "214px", height: "34px" }}
                  /> 
                )
              }
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="py-4 px-2 text-gray-500 font-semibold"
              onMouseEnter={() => setOpenSubMenuProduct((prevState) => !prevState)}
              // onMouseLeave={() => setOpenSubMenuProduct((prevState) => !prevState)}
            >
              PRODUTO
            </a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold ">PREÇO</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold ">PETIÇÕES</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold ">BLOG</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold ">FERRAMENTAS</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold ">LOGIN</a>
            <div className="hidden md:flex items-center space-x-3 ">
              <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">ASSINE AGORA</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={onHandlerClick}
              aria-label="mobile-desktop"
            >
              {isClosed ?
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="#5272A7" viewBox="4 0 24 24" stroke="#5272A7" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                :
                <svg className="w-10 h-9 text-gray-900"
                  x-show="!showMenu"
                  fill="#5272A7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 15 25"
                  stroke="#5272A7"
                  >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              }
            </button>
          </div>
        </div>

        <div className="hidden mobile-menu md:hidden	">
          <ul className="mt-4">
            <li>
              <a onClick={navProduct} className="block text-sub_title20 text-gray-600 font-semibold px-2 py-4">PRODUTO</a>
              {openSubMenuProduct ?
                <div className="bg-white mx-3.5	py-3.5" >
                  {OptionSubMenuProduct.map((data, index) => {
                    return (
                      <SubMenu key={index} props={data} />
                    )
                  })}
                </div>
                : null
              }
            </li>
            <li><a href="#" className="block text-sub_title20 text-gray-600 font-semibold px-2 py-4">PREÇO</a></li>
            <li><a href="#" className="block text-sub_title20 text-gray-600 font-semibold px-2 py-4">PETIÇÕES</a></li>
            <li>
              <a onClick={navTools} className="block text-sub_title20 text-gray-600 font-semibold px-2 py-4">FERRAMENTAS</a>
              {openSubMenuTools ?
                <div className="bg-white mx-3.5	py-3.5" >
                  {OptionSubMenuTools.map((data, index) => {
                    return (
                      <SubMenu key={index} props={data} />
                    )
                  })}
                </div>
                : null
              }
            </li>
            <li><a href="#" className="block text-sub_title20 text-gray-600 font-semibold px-2 py-4">LOGIN</a></li>
          </ul>
        </div>

        <div className="hidden mobile-menuu md:invisible">
          <ul className="">
            <li>
              <a onClick={navProduct} className="block text-2xl text-gray-600 font-semibold px-2 py-4">PRODUTO</a>
              {openSubMenuProduct ?
                <div className="bg-white mx-3.5	py-3.5" >
                  {OptionSubMenuProduct.map((data, index) => {
                    return (
                      <SubMenu key={index} props={data} />
                    )
                  })}
                </div>
                : null
              }
            </li>
            <li><a href="#" className="block text-2xl text-gray-600 font-semibold px-2 py-4">PREÇO</a></li>
            <li><a href="#" className="block text-2xl text-gray-600 font-semibold px-2 py-4">PETIÇÕES</a></li>
            <li>
              <a onClick={navTools} className="block text-2xl text-gray-600 font-semibold px-2 py-4">FERRAMENTAS</a>
              {openSubMenuTools ?
                <div className="bg-white mx-3.5	py-3.5" >
                  {OptionSubMenuTools.map((data, index) => {
                    return (
                      <SubMenu key={index} props={data} />
                    )
                  })}
                </div>
                : null
              }
            </li>
            <li><a href="#" className="block text-2xl text-gray-600 font-semibold px-2 py-4">LOGIN</a></li>
          </ul>
        </div>
      </nav>


      {openSubMenuProduct && (
        <div
          // onMouseLeave={() => setOpenSubMenuProduct((prevState) => !prevState)}
          // style={{position: "absolute", zIndex: 99, left: 650}}
          className={`flex justify-center items-center bg-prev-default-text_white border`}
        >
          <div>
            {OptionSubMenuProductDesktopOne.map((data, index) => {
              return (
                <SubMenu key={index} props={data} />
              )
            })}
          </div>

          <div>
            {OptionSubMenuProductDesktopTwo.map((data, index) => {
              return (
                <SubMenu key={index} props={data} />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar;
