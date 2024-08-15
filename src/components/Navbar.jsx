// import React from 'react'
import {NAVIGATION_LINKS} from "../constants"
import { useState } from "react"
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if(targetElement){
        const offset = -85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition +window.scrollY +offset;

        window.scrollTo({
          top: offsetPosition,
          behavior:"smooth",
        })
      }
      setIsMobileMenuOpen(false)
    }

    return(
        <div>
            <nav className='fixed left-0 right-0 top-3 z-50'>
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/35 py-4 backdrop-blur-sm
                    lg:flex">
                    <div className='flex justify-between gap-12'>
                        <div>
                            <a href = "#" className="text-3xl font-extrabold">
                                {/* <img src={logo} width={90} alt="logo"/> */}
                                LILY ZHANG
                            </a>
                            <div className=" h-2.5 w-12 bg-teal-400"></div>
                        </div>
                        <ul className='flex items-center gap-4'>
                            {NAVIGATION_LINKS.map((item,index) => (
                                <li key={index}>
                                    <a className='text-lg font-medium hover:text-teal-100'
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li> 
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className='fixed left-0 right-0 top-0 z-50'>
                {/* Mobile Menu */}
                <div className='backdrop-blur-lg bg-black/35 lg:hidden pb-2.5 pt-2'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <a href = "#" className="pl-5 text-2xl font-extrabold">
                                {/* <img src={logo} width={90} alt = "logo"
                                className='m-2'/> */}
                                LILY ZHANG
                            </a>
                            <div className=" mx-5 h-2 w-12 bg-teal-400"></div>
                        </div>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden'
                            onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ?(
                                    <FaTimes className="m-2 h-6 w-5"/>
                                ): (
                                    <FaBars className="m-2 h-6 w-5"/>
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen &&(
                        <ul className='ml-4 mt-2 pb-2 flex flex-col gap-2'>
                            {NAVIGATION_LINKS.map((item,index) => (
                                <li key={index}>
                                    <a className='block w-full text-lg font-semibold' href={item.href} onClick={(e) =>
                                        handleLinkClick(e,item.href)}>
                                            {item.label}
                                        </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar