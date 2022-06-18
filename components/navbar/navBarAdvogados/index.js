/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from 'next/image'
import SubMenu from '../SubMenu';
import { OptionSubMenuProduct, OptionSubMenuRetired } from '../Options';
import Link from "next/link";

const NavBar = () => {
    const [openSubMenuProduct, setOpenSubMenuProduct] = useState(false);
    const [openSubMenuTools, setOpenSubMenuTools] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [heightNavBar, setHeightNavBar] = useState('h-[72px] justify-center');

    function onHandlerClick() {
        const menu = document.querySelector(".mobile-menu-advogados");
        setIsClosed((prevState) => !prevState);
        setHeightNavBar((prevState) => prevState === 'h-[72px] justify-center' ? 'h-[100%] pt-[18px]' : 'h-[72px] justify-center');
        menu.classList.toggle("hidden");
    }

    function onHandlerChange() {
        const menu = document.querySelector(".mobile-menuuuu");
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

    const navClass = `fixed flex flex-col z-[9999] top-0 left-0 ${heightNavBar}	right-0 shadow-md overflow-auto shrink-0 bg-prev-default-bg_blue`;

    return (
        <>
            <nav className={navClass}
            >
                <div className="flex w-full items-center justify-around">
                    <div className="flex  items-center">
                        <Link href="/" className="flex items-center justify-center ">
                            <Image
                                src="/images/logo-nav-bar/desktop-white.svg"
                                alt="Logo"
                                className=""
                                width={214}
                                height={34}
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a
                            href="#"
                            className="py-4 px-2 text-prev-default-text_white font-semibold"
                            onMouseEnter={onHandlerChange}
                        >
                            SOLUÇÕES PARA ADVOGADOS
                        </a>
                        <a href="#" className="py-4 px-2 text-prev-default-text_white font-semibold ">SOLUÇÕES PARA APOSENTADOS</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={onHandlerClick}
                            aria-label="mobile-desktop"
                        >
                            {isClosed ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="#FFFFFF" viewBox="4 0 24 24" stroke="#FFFFFF" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg className="w-10 h-9 text-gray-900"
                                    x-show="!showMenu"
                                    fill="#FFFFFF"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 15 25"
                                    stroke="#FFFFFF"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            }
                        </button>
                    </div>
                </div>

                <div className="hidden mobile-menu-advogados md:hidden	">
                    <ul className="mt-4">
                        <li>
                            <a onClick={navProduct} className="block text-sub_title20 text-prev-default-text_white font-semibold px-2 py-4">SOLUÇÕES PARA ADVOGADOS</a>
                            {openSubMenuProduct ?
                                <div className="bg-prev-default-bg_white mx-3.5	py-3.5" >
                                    {OptionSubMenuProduct.map((data, index) => {
                                        return (
                                            <SubMenu key={index} props={data} />
                                        )
                                    })}
                                </div>
                                : null
                            }
                        </li>
                        <li>
                            <a onClick={navTools} className="block text-sub_title20 text-prev-default-text_white font-semibold px-2 py-4">SOLUÇÕES PARA APOSENTADOS</a>
                            {openSubMenuTools ?
                                <div className="bg-prev-default-bg_white mx-3.5	py-3.5">
                                    {OptionSubMenuRetired.map((data, index) => {
                                        return (
                                            <SubMenu key={index} props={data} />
                                        )
                                    })}
                                </div>
                                : null
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;