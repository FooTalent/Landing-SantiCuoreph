"use client";
import Link from "next/link";
import CameraLogo from "./CameraLogo";
import InstagramLogo from "./InstagramLogo";
import TextLogo from "./TextLogo";
import { useState } from "react";
import Logo from "./Logo";
import Whatsapp from "@/app/Icon/Whatsappequipo6";
import FacebookLogo from "./FacebookLogo";
import LogoSanti from "../../../../public/images/navbar/logo-santi.png";
import Image from "next/image";
import MenuOpen from "./MenuOpen";
import MenuClose from "./MenuClose";
import "./styles.css";

const navLinks = [
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre mí", href: "/sobre-mi" },
  { name: "Contacto", href: "/contacto" },
];

const getSections = () => {};

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <header className="bg-fondo fixed z-40 w-full">
      <nav className="py-3 px-4 md:px-8 lg:px-20 xl:px-40">
        <div className="flex justify-between">
          <div className="flex items-center xl:grow-[2]">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 grow">
                <Image src={LogoSanti} alt="Logo Santi Cuore PH" />
              </Link>
            </div>
          </div>

          <ul className="hidden sm:flex justify-around items-center text-white text-xl grow-[2] xl:pr-40">
            {navLinks.map((link) => {
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
              <a href="https://www.instagram.com/santicuoreph" target="_blank">
                <InstagramLogo size={32} />
              </a>
            </div>
            <div className="hidden sm:flex grow justify-end items-center gap-10">
              <a href="" target="_blank">
                <Whatsapp />
              </a>
            </div>
          </div>
          <div className="sm:hidden flex items-center relative" onClick={toggleNavbar}>
              <div className="box">
                <div className={`btn ${isClick ? 'active' : 'not-active'}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            
          </div>
        </div>

        {isClick && (
          <div className="sm:hidden pb-1">
            <div className="px-2 pt-2">
              <ul className="flex flex-col items-center justify-between text-white grow text-2xl font-semibold gap-5">
                {navLinks.map((link) => {
                  return (
                    <li className="hover:text-principalHover" key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
                <div className="flex items-center gap-5">
                  <a
                    href="https://www.instagram.com/santicuoreph"
                    target="_blank"
                  >
                    <InstagramLogo size={32} />
                  </a>
                  <a href="" target="_blank">
                    <Whatsapp />
                  </a>
                </div>
                <div className="grow justify-end grow">
   
                </div>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
