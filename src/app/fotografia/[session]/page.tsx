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
import { MouseEvent, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import flecha from "../../../../public/images/arrow.png";
import Arrow from "./arrow";
import ArrowNav from "./arrow";
import { useSearchParams } from "next/navigation";

const buttonStyle = {
  width: "50px",
  background: "none",
  border: "0px",
};

type imageInfo = {
  url: string;
  alt: string;
};

type SessionInfoType = {
  title: string;
  subtitle: string;
  path: string;
  verticalImage: boolean;
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
        alt: "Moda subte 01",
      },
      {
        url: "/images/moda/ms02.jpg",
        alt: "Moda subte 02",
      },
      {
        url: "/images/moda/ms03.jpg",
        alt: "Moda subte 03",
      },
      {
        url: "/images/moda/ms04.jpg",
        alt: "Moda subte 04",
      },
      {
        url: "/images/moda/ms05.jpg",
        alt: "Moda subte 05",
      },
      {
        url: "/images/moda/ms06.jpg",
        alt: "Moda subte 06",
      },
      {
        url: "/images/moda/ms07.jpg",
        alt: "Moda subte 07",
      },
      {
        url: "/images/moda/ms08.jpg",
        alt: "Moda subte 08",
      },
    ],
  },
  {
    title: "AURA Gin",
    subtitle: "Fotografía comercial",
    path: "aura-gin",
    verticalImage: true,
    images: [
      {
        url: "/images/aura/aura01.png",
        alt: "Aura gin",
      },
      {
        url: "/images/aura/aura02.png",
        alt: "Aura gin 02",
      },
      {
        url: "/images/aura/aura03.jpg",
        alt: "Aura gin 03",
      },
      {
        url: "/images/aura/aura04.jpg",
        alt: "Aura gin 04",
      },
      {
        url: "/images/aura/aura05.jpg",
        alt: "Aura gin 05",
      },
      {
        url: "/images/aura/aura06.jpg",
        alt: "Aura gin 06",
      },
      {
        url: "/images/aura/aura07.png",
        alt: "Aura gin 07",
      },
      {
        url: "/images/aura/aura08.jpg",
        alt: "Aura gin 08",
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
        alt: "Pasado pisado",
      },
      {
        url: "/images/pasado-pisado/pp02.jpg",
        alt: "Pasado pisado 02",
      },
      {
        url: "/images/pasado-pisado/pp03.jpg",
        alt: "Pasado pisado 03",
      },
      {
        url: "/images/pasado-pisado/pp04.jpg",
        alt: "Pasado pisado 04",
      },
      {
        url: "/images/pasado-pisado/pp05.jpg",
        alt: "Pasado pisado 05",
      },
      {
        url: "/images/pasado-pisado/pp06.jpg",
        alt: "Pasado pisado 06",
      },
      {
        url: "/images/pasado-pisado/pp07.jpg",
        alt: "Pasado pisado 07",
      },
      {
        url: "/images/pasado-pisado/pp08.jpg",
        alt: "Pasado pisado 08",
      },
    ],
  },
  {
    title: "Jettatore - Obra teatral",
    subtitle: "Cobertura de evento artístico",
    path: "jettatore",
    verticalImage: false,
    images: [
      {
        url: "/images/jettatore/jt01.jpg",
        alt: "Jettatore 01",
      },
      {
        url: "/images/jettatore/jt02.jpg",
        alt: "Jettatore 02",
      },
      {
        url: "/images/jettatore/jt03.jpg",
        alt: "Jettatore 03",
      },
      {
        url: "/images/jettatore/jt04.jpg",
        alt: "Jettatore 04",
      },
      {
        url: "/images/jettatore/jt05.jpg",
        alt: "Jettatore 05",
      },
      {
        url: "/images/jettatore/jt06.jpg",
        alt: "Jettatore 06",
      },
      {
        url: "/images/jettatore/jt07.jpg",
        alt: "Jettatore 07",
      },
      {
        url: "/images/jettatore/jt08.jpg",
        alt: "Jettatore 08",
      },
    ],
  },
  {
    title: "One - Bar",
    subtitle: "Cobertura de evento social",
    path: "one-bar",
    verticalImage: true,
    images: [
      {
        url: "/images/one-bar/ob01.jpg",
        alt: "One Bar",
      },
      {
        url: "/images/one-bar/ob02.jpg",
        alt: "One Bar 02",
      },
      {
        url: "/images/one-bar/ob03.jpg",
        alt: "One Bar 03",
      },
      {
        url: "/images/one-bar/ob04.jpg",
        alt: "One Bar 04",
      },
      {
        url: "/images/one-bar/ob05.jpg",
        alt: "One Bar 05",
      },
      {
        url: "/images/one-bar/ob06.jpg",
        alt: "One Bar 06",
      },
      {
        url: "/images/one-bar/ob07.jpg",
        alt: "One Bar 07",
      },
      {
        url: "/images/one-bar/ob08.jpg",
        alt: "One Bar 08",
      },
    ],
  },
  {
    title: "Más que uno",
    subtitle: "Cobertura de evento artístico",
    path: "mas-que-uno",
    verticalImage: false,
    images: [
      {
        url: "/images/mas-que-uno/mu01.jpg",
        alt: "Mas que uno",
      },
      {
        url: "/images/mas-que-uno/mu02.jpg",
        alt: "Mas que uno 02",
      },
      {
        url: "/images/mas-que-uno/mu03.jpg",
        alt: "Mas que uno 03",
      },
      {
        url: "/images/mas-que-uno/mu04.jpg",
        alt: "Mas que uno 04",
      },
      {
        url: "/images/mas-que-uno/mu05.jpg",
        alt: "Mas que uno 05",
      },
      {
        url: "/images/mas-que-uno/mu06.jpg",
        alt: "Mas que uno 06",
      },
      {
        url: "/images/mas-que-uno/mu7.jpg",
        alt: "Mas que uno 07",
      },
      {
        url: "/images/mas-que-uno/mu8.jpg",
        alt: "Mas que uno 08",
      },
    ],
  },
  {
    title: "Cobertura de evento",
    subtitle: "TOCH en Camping Palermo",
    path: "toch",
    verticalImage: false,
    images: [
      {
        url: "/images/toch/to01.jpg",
        alt: "TOCH 01",
      },
      {
        url: "/images/toch/to02.jpg",
        alt: "TOCH 02",
      },
      {
        url: "/images/toch/to03.jpg",
        alt: "TOCH 03",
      },
      {
        url: "/images/toch/to04.jpg",
        alt: "TOCH 04",
      },
      {
        url: "/images/toch/to05.jpg",
        alt: "TOCH 05",
      },
      {
        url: "/images/toch/to06.jpg",
        alt: "TOCH 06",
      },
      {
        url: "/images/toch/to07.jpg",
        alt: "TOCH 07",
      },
      {
        url: "/images/toch/to08.jpg",
        alt: "TOCH 08",
      },
    ],
  },
];

