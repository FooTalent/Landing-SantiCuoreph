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
    url: "/assets/img/Masq1.JPG",
    caption: "Más que uno: 10 años",
    caption2: "Cobertura de evento artístico",
    link: "/fotografia/mas-que-uno",
  },
  {
    index: 2,
    url: "/assets/img/AuraGin.JPG",
    caption: "Aura Gin",
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
    caption: "TOCH",
    caption2: "Cobertura de evento artístico",
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
    <button className="lg:ml-[115px] ml-4 " style={{ ...buttonStyle }}>
      <div className="bg-slider w-14 h-14 flex justify-center items-center hover:bg-sliderHover rounded-full">
        <Image src="/assets/img/ArrowLeft.png" alt="" width={20} height={20} />
      </div>
    </button>
  ),
  nextArrow: (
    <button className="lg:mr-[115px] mr-4" style={{ ...buttonStyle }}>
      <div className="bg-slider w-14 h-14 flex justify-center items-center hover:bg-sliderHover rounded-full object-cover">
        <Image src="/assets/img/ArrowRight.png" alt="" width={20} height={20} />
      </div>
    </button>
  ),
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide
        autoplay={true}
        infinite={true}
        duration={8000}
        {...properties}
        indicators={true}
        cssClass="pb-5"
      >
        {slideImages.map((slideImage, index) => (
          <div key={slideImage.index} className="h-full">
            <Link href={slideImage.link}>
              <div className="h-screen relative flex items-center">
                <Image
                  src={slideImage.url}
                  alt="Slide"
                  width="0"
                  height="0"
                  sizes="100%"
                  className={`w-screen h-full object-cover ${
                    index == 0 || index == 3 ? "object-top" : ""
                  } filter brightness-90`}
                />

                {/* TEXTO PRINCIPAL Y SECUNDARIO */}
                <p className="text-fondoBlanco absolute font-merriwather font-bold italic lg:text-[4rem] text-[2rem] lg:left-[105px] left-4 lg:bottom-32 bottom-48 drop-shadow-[0_8px_5px_rgb(0,0,0,0.8)]">
                  {slideImage.caption2}
                </p>
                <p className="lg:left-[105px] font-nunitoSans absolute font-light text-fondoBlanco md:text-[2rem] text-[1.5rem] left-4 lg:bottom-24 bottom-36 drop-shadow-[0_8px_5px_rgb(0,0,0,0.8)]">
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
