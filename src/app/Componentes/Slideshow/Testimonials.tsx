"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

/* Array con las imagenes que se mostraran, texto principal y texto secundario */
/**
TODO -  OBTENER ESTE LISTADO POR PARAMETRO
 */
const slideImages = [
  {
    url: "/assets/img/Test3.jpg",
    caption:
      '"Santi fue súper profesional, llegó puntual al evento, en nuestro caso hasta un rato antes inclusive, para ir viendo el lugar y saber dónde podía tomar mejores fotos aprovechando la luz del sol. Lo recomiendo a full además de que tiene varias propuesta que puedan ser acordes a lo que uno esté buscando. Gracias Santi, la rompiste toda y nos quedaron hermosos recuerdos del primer cumpleañito de Ciro."',
    caption2: "Guido, padre de Ciro",
  },
  {
    url: "/assets/img/Test1.JPG",
    caption: `"La experiencia con Santi fue excelente. Hicimos unas fotos en exteriores para la banda. La jornada fue muy buena y productiva. Santi es un tipo muy criterioso y nos sentimos muy cómodos. La experiencia fue muy buena, cubrió las expectativas de todos los que somos parte de la banda."`,
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
    <button className="lg:ml-[115px] ml-4" style={{ ...buttonStyle }}>
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
    <div className="slide-container my-10" id="testimonios">
      <Slide autoplay={false} {...properties} indicators={true}>
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

              {/* TEXTO PRINCIPAL Y SECUNDARIO */}
              <h3 className="text-fondoBlanco font-merriwather font-normal text-2xl md:text-4xl absolute left-4 lg:left-40 top-14 md:top-24">
                Testimonios
              </h3>
              <p className="text-fondoBlanco font-nunitoSans italic font-light text-[10px] sm:text-sm md:text-2xl lg:text-2xl absolute md:mx-36 lg:mx-56 mx-20">
                {slideImage.caption}
              </p>
              <p className="text-fondoBlanco font-nunitoSans font-light text-sm md:text-2xl lg:text-2xl absolute md:mx-36 lg:mx-64 mx-20 bottom-16 md:bottom-36">
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
