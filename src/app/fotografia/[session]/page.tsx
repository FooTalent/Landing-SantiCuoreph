/*
if (sessionEncontrada) {
  console.log(`Sesión encontrada: ${sessionEncontrada.title}`);
} else {
  console.log(`No se encontró ninguna sesión con el path ${pathABuscar}`);
}
*/

"use client";

import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import CloseButton from "./close-btn";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const buttonStyle = {
  width: "50px",
  background: "none",
  border: "0px",
};
const properties = {
  prevArrow: (
    <button className="lg:ml-40 ml-4 " style={{ ...buttonStyle }}>
      <div className="bg-slider w-14 h-14 flex justify-center items-center hover:bg-sliderHover rounded-full">
        <Image src="/assets/img/ArrowLeft.png" alt="" width={20} height={20} />
      </div>
    </button>
  ),
  nextArrow: (
    <button className="lg:mr-40 mr-4" style={{ ...buttonStyle }}>
      <div className="bg-slider w-14 h-14 flex justify-center items-center hover:bg-sliderHover rounded-full object-cover">
        <Image src="/assets/img/ArrowRight.png" alt="" width={20} height={20} />
      </div>
    </button>
  ),
  autoplay: false,
  indicators: false,
};


type imageInfo = {
  url: string,
  alt: string,
}

type SessionInfoType = {
  title: string;
  subtitle: string;
  path: string;
  verticalImage: boolean,
  images: imageInfo[];
};

