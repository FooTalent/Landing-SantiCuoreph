"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

/*
<section className="relative">
            <Image src={bannerPhotos} alt="banner" className="object-cover max-h-[500px] w-full" />
            <div className="absolute inset-0 xl:max-w-screen-xl mx-auto items-center justify-between flex flex-wrap lg:flex-nowrap">
                <div>
                <h3 className="text-[43px] text-fondoBlanco font-nunitoSans">{props.textBanner}</h3>
                </div>
                <div>
                <Link href="/contacto" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl py-[0.5em] px-[2em] bg-principal rounded-full merriwather font-semibold text-fondoNegro hover:bg-principalHover hover:font-bold">
                    Contactame          
                </Link>  
                </div>
                </div>
        </section>


                           <Image src={images[0].url}
                                    width="0"
                                    height="0"
                                    sizes="100%"
                                    className="w-screen h-screen object-cover"
                    alt='Imagen 01' />
*/

const ServiceBanner = () => {
  const images = [
    {
      url: "/images/services/photography/banner/banner01.jpg",
      caption:
        "Producciones fotográficas de calidad y la mejor cobertura para tus eventos",
    },
    {
      url: "/images/services/photography/banner/banner02.jpg",
      caption:
        "Contenido audiovisual personalizado y optimizado para plataformas digitales",
    },
  ];

  return (
    <section className="relative">
      <Fade
        indicators={false}
        arrows={false}
        autoplay={true}
        infinite={true}
        canSwipe={false}
        duration={5000}
        transitionDuration={1000}
      >
        {images.map((image, idx) => {
          return (
            <div key={idx} className="each-slide">
              <div className="relative">
                <Image
                  src={image.url}
                  width="0"
                  height="0"
                  sizes="100%"
                  className="w-screen h-[250px] sm:h-[350px] xl:h-[400px] object-cover"
                  alt="Imagen 01"
                />
                <div className="absolute flex flex-col md:flex-row inset-0 px-4 xl:max-w-screen-xl xl:px-0 mx-auto items-center gap-10 sm:gap-16 md:gap-0 pt-16 sm:pt-24 md:pt-0 lg:flex-nowrap xl:gap-20">
                  <div className="">
                    <h3 className="text-xl text-center md:text-left sm:text-3xl xl:text-[43px] text-fondoBlanco font-nunitoSans">
                      {image.caption}
                    </h3>
                  </div>
                  <div className="w-full md:w-1/3">
                    <Link href="/contacto">
                      <h3 className="text-lg sm:text-2xl  bg-principal hover:bg-principalHover hover:font-bold text-fondoNegro text-center rounded-full merriwather font-semibold py-[0.5em] md:px-5 xl:px-[80px]">Contactame</h3>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </section>
  );
};

export default ServiceBanner;
