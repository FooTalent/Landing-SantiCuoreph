"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

/* Componente de Indicadores */
const SlideIndicator: React.FC<{ active: boolean }> = ({ active }) => (
  <span
    style={{
      display: "inline-block",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: active ? "#fff" : "rgba(255, 255, 255, 0.5)",
      marginRight: "8px",
      cursor: "pointer",
    }}
  />
);
/* Array con las imagenes que se mostraran, texto principal y texto secundario */
/**
 TODO -  OBTENER ESTE LISTADO POR PARAMETRO
 */
const slideImages = [
  {
    url: "/assets/img/Test1.JPG",
    caption: `"La experiencia con Santi fue excelente. Hicimos unas fotos en exteriores para la banda. La jornada fue muy buena y productiva. Santi es un tipo muy criterioso y nos sentimos muy cómodos. La experiencia fue muy buena, cubrió las expectativas de todos los que somos parte de la banda."`,
    caption2: "Lucas, bajista de Pasado Pisado",
  },
  {
    url: "/assets/img/Test2.JPG",
    caption:
      '"La experiencia con Santi fue excelente. Hicimos unas fotos en exteriores para la banda. La jornada fue muy buena y productiva. Santi es un tipo muy criterioso y nos sentimos muy cómodos. La experiencia fue muy buena, cubrió las expectativas de todos los que somos parte de la banda."',
    caption2: "Lucas, bajista de Pasado Pisado",
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
    <button className="lg:ml-40 ml-4" style={{ ...buttonStyle }}>
      <Image src="/assets/img/ArrowLeft.png" alt="" width={60} height={60} />
    </button>
  ),
  nextArrow: (
    <button className="lg:mr-40 mr-4" style={{ ...buttonStyle }}>
      <Image src="/assets/img/ArrowRight.png" alt="" width={60} height={60} />
    </button>
  ),
};

const Slideshow = () => {
  return (
    <div className="slide-container my-10">
      <Slide autoplay={false} {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-full">
            <div className="h-full relative flex items-center">
              <Image
                src={slideImage.url}
                alt="Slide"
                width="0"
                height="0"
                sizes="100%"
                className="w-screen h-[400px] md:h-[744px] object-cover filter brightness-50"
              />
              {/* CONTENEDOR DE LOS INDICADORES */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px", // Ajusta la posición vertical de los indicadores
                  left: "50%", // Centra los indicadores horizontalmente
                  transform: "translateX(-50%)", // Centra los indicadores horizontalmente
                  zIndex: 10, // Asegura que los indicadores estén encima de la imagen
                }}
              >
                {slideImages.map((_, i) => (
                  <SlideIndicator key={i} active={i === index} />
                ))}
              </div>
              {/* TEXTO PRINCIPAL Y SECUNDARIO */}
              <h3 className="text-fondoBlanco font-merriwather font-normal text-2xl md:text-7xl absolute left-4 lg:left-40 top-14 md:top-24">
                Testimonios
              </h3>
              <p className="text-fondoBlanco font-nunitoSans italic font-semibold text-sm md:text-2xl lg:text-4xl absolute md:mx-36 lg:mx-64 mx-20">
                {slideImage.caption}
              </p>
              <p className="text-fondoBlanco font-nunitoSans font-semibold text-sm md:text-2xl lg:text-4xl absolute md:mx-36 lg:mx-64 mx-20 bottom-16 md:bottom-36">
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
