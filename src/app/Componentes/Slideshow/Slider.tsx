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
    url: "/assets/img/PasadoPisado.JPG",
    caption: "Pasado Pisado",
    caption2: "Fotografía artística",
  },
  {
    url: "/assets/img/AuraGin.JPG",
    caption: "Aura Gin",
    caption2: "Fotografía comercial",
  },
  {
    url: "/assets/img/Masq1.JPG",
    caption: "Más que uno: 10 años",
    caption2: "Cobertura de evento artístico",
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
    
    <div className="slide-container">
      <Slide autoplay={false} {...properties} cssClass="bg-red-500 pb-5">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-full">
            <div className="h-full relative flex items-center">
              <Image
                src={slideImage.url}
                alt="Slide"
                width="0"
                height="0"
                sizes="100%"
                className="w-screen h-screen object-cover filter brightness-50"
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
              <p className="text-fondoBlanco absolute font-merriwather font-bold italic lg:text-[4rem] text-[2rem] lg:left-40 left-4 lg:bottom-32 bottom-48">
                {slideImage.caption}
              </p>
              <p className="lg:left-40 font-nunitoSans absolute font-light text-fondoBlanco md:text-[2rem] text-[1.5rem] left-4 lg:bottom-24 bottom-36">
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
