"use client";

import Image from "next/image";
import img01 from "../../../public/images/services/photography/img01.jpg";
import img02 from "../../../public/images/services/photography/img02.jpg";
import img03 from "../../../public/images/services/photography/img03.jpg";
import img04 from "../../../public/images/services/photography/img04.jpg";
import img05 from "../../../public/images/services/photography/img05.jpg";
import img06 from "../../../public/images/services/photography/img06.jpg";
import img07 from "../../../public/images/services/photography/img07.jpg";
import flecha from "../Icon/Group.png";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import Link from "next/link";
//md:max-h-[600px] lg:max-h-[800px]
const ServicesPage = () => {
  return (
    <div className="mx-4">
      <section className="xl:max-w-screen-xl mb-16  mx-auto md:mb-36 text-fondoBlanco  md:px-0 mt-10">
        <div className="md:grid md:grid-cols-12 md:grid-rows-4 md:gap-3 mb-3 items-stretch overflow-hidden lg:h-[941px]">
          <div className="md:col-span-5 md:col-start- lg:h-[941px]">
            <Link
              href="/fotografia/lorena"
              className="block md:col-span-2 relative h-full w-full group "
              id="0"
            >
              <div
                className="texto_image w-full absolute bottom-1/2 top-2/4  z-30 h-40 flex flex-row text-center px-10
            justify-between items-center cursor-pointer transition-all duration-200 bg-black/50"
              >
                <div className="md:group-hover:pr-20  w-full  transition-all duration-300">
                  <h3 className="text-3xl md:mb-4 italic">Retrato Artístico</h3>
                  <h2 className="text-2xl font-thin">Moda subte</h2>
                </div>
                <Image
                  src={flecha}
                  alt=""
                  className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                ></Image>
              </div>
              <Image
                src={img01}
                alt="asd"
                className="object-cover  h-full max-h-[600px] md:max-h-[600px] lg:max-h-[800px] xl:max-h-[928px] rounded-2xl  group-hover:brightness-50"
              />
            </Link>
          </div>

          <div className="md:col-span-7 md:row-start-1 h-full lg:max-h-[458px]" >
          <Link
              href="/fotografia/aura-gin"
              className="relative pt-3 md:pt-0 group"
              id="1"
            >
              <div className="texto_image bottom-0  rounded-b-2xl absolute z-30 w-full h-40 flex flex-row text-center justify-between px-10 items-center cursor-pointer transition-all duration-200 bg-black/50">
                <div className="group-hover:pr-20  w-full  transition-all duration-300">
                  <h3 className="text-3xl md:mb-4 italic">
                    Fotografía comercial
                  </h3>
                  <h2 className="text-2xl font-thin">Aura Gin</h2>
                </div>
                <Image
                  src={flecha}
                  alt=""
                  className="invert opacity-0 group-hover:opacity-100 transition-all duration-300"
                ></Image>
              </div>
              <Image
                src={img02}
                alt="asd"
                className="object-cover h-full rounded-b-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[464px] rounded-2xl group-hover:brightness-50"
              />
            </Link>

          </div>

          <div className="md:col-span-7 md:row-start-3 h-full grid grid-rows-2 gap-3  lg:max-h-[458px]">
            <Link
              href="/fotografia/pasado-pisado"
              className="relative group"
              id="2"
            >
              <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 px-10 w-full h-40 flex  flex-row text-center justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
                <div className="group-hover:pr-20  w-full  transition-all duration-300">
                  <h3 className="text-3xl md:mb-4 italic">
                    Fotografía artística
                  </h3>
                  <h2 className="text-2xl font-thin">Pasado Pisado</h2>
                </div>
                <Image
                  src={flecha}
                  alt=""
                  className="invert opacity-0 group-hover:opacity-100 transition-all duration-300"
                ></Image>
              </div>
              <Image
                src={img03}
                alt="asd"
                className="object-cover h-full rounded-b-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[464px]  group-hover:brightness-50"
              />
            </Link>
          </div>
        </div>

        <Link
          href="/fotografia/jettatore"
          className="mb-3 flex md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] relative group"
          id="3"
        >
          <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-40 flex flex-row text-center px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
            <div className="group-hover:pr-20  w-full  transition-all duration-300">
              <h3 className="text-3xl mb-4 italic">
                Cobertura de evento artístico
              </h3>
              <h2 className="text-2xl font-thin">Jettatore - Obra teatral</h2>
            </div>
            <Image
              src={flecha}
              alt=""
              className="invert opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></Image>
          </div>
          <Image
            src={img04}
            alt="asd"
            className="object-cover rounded-b-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] object-top rounded-2xl  group-hover:brightness-50"
          />
        </Link>

        <div className="md:grid md:grid-cols-2 md:gap-3 mb-3 mt-3 md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] ">
          <Link
            href="/fotografia/one-bar"
            className="col-span-1 md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] relative pb-3 md:pb-0 group"
          >
            <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-40 flex  flex-row text-center px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
              <div className="group-hover:pr-20  w-full  transition-all duration-300">
                <h3 className="text-3xl mb-4 italic">
                  Cobertura de evento social
                </h3>
                <h2 className="text-2xl font-thin">One-bar</h2>
              </div>
              <Image
                src={flecha}
                alt=""
                className="invert opacity-0 group-hover:opacity-100 transition-all duration-300"
              ></Image>
            </div>
            <Image
              src={img05}
              alt="asds"
              className="object-cover rounded-b-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] object-top rounded-2xl  group-hover:brightness-50"
            />
          </Link>
          <Link
            href="/fotografia/mas-que-uno"
            className="col-span-1 h-full relative group"
          >
            <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-40 flex flex-row text-center px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
              <div className="group-hover:pr-20  w-full  transition-all duration-300">
                <h3 className="text-3xl mb-4 italic">
                  Cobertura de evento artístico
                </h3>
                <h2 className="text-2xl font-thin">Más que uno</h2>
              </div>
              <Image
                src={flecha}
                alt=""
                className="invert opacity-0 group-hover:opacity-100 transition-all duration-300"
              ></Image>
            </div>
            <Image
              src={img06}
              alt="asds"
              className="object-cover h-full rounded-b-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] rounded-2xl  group-hover:brightness-50"
            />
          </Link>
        </div>
        <Link
          href="/fotografia/mas-que-uno"
          className="mb-3 flex relative group"
        >
          <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-40 flex flex-row text-center px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
            <div className="group-hover:pr-20  w-full  transition-all duration-300">
              <h3 className="text-3xl mb-4 italic">
                Cobertura de evento artístico
              </h3>
              <h2 className="text-2xl font-thin">Más que uno</h2>
            </div>
            <Image
              src={flecha}
              alt=""
              className="invert opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></Image>
          </div>
          <Image
            src={img07}
            alt="asds"
            className="object-cover rounded-b-2xl md:max-h-[300px] lg:max-h-[400px] xl:max-h-[456px] object-top rounded-2xl group-hover:brightness-50 transition-all duration-300"
          />
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
