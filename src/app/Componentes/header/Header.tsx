"use client";
import Link from "next/link";

import InstagramLogo from "./InstagramLogo";
import { useState, useEffect } from "react";
import Whatsapp from "@/app/Icon/Whatsappequipo6";
import "./styles.css";
import Logo from "./Logo";

const navLinks = [
  { name: "Inicio", href: "/"},
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre mí", href: "/sobre-mi" },
  { name: "Contacto", href: "/contacto" },
];


const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(isClick == false){
        document.body.style.overflow = 'auto';
      }else{
        document.body.style.overflow = 'hidden ';
      }
    }
  }, [isClick]);

  return (
    <header className="bg-fondo fixed z-40 w-full h-14 md:h-min ">
      <nav className="py-3 px-4 md:px-8  xl:max-w-screen-xl xl:mx-[105px] xl:px-0">
        <div className="flex justify-between">
          <div className="flex items-center xl:grow-[2]">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 grow w-40 md:w-56">
                <Logo/>
              </Link>
            </div>
          </div>

          <ul className="hidden sm:flex justify-around items-center text-white text-[19px] grow-[2] xl:pr-40">
            {navLinks.slice(1).map((link) => {
              return (
                <li
                  
                  className="hover:text-principalHover font-semibold hover:font-bold font-nunitoSans"
                  key={link.name}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex sm:gap-3 lg:gap-6 xl:gap-10">
            <div className="hidden sm:flex grow justify-end items-center gap-10">
              <a href="https://www.instagram.com/santicuore.ph/" target="_blank">
                <InstagramLogo size={26} />
              </a>
            </div>
            <div className="hidden sm:flex grow justify-end items-center gap-10">
              <a href="" target="_blank">
                <Whatsapp size={28} />
              </a>
            </div>
          </div>
          <div className="sm:hidden flex items-center relative z-40" onClick={toggleNavbar}>
              <div className="box">
                <div className={`btn ${isClick ? 'active' : 'not-active'}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            
          </div>
        </div>
          <div className="sm:hidden pb-1">
            <div className="px-2 pt-2">
              <ul className={`btn ${isClick ? 'right-0' : 'right-[-999px] '} flex flex-col bg-fondoGris absolute min-w-[290px] top-0 h-screen items-center justify-between text-white text-2xl font-semibold gap-8 transition-all duration-500 font-nunitoSans font-semibold`}>
              <div className="flex-shrink-0 md:hidden">
              <Link href="/" className="flex items-center gap-2 grow w-40 my-12">
                <Logo/>
              </Link>
            </div>
                {navLinks.map((link) => {
                  return (
                    <li className="hover:text-principalHover" key={link.name}>
                      <Link href={link.href}  onClick={toggleNavbar}>{link.name}</Link>
                    </li>
                  );
                })}
                <div className="flex items-center gap-10 ">
                  <a
                    href="https://www.instagram.com/santicuore.ph/"
                    target="_blank"
                  >
                    <InstagramLogo size={26} />
                  </a>
                  <a href="" target="_blank">
                    <Whatsapp size={28}/>
                  </a>
                </div>
                <div className="grow justify-end grow">
   
                </div>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