const sessionInfo: SessionInfoType[] = [
  {
    title: "Moda subte",
    subtitle: "Retrato artístico",
    path: "moda-subte",
    verticalImage: true,
    images: [
      {
        url: "/images/moda/ms01.jpg",
        alt: "Moda subte 01"
      },
      {
        url: "/images/moda/ms02.jpg",
        alt: "Moda subte 02"
      },
      {
        url: "/images/moda/ms03.jpg",
        alt: "Moda subte 03"
      },
      {
        url: "/images/moda/ms04.jpg",
        alt: "Moda subte 04"
      },
      {
        url: "/images/moda/ms05.jpg",
        alt: "Moda subte 05"
      },
      {
        url: "/images/moda/ms06.jpg",
        alt: "Moda subte 06"
      },
      {
        url: "/images/moda/ms07.jpg",
        alt: "Moda subte 07"
      },
      {
        url: "/images/moda/ms08.jpg",
        alt: "Moda subte 08"
      }
    ]
  },
  {
    title: "AURA Gin",
    subtitle: "Fotografía comercial",
    path: "aura-gin",
    verticalImage: true,
    images: [
      {
        url: "/images/aura/aura01.jpg",
        alt: "Aura gin"
      },
      {
        url: "/images/aura/aura02.jpg",
        alt: "Aura gin 02"
      },
      {
        url: "/images/aura/aura03.jpg",
        alt: "Aura gin 03"
      },
      {
        url: "/images/aura/aura04.jpg",
        alt: "Aura gin 04"
      },
      {
        url: "/images/aura/aura05.jpg",
        alt: "Aura gin 05"
      },
      {
        url: "/images/aura/aura06.jpg",
        alt: "Aura gin 06"
      },
      {
        url: "/images/aura/aura07.jpg",
        alt: "Aura gin 07"
      },
      {
        url: "/images/aura/aura08.jpg",
        alt: "Aura gin 08"
      },
    ],
  },
  {
    title: "Pasado Pisado",
    subtitle: "Fotografía artística",
    path: "pasado-pisado",
    verticalImage: false,
    images: [
      {
        url: "/images/pasado-pisado/pp01.jpg",
        alt: "Pasado pisado"
      },
      {
        url: "/images/pasado-pisado/pp02.jpg",
        alt: "Pasado pisado 02"
      },
      {
        url: "/images/pasado-pisado/pp03.jpg",
        alt: "Pasado pisado 03"
      },
      {
        url: "/images/pasado-pisado/pp04.jpg",
        alt: "Pasado pisado 04"
      },
      {
        url: "/images/pasado-pisado/pp05.jpg",
        alt: "Pasado pisado 05"
      },
      {
        url: "/images/pasado-pisado/pp06.jpg",
        alt: "Pasado pisado 06"
      },
      {
        url: "/images/pasado-pisado/pp07.jpg",
        alt: "Pasado pisado 07"
      },
      {
        url: "/images/pasado-pisado/pp08.jpg",
        alt: "Pasado pisado 08"
      },
    ]
  },
  {
    title: "Jettatore - Obra teatral",
    subtitle: "Cobertura de evento artístico",
    path: "jettatore",
    verticalImage: false,
    images: [
      {
        url: "/images/jettatore/jt01.jpg",
        alt: "Jettatore 01"
      },
      {
        url: "/images/jettatore/jt02.jpg",
        alt: "Jettatore 02"
      },
      {
        url: "/images/jettatore/jt03.jpg",
        alt: "Jettatore 03"
      },
      {
        url: "/images/jettatore/jt04.jpg",
        alt: "Jettatore 04"
      },
      {
        url: "/images/jettatore/jt05.jpg",
        alt: "Jettatore 05"
      },
      {
        url: "/images/jettatore/jt06.jpg",
        alt: "Jettatore 06"
      },
      {
        url: "/images/jettatore/jt07.jpg",
        alt: "Jettatore 07"
      },
      {
        url: "/images/jettatore/jt08.jpg",
        alt: "Jettatore 08"
      },
    ]
  },
  {
    title: "One - Bar",
    subtitle: "Cobertura de evento social",
    path: "one-bar",
    verticalImage: true,
    images: [
      {
        url: "/images/one-bar/ob01.jpg",
        alt: "One Bar"
      },
      {
        url: "/images/one-bar/ob02.jpg",
        alt: "One Bar 02"
      },
      {
        url: "/images/one-bar/ob03.jpg",
        alt: "One Bar 03"
      },
      {
        url: "/images/one-bar/ob04.jpg",
        alt: "One Bar 04"
      },
      {
        url: "/images/one-bar/ob05.jpg",
        alt: "One Bar 05"
      },
      {
        url: "/images/one-bar/ob06.jpg",
        alt: "One Bar 06"
      },
      {
        url: "/images/one-bar/ob07.jpg",
        alt: "One Bar 07"
      },
      {
        url: "/images/one-bar/ob08.jpg",
        alt: "One Bar 08"
      },
    ]
  },
  {
    title: "Más que uno",
    subtitle: "Cobertura de evento artístico",
    path: "mas-que-uno",
    verticalImage: false,
    images: [
      {
        url: "/images/mas-que-uno/mu01.jpg",
        alt: "Mas que uno"
      },
      {
        url: "/images/mas-que-uno/mu02.jpg",
        alt: "Mas que uno 02"
      },
      {
        url: "/images/mas-que-uno/mu03.jpg",
        alt: "Mas que uno 03"
      },
      {
        url: "/images/mas-que-uno/mu04.jpg",
        alt: "Mas que uno 04"
      },
      {
        url: "/images/mas-que-uno/mu05.jpg",
        alt: "Mas que uno 05"
      },
      {
        url: "/images/mas-que-uno/mu06.jpg",
        alt: "Mas que uno 06"
      },
      {
        url: "/images/mas-que-uno/mu07.jpg",
        alt: "Mas que uno 07"
      },
      {
        url: "/images/mas-que-uno/mu08.jpg",
        alt: "Mas que uno 08"
      },
    ]
  },
  {
    title: "Cobertura de evento",
    subtitle: "TOCH en Camping Palermo",
    path: "toch",
    verticalImage: false,
    images: [
      {
        url: "/images/toch/to01.jpg",
        alt: "TOCH 01"
      },
      {
        url: "/images/toch/to02.jpg",
        alt: "TOCH 02"
      },
      {
        url: "/images/toch/to03.jpg",
        alt: "TOCH 03"
      },
      {
        url: "/images/toch/to04.jpg",
        alt: "TOCH 04"
      },
      {
        url: "/images/toch/to05.jpg",
        alt: "TOCH 05"
      },
      {
        url: "/images/toch/to06.jpg",
        alt: "TOCH 06"
      },
      {
        url: "/images/toch/to07.jpg",
        alt: "TOCH 07"
      },
      {
        url: "/images/toch/to08.jpg",
        alt: "TOCH 08"
      },
    ]
  }
];
//<Image src={image.url} className={`object-cover ${idx === 2 || idx === 7 ? "object-left" : "object-center"}`} fill alt={image.alt} 
const SessionPage = ({ params }: { params: { session: string } }) => {
  const path = params.session;
  const session = sessionInfo.find((session) => session.path === path);
  const [showModal, setShowModal] = useState(false);

  if (session) {
    return (
      <div className="bg-fondoNegro">
        <section className=" pt-32 xl:max-w-screen-xl mx-auto">
          <div className="flex justify-between">
            <div className="text-fondoBlanco">
              <h1 className="text-5xl merriwather italic font-bold">
                {session.title}
              </h1>
              <h2 className="text-3xl py-8 merriwather font-semibold">
                {session.subtitle}
              </h2>
            </div>
            <div>
              <Link href="/servicios">
                <div className="p-3 hover:rounded-md hover:bg-fondoGris">
                  <CloseButton />
                </div>
              </Link>
            </div>
          </div>

          <div className={`${session.verticalImage ? "session-container-vertical" : "session-container-horizontal"} pb-20 grid`}>
            {session.images.map((image, idx) => {
              return (
                <div
                  key={idx}
                  className={`image-container ${idx}`}
                  onClick={() => setShowModal(true)}
                >
                  <div className={`relative ${session.verticalImage ? "h-[350px] md:h-[430px]" : "h-[200px] xl:h-[315px]"}`}>
                  <Image src={image.url} className={`object-cover`} fill alt={image.alt} 
                    style={{objectPosition: `${idx === 2 || idx===7 ? "20% 50%" : "50% 50%"}`}}
                  />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {showModal ? (
          <>
            <div className="h-screen w-screen fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative">
                {/*content*/}
                <div className="relative flex flex-col w-full outline-none focus:outline-none">
                  {/*header*/}
                  
                    <button
                      className="absolute z-50 end-0 p-4 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                                      <div className="p-3 bg-slider hover:bg-sliderHover rounded-full">
                  <CloseButton />
                </div>
                    </button>
                  
                  <div className="">
                    <section className="slider-container backdrop-blur-xl bg-black/15">
                      <Slide {...properties}>
                        {session.images.map((image, idx) => {
                          return (
                            <div
                              key={idx}
                              className="relative w-screen h-screen"
                            >
                              <Image
                                src={image.url}
                                fill={true}
                                className="max-w-screen-xl mx-auto h-[300px] py-5 object-contain"
                                alt={image.alt}
                              />
                            </div>
                          );
                        })}
                      </Slide>
                    </section>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    );
  }
};

export default SessionPage;
