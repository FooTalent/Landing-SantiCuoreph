"use client";
import Link from "next/link";
import CameraLogo from "./CameraLogo";
import InstagramLogo from "./InstagramLogo";
import TextLogo from "./TextLogo";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre mí", href: "/sobre-mi" },
  { name: "Contacto", href: "/contacto" },
];

const getSections = () => {};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-fondoNegro">
      <nav className="py-4 px-4 lg:px-40">
        <div className="flex justify-between">
          <div className="flex items-center grow">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 grow">
                  <Logo></Logo>
              </Link>
            </div>
          </div>

          <ul className="hidden sm:flex justify-between items-center text-white grow text-xl">
            {navLinks.map((link) => {
              return (
                <li className="hover:text-principalHover" key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden sm:flex grow justify-end grow items-center">
          <a href="https://www.instagram.com/santicuoreph" target="_blank">

            <InstagramLogo size={32} />
            </a>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center"
              onClick={toggleMenu}
            >
              {isOpen ? "CERRAR" : "ABRIR"}
            </button>
          </div>
        </div>

        {isOpen && (
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
                <a href="https://www.instagram.com/santicuoreph" target="_blank">
            <InstagramLogo size={32} />
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
