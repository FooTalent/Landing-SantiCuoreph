"use client";
import Link from "next/link";

import InstagramLogo from "./InstagramLogo";
import { useState, useEffect } from "react";
import Whatsapp from "@/app/Icon/Whatsappequipo6";
import "./styles.css";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre mí", href: "/sobre-mi" },
  { name: "Contacto", href: "/contacto" },
];

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [toNavigate, setToNavigate] = useState<string>("");
  const [isClick, setIsClick] = useState(false);
  const selectNavStyles = "text-principal font-bold"
  console.log(pathName)

  function handlePathName(currentPath: string): string {
    if (currentPath === "/servicios" || currentPath === "/servicios/audiovisual") {
      return "/servicios";
    } else {
      return currentPath
    }
  }

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isClick == false) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden ";
      }
    }
  }, [isClick]);
  const handleLogoLink = () => {
    if (pathName === "/contacto/formulario") {
      document.body.style.overflow = "hidden";
      setToNavigate("/");
      setShowModal(true);
    } else {
      router.push("/");
    }
  };
  const handleNavigateLinksOpenModal = (href: string) => {
    if (pathName === "/contacto/formulario") {
      document.body.style.overflow = "hidden";
      setToNavigate(href);
      setShowModal(true);
    } else {
      router.push(href);
    }
  };
  const handleNavigateQuit = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
    router.push(toNavigate);
  };
  const handleCancelModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };
  return (
    <header className="bg-fondo fixed z-40 w-full h-14 md:h-min ">
      {showModal && (
        <div className="absolute w-full h-screen backdrop-blur-lg flex ">
          <div className="h-72 w-[700px] space-y-5 p-5 rounded-3xl font-merriwather  border bg-white m-auto">
            <button
              className="ml-auto hidden sm:flex"
              onClick={() => {
                setShowModal(false), (document.body.style.overflow = "auto");
              }}
            >
              <svg
                fill="#000000"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 490 490"
              >
                <polygon
                  points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
                />
              </svg>
            </button>
            <h3 className="text-[22px] sm:text-3xl font-bold text-center">
              ¿Salir sin completar el formulario?
            </h3>
            <p className="text-center text-lg text-normal">
              Si salís del formulario ahora, perderás los datos ingresados.
            </p>
            <div className="flex justify-evenly">
              <button
                onClick={handleCancelModal}
                className="border border-[#b3b3b3] w-32 rounded-3xl font-bold py-3 px-2 hover:bg-principalHover transition-all ease-in-out"
              >
                Cancelar
              </button>
              <button
                onClick={handleNavigateQuit}
                className="border w-32 rounded-3xl font-bold py-3 px-2 hover:bg-orange-400 transition-all ease-in-out bg-orange-500 text-white"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}
      <nav className="py-3 px-4">
        <div className="flex justify-between xl:max-w-screen-2xl mx-auto">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                onClick={handleLogoLink}
                className="flex items-center gap-2 grow w-40 md:w-56"
              >
                <Logo />
              </button>
            </div>
          </div>

          <ul className="hidden sm:flex justify-center gap-10 xl:gap-24 items-center text-white text-[19px] grow-[2] lg:pl-10 xl:pl-40">
            {navLinks.slice(1).map((link) => {
              return (
                <li
                  className="hover:text-principalHover font-semibold hover:font-bold font-nunitoSans"
                  key={link.name}
                >
                  <button
                    onClick={() =>
                      handleNavigateLinksOpenModal(link.href)
                    } /* href={link.href} */
                    className={`${handlePathName(pathName) === link.href ? selectNavStyles : ""}`}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex sm:gap-3 lg:gap-6 xl:gap-10">
            <div className="hidden sm:flex grow justify-end items-center gap-10">
              <a
                href="https://www.instagram.com/santicuoreph/"
                target="_blank"
              >
                <InstagramLogo size={26} />
              </a>
            </div>
            <div className="hidden sm:flex grow justify-end items-center gap-10">
              <a
                href="https://api.whatsapp.com/send?phone=5491153748531&text=%C2%A1Hola%2C%20Santi!%20Estoy%20interesado%20en%20tus%20servicios.%20%C2%BFPodr%C3%ADas%20darme%20informaci%C3%B3n%20sobre%20&type=phone_number&app_absent=0"
                target="_blank"
              >
                <Whatsapp size={28} />
              </a>
            </div>
          </div>
          <div
            className="sm:hidden flex items-center relative z-40"
            onClick={toggleNavbar}
          >
            <div className="box">
              <div className={`btn ${isClick ? "active" : "not-active"}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden pb-1">
          <div className="px-2 pt-2">
            <ul
              className={`btn ${
                isClick ? "right-0" : "right-[-999px] "
              } flex flex-col bg-fondoGris absolute min-w-[250px] top-0 h-screen items-center justify-between text-white text-2xl font-semibold gap-8 transition-all duration-500 font-nunitoSans`}
            >
              <div className="flex-shrink-0 md:hidden">
                <Link
                  href="/"
                  className="flex items-center gap-2 grow w-40 my-12"
                >
                  <Logo />
                </Link>
              </div>
              {navLinks.map((link) => {
                return (
                  <li className="hover:text-principalHover" key={link.name}>
                    <button
                      onClick={() => {
                        handleNavigateLinksOpenModal(link.href);
                        toggleNavbar();
                      }}
                    >
                      {link.name}
                    </button>
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
                <a
                  href="https://api.whatsapp.com/send?phone=5491153748531&text=%C2%A1Hola%2C%20Santi!%20Estoy%20interesado%20en%20tus%20servicios.%20%C2%BFPodr%C3%ADas%20darme%20informaci%C3%B3n%20sobre%20&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <Whatsapp size={28} />
                </a>
              </div>
              <div className="grow justify-end"></div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
