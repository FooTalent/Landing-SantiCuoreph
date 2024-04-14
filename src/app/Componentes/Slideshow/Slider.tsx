"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

/* Array con las imagenes que se mostraran, texto principal y texto secundario */

const slideImages = [
  {
    index: 1,
    url: "/images/mas-que-uno/mu01.jpg",
    caption: "Más que uno: 10 años",
    caption2: "Cobertura de evento",
    link: "/fotografia/mas-que-uno",
  },
  {
    index: 2,
    url: "/assets/img/AuraGin.JPG",
    caption: "AURA Gin",
    caption2: "Fotografía comercial",
    link: "/fotografia/aura-gin",
  },
  {
    index: 3,
    url: "/assets/img/PasadoPisado.png",
    caption: "Pasado Pisado",
    caption2: "Fotografía artística",
    link: "/fotografia/pasado-pisado",
  },

  {
    index: 4,
    url: "/assets/img/Toch.JPG",
    caption: "TOCH en Camping de Palermo",
    caption2: "Cobertura de evento",
    link: "/servicios/audiovisual",
  },
];

/* ESTILOS Y PROPIEDADES DE LOS BOTONES ATRAS Y ADELANTE */
const buttonStyle = {
  width: "50px",
  background: "none",
  border: "0px",
};
const properties = {
  prevArrow: (
    <button
      className="lg:ml-[115px] ml-4 hidden sm:block"
      style={{ ...buttonStyle }}
    >
      <div className=" bg-slider w-12 h-12 flex justify-center items-center hover:bg-sliderHover rounded-full">
        <Image src="/assets/img/ArrowLeft.png" alt="" width={20} height={20} />
      </div>
    </button>
  ),
  nextArrow: (
    <button
      className="lg:mr-[115px] mr-4 hidden sm:block"
      style={{ ...buttonStyle }}
    >
      <div className="bg-slider w-12 h-12 flex justify-center items-center hover:bg-sliderHover rounded-full object-cover">
        <Image src="/assets/img/ArrowRight.png" alt="" width={20} height={20} />
      </div>
    </button>
  ),
};

const Slideshow = () => {
  return (
    <div className="slide-container slide-principal">
      <Slide
        autoplay={true}
        infinite={true}
        duration={8000}
        {...properties}
        indicators={true}
        cssClass="pb-5"
      >
        {slideImages.map((slideImage, index) => (
          <div key={slideImage.index} className="h-[438px] md:h-full">
            <Link href={slideImage.link}>
              <div className="md:h-screen relative flex items-center">
                <Image
                  src={slideImage.url}
                  alt={slideImage.caption2}
                  width="0"
                  height="0"
                  sizes="100%"
                  className={`w-screen h-[438px] md:h-full object-cover ${
                    index !== 3 && index !== 1 ? "object-top" : ""
                  } filter brightness-90 pt-14 md:pt-[75px]`}
                />

                {/* TEXTO PRINCIPAL Y SECUNDARIO */}
                <p className="text-fondoBlanco absolute font-merriwather font-bold   lg:text-7xl text-2xl md:text-[2rem] lg:left-[115px] left-10 lg:bottom-44 bottom-28 md:bottom-56 drop-shadow-[0_8px_5px_rgb(0,0,0,0.8)]">
                  {slideImage.caption2}
                </p>
                <p className="lg:left-[115px] font-nunitoSans absolute font-light italic text-fondoBlanco text-xl md:text-[2rem] left-10 lg:bottom-28 md:bottom-40 bottom-20 drop-shadow-[0_8px_5px_rgb(0,0,0,0.8)]">
                  {slideImage.caption}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
