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
    <button
      className="container 2xl:ml-48 xl:ml-28 lg:ml-24 md:ml-28 ml-14"
      style={{ ...buttonStyle }}
    >
      <Image src="/assets/img/ArrowLeft.png" alt="" width={60} height={60} />
    </button>
  ),
  nextArrow: (
    <button
      className="container 2xl:mr-48 xl:mr-28 lg:ml-24 md:mr-28 mr-14"
      style={{ ...buttonStyle }}
    >
      <Image src="/assets/img/ArrowRight.png" alt="" width={60} height={60} />
    </button>
  ),
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide autoplay={false} {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-screen">
            <div className="h-full relative flex items-center">
              <Image
                src={slideImage.url}
                alt="Slide"
                width="0"
                height="0"
                sizes="cover"
                className="w-screen h-screen filter brightness-50"
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
              <p className="text-fondoBlanco absolute font-merriwather font-bold italic lg:text-[4rem] text-[2rem] 2xl:left-48 xl:left-28 lg:left-20 md:left-28 left-14 lg:bottom-32 bottom-48">
                {slideImage.caption}
              </p>
              <p className="2xl:left-48 xl:left-28 lg:left-24 font-nunitoSans absolute font-light text-fondoBlanco text-[2rem] md:left-28 left-14 lg:bottom-24 bottom-36">
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
