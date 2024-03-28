"use client"

import Image from "next/image";
import img01 from "../../../public/images/services/photography/img01.jpg";
import img02 from "../../../public/images/services/photography/img02.jpg";
import img03 from "../../../public/images/services/photography/img03.jpg";
import img04 from "../../../public/images/services/photography/img04.jpg";
import img05 from "../../../public/images/services/photography/img05.jpg";
import img06 from "../../../public/images/services/photography/img06.jpg";
import img07 from "../../../public/images/services/photography/img07.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import Link from "next/link";


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

const ServicesPage = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)

  const openModal = (e: React.MouseEvent<HTMLDivElement>) => {
    let index = Number(e.currentTarget.id)
    setIndex(index)
    setOpen(true)
  }

  const handleDefaultIndex = (e: React.MouseEvent<HTMLDivElement>) => {
    let index = Number(e.currentTarget.id)
    setIndex(index)
  }

  const images = [
    {
      url: "/images/services/photography/img01.jpg"
    },
    {
      url: "/images/services/photography/img02.jpg"
    },
    {
      url: "/images/services/photography/img03.jpg"
    },
    {
      url: "/images/services/photography/img04.jpg"
    },
    {
      url: "/images/services/photography/img05.jpg"
    },
    {
      url: "/images/services/photography/img06.jpg"
    },
  ]
  

  return (
    <>
    <div className={`${open ? "" : "hidden"}`}>
    <section className="slide-container backdrop-blur-xl bg-black/15 absolute w-screen h-screen top-0 right-0 left-0 bottom-0 z-50">
      <Slide {...properties} defaultIndex={index}>
        {
          images.map((image, idx) => {
            return <div key={idx} className="relative w-screen h-screen">
              <Image src={image.url} fill={true} className="max-w-screen-xl mx-auto h-[300px] py-5 object-contain" alt="asd"/>
            </div>
          })
        }
      </Slide>
    </section>
    </div>

    <section className="xl:max-w-screen-xl mx-auto mb-16 md:mb-36 text-fondoBlanco mx-4 md:px-0">
      <div className="md:grid md:grid-cols-5 md:gap-3 mb-3 items-stretch overflow-hidden md:max-h-[600px] lg:max-h-[800px] xl:max-h-[928px]">
        <Link href="/fotografia/lorena" className="col-span-2 relative h-full w-full" id="0">
          <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">Lorena</h2>
            <h3 className="text-3xl font-thin">Retrato Artístico</h3>
          </div>
          <Image
            src={img01}
            alt="asd"
            className="object-cover rounded-xl h-full md:max-h-[600px] lg:max-h-[800px] xl:max-h-[928px]"
          />
        </Link>
        <div className="col-span-3 grid grid-rows-2 gap-3 md:max-h-[600px] lg:max-h-[800px] xl:max-h-[928px]">
          <Link href="/fotografia/aura-gin" className="relative pt-3 md:pt-0" id="1">
          <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">Aura Gin</h2>
            <h3 className="text-3xl font-thin">Fotografía comercial</h3>
          </div>
            <Image
              src={img02}
              alt="asd"
              className="object-cover h-full rounded-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[464px]"
            />
          </Link>
          <div className="relative" id="2">
          <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">Pasado Pisado</h2>
            <h3 className="text-3xl font-thin">Fotografía artística</h3>
          </div>
            <Image
              src={img03}
              alt="asd"
              className="object-cover h-full rounded-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[464px]"
            />
          </div>
        </div>
      </div>

      <div className="mb-3 md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] relative" id="3">
      <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">Jettatore - Obra teatral</h2>
            <h3 className="text-3xl font-thin">Covertura de evento artístico</h3>
          </div>
        <Image
          src={img04}
          alt="asd"
          className="object-cover rounded-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] object-top"
        />
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-3 mb-3 md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px]">
        <div className="col-span-1 md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] relative pb-3 md:pb-0">
        <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">One-bar</h2>
            <h3 className="text-3xl font-thin">Cobertura de evento artístico</h3>
          </div>
          <Image
            src={img05}
            alt="asds"
            className="object-cover rounded-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] object-top"
          />
        </div>
        <div className="col-span-1 h-full relative">
        <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">Más que uno</h2>
            <h3 className="text-3xl font-thin">Cobertura de evento artístico</h3>
          </div>
          <Image
            src={img06}
            alt="asds"
            className="object-cover h-full rounded-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px]"
          />
        </div>
      </div>
      <div className="mb-3 md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] relative">
      <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">Más que uno</h2>
            <h3 className="text-3xl font-thin">Cobertura de evento artístico</h3>
          </div>
        <Image
          src={img07}
          alt="asds"
          className="object-cover rounded-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] object-top"
        />
      </div>
    </section>
    </>
  );
};

export default ServicesPage;
