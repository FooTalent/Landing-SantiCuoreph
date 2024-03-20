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
    <header className="bg-fondoNegro fixed z-40 w-full opacity-85">
      <nav className="py-3 pr-4 lg:px-40 opacity-100">
        <div className="flex justify-between">
          <div className="flex items-center grow-[2]">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 grow">
                <Image src={LogoSanti} alt="Logo Santi Cuore PH" />
              </Link>
            </div>
          </div>

          <ul className="hidden sm:flex justify-around items-center text-white text-xl grow-[2] pr-40">
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
          <div className="flex gap-10">
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
            <div className="hidden sm:flex grow justify-end items-center gap-10">
              <a href="" target="_blank">
                <FacebookLogo />
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
          <div className="sm:hidden">
            <div className="px-2 pt-2 space-y-1">
              <ul className="flex flex-col items-center justify-between text-white grow text-2xl">
                {navLinks.map((link) => {
                  return (
                    <li className="hover:text-principalHover" key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
                <div className="grow justify-end grow">
                  <a
                    href="https://www.instagram.com/santicuoreph"
                    target="_blank"
                  >
                    <InstagramLogo size={32} />
                  </a>
                </div>
                <div className="grow justify-end grow">
                  <a href="" target="_blank">
                    <Whatsapp />
                  </a>
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
