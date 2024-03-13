"use client";
import Link from "next/link";
import CameraLogo from "./CameraLogo";
import InstagramLogo from "./InstagramLogo";
import TextLogo from "./TextLogo";
import { useState } from "react";

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
    <header className="bg-fondoNegro">
      <nav className="container mx-auto py-4">
        <div className="flex justify-between">
          <div className="flex items-center grow">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 grow">
                <CameraLogo />
                <TextLogo />
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
            <InstagramLogo size={32} />
          </div>

          <div className="sm:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center"
              onClick={toggleNavbar}
            >
              {isClick ? "CERRAR" : "ABRIR"}
            </button>
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
            <InstagramLogo size={32} />
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