type ModalInfo = {
  open: boolean,
  defaultIndex: number
}

const SessionPage = ({ params }: { params: { session: string } }) => {
  const path = params.session;
  const session = sessionInfo.find((session) => session.path === path);
  const sessionsLength:number = sessionInfo.length
  const currIndex: number = getCurrentIndex(sessionInfo);
  const previousUrl:string = getPreviousUrl();
  const nextUrl: string = getNextUrl();

  const searchParams = useSearchParams()
  const fromHome: boolean = searchParams.has("home");
  console.log("asdas")
  console.log(fromHome)
  const goBackUrl = fromHome ? "/" : "/servicios"

  const [modal, setModal] = useState<ModalInfo>({
    open: false,
    defaultIndex: 0
  })

  const properties = {
    prevArrow: (
      <button className="ml-2 md:ml-4 lg:ml-10 " style={{ ...buttonStyle }}>
        <div className="bg-slider w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] xl:w-14 xl:h-14 flex justify-center items-center hover:bg-sliderHover rounded-full">
          <Image
            src="/assets/img/ArrowLeft.png"
            alt=""
            width={20}
            height={20}
            className="w-[10px] sm:w-[14px]"
          />
        </div>
      </button>
    ),
    nextArrow: (
      <button className="md:mr-4 lg:mr-10" style={{ ...buttonStyle }}>
        <div className="bg-slider w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] xl:w-[50px] xl:h-[50px] flex justify-center items-center hover:bg-sliderHover rounded-full object-cover">
          <Image
            src="/assets/img/ArrowRight.png"
            alt=""
            width={20}
            height={20}
            className="w-[10px] sm:w-[14px]"
          />
        </div>
      </button>
    ),
    autoplay: false,
    indicators: false,
    defaultIndex: modal.defaultIndex,
    transitionDuration: 500
  };

  function getPreviousUrl(): string {
    let goTo: string = "";
    if (currIndex === 0) {
      goTo = sessionInfo[sessionsLength - 1].path
    } else {
      goTo = sessionInfo[currIndex - 1].path
    }
    return "/fotografia/" + goTo;
  }

  function getNextUrl(): string {
    let goTo: string = "";
    if (currIndex === (sessionsLength - 1)) {
      goTo = sessionInfo[0].path;
    } else {
      goTo = sessionInfo[currIndex + 1].path;
    } 

    return "/fotografia/" + goTo;
  }

  function getCurrentIndex(sessions: SessionInfoType[]): number {
    let index: number = 0;

    for (let i = 0; i < sessions.length; i++) {
      if (sessions[i].path === path) {
        index = i;
      }
    }

    return index;
  }

  function handleOpenModal(open: boolean, index: number) {
    setModal({
      open: open,
      defaultIndex: index
    })
  }

  function handleHoverImage(index: number) {
    setModal({...modal, defaultIndex: index})
  }

  if (session) {
    return (
      <div className="bg-fondoNegro">
        <section className="pt-20 xl:pt-32 xl:max-w-screen-xl mx-4 xl:mx-auto">
          <div className="flex justify-between">
            <div className="text-fondoBlanco">
              <h2 className="text-2xl md:text-4xl xl:text-5xl merriwather font-bold">
                {session.subtitle}
              </h2>
              <h3 className="text-xl md:text-3xl pt-1 pb-4 xl:pt-3 xl:pb-6 merriwather font-semibold italic">
                {session.title}
              </h3>
            </div>
            <div>
              <Link href={goBackUrl}>
                <div className="p-3 bg-fondoGris rounded-md md:hover:rounded-md md:hover:bg-fondoGris">
                  <CloseButton />
                </div>
              </Link>
            </div>
          </div>

          <div
            className={`${
              session.verticalImage
                ? "session-container-vertical"
                : "session-container-horizontal"
            } pb-8 grid`}
          >
            {session.images.map((image, idx) => {
              return (
                <div
                  key={idx}
                  className={`image-container ${idx}`}
                  onClick={() => handleOpenModal(true, idx)}
                  onMouseEnter={() => {
                    handleHoverImage(idx)
                  }}
                >
                  <div
                    className={`relative ${
                      session.verticalImage
                        ? "h-[350px] md:h-[430px]"
                        : "h-[280px] md:h-[315px]"
                    } hover:cursor-zoom-in`}
                  >
                    <Image
                      src={image.url}
                      className={`object-cover`}
                      fill
                      alt={image.alt}
                      style={{
                        objectPosition: `${
                          idx === 2 || idx === 7 ? "20% 50%" : "50% 50%"
                        }`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {modal.open ? (
          <>
            <div className="h-screen w-screen fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative">
                <div className="relative flex flex-col w-full outline-none focus:outline-none">
                  <button
                    className="absolute z-50 p-4 sm:p-3 lg:p-4 end-0 md:mr-4 lg:mr-6 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModal({
                      open: false,
                      defaultIndex: 0
                    })}
                  >
                    <div className="p-3 xl:p-4 bg-slider hover:bg-sliderHover rounded-full">
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
                                className="max-w-screen-xl mx-auto md:px-4 py-4 object-contain"
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
        <section className="flex flex-row items-center justify-between max-w-screen-xl mx-4 xl:mx-auto text-principal pb-8 text-base sm:text-xl lg:text-2xl font-bold">
          <div className="hover:cursor-pointer"><Link href={`${previousUrl}${fromHome ? "?home" : ""}`} className="flex gap-2 items-center">
          <ArrowNav size={35} left={true} />
            <h4 className="hidden sm:block">Ver anterior álbum</h4>
            <h4 className="sm:hidden">Anterior</h4>
            </Link></div>
          <div className="hover:cursor-pointer"><Link href={goBackUrl} className="">Volver</Link></div>
          <div className="hover:cursor-pointer"><Link href={`${nextUrl}${fromHome ? "?home" : ""}`} className="flex gap-2 items-center">
            <h4 className="hidden sm:block">Ver siguiente álbum</h4>
            <h4 className="sm:hidden">Siguiente</h4>
            <ArrowNav left={false} size={35} />
            </Link></div>
        </section>
      </div>
    );
  }
};

export default SessionPage;
