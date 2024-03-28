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

type SessionInfoType = {
  title: string;
  subtitle: string;
  path: string;
  images: string[];
};

const sessionInfo: SessionInfoType[] = [
  {
    title: "Lorena",
    subtitle: "Retrato artístico",
    path: "lorena",
    images: [
      "/images/lorena/lor01.jpg",
      "/images/lorena/lor02.jpg",
      "/images/lorena/lor03.jpg",
      "/images/lorena/lor04.jpg",
      "/images/lorena/lor05.jpg",
    ],
  },
  {
    title: "AURA Gin",
    subtitle: "Fotografía comercial",
    path: "aura-gin",
    images: [
      "/images/aura/aura01.jpg",
      "/images/aura/aura02.jpg",
      "/images/aura/aura03.jpg",
      "/images/aura/aura04.jpg",
      "/images/aura/aura05.jpg",
      "/images/aura/aura06.jpg",
      "/images/aura/aura07.jpg",
      "/images/aura/aura08.jpg",
    ],
  },
];

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

          <div className="session-container pb-20">
            {session.images.map((image, idx) => {
              return (
                <div
                  key={idx}
                  className="image-container"
                  onClick={() => setShowModal(true)}
                >
                  <Image src={image} width={600} height={1000} alt="Image" />
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
                                src={image}
                                fill={true}
                                className="max-w-screen-xl mx-auto h-[300px] py-5 object-contain"
                                alt="asd"
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
