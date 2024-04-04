"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

/* Array con las imagenes que se mostraran, texto principal y texto secundario */

const slideImages = [
  {
    url: "/assets/img/Masq1.JPG",
    caption: "Más que uno: 10 años",
    caption2: "Cobertura de evento artístico",
  },
  {
    url: "/assets/img/AuraGin.JPG",
    caption: "Aura Gin",
    caption2: "Fotografía comercial",
  },
  {
    url: "/assets/img/PasadoPisado.JPG",
    caption: "Pasado Pisado",
    caption2: "Fotografía artística",
  },

  {
    url: "/assets/img/Toch.JPG",
    caption: "TOCH",
    caption2: "Cobertura de evento artístico",
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
      <Slide autoplay={false} {...properties} indicators={true} cssClass="pb-5">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-full">
            <div className="h-screen relative flex items-center">
              <Image
                src={slideImage.url}
                alt="Slide"
                width="0"
                height="0"
                sizes="100%"
                className={`w-screen h-full object-cover ${
                  index == 0 || index == 3 ? "object-top" : ""
                } filter brightness-50`}
              />

              {/* TEXTO PRINCIPAL Y SECUNDARIO */}
              <p className="text-fondoBlanco absolute font-merriwather font-bold italic lg:text-[4rem] text-[2rem] lg:left-[105px] left-4 lg:bottom-32 bottom-48">
                {slideImage.caption}
              </p>
              <p className="lg:left-[105px] font-nunitoSans absolute font-light text-fondoBlanco md:text-[2rem] text-[1.5rem] left-4 lg:bottom-24 bottom-36">
                {slideImage.caption2}
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
