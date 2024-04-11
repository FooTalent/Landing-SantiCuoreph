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
  images: imageInfo[];
};

const sessionInfo: SessionInfoType[] = [
  {
    title: "Lorena",
    subtitle: "Retrato artístico",
    path: "lorena",
    images: [
      {
        url: "/images/lorena/lor01.jpg",
        alt: "Lorena"
      },
      {
        url: "/images/lorena/lor02.jpg",
        alt: "Lorena 02"
      },
      {
        url: "/images/lorena/lor03.jpg",
        alt: "Lorena 03"
      },
      {
        url: "/images/lorena/lor04.jpg",
        alt: "Lorena 04"
      },
      {
        url: "/images/lorena/lor05.jpg",
        alt: "Lorena 05"
      },

    ],
  },
  {
    title: "AURA Gin",
    subtitle: "Fotografía comercial",
    path: "aura-gin",
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
    images: [
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
  }
];

const SessionPage = ({ params }: { params: { session: string } }) => {
  const path = params.session;
  const session = sessionInfo.find((session) => session.path === path);
  const [showModal, setShowModal] = useState(false);

  if (session) {
    return (
      <div className="bg-fondoNegro">
        <section className=" pt-32 max-w-screen-xl mx-auto">
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

          <div className="session-container min-w-[320px] pb-20">
            {session.images.map((image, idx) => {
              return (
                <div
                  key={idx}
                  className="image-container max-w-fit"
                  onClick={() => setShowModal(true)}
                >
                  <Image src={image.url} width={500} height={1000} alt={image.alt} className="max-w-[320px] sm:max-w-fit" />
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
