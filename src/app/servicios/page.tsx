"use client";

import Image from "next/image";
import img01 from "../../../public/images/services/photography/img01.jpg";
import img02 from "../../../public/images/services/photography/img02.jpeg";
import img03 from "../../../public/images/services/photography/img03.jpg";
import img04 from "../../../public/images/services/photography/img04.jpg";
import img05 from "../../../public/images/services/photography/img05.jpg";
import img06 from "../../../public/images/services/photography/img06.jpg";
import img07 from "../../../public/images/services/photography/img07.jpg";
import flecha from "../Icon/Group.png";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="mx-4">
      <section className="xl:max-w-screen-xl mb-16  mx-auto md:mb-36 text-fondoBlanco  md:px-0 mt-6 md:mt-10">
        <div className="md:grid md:grid-cols-12 md:grid-rows-4 md:gap-3 mb-3 items-stretch overflow-hidden md:h-[800px] lg:h-[941px] space-y-4 md:space-y-0">
          <div className="md:col-span-5 md:col-start-8 h-[600px] md:h-[800px] lg:h-[941px] rounded-2xl">
            <Link
              href="/fotografia/moda-subte"
              className="block md:col-span-2 relative h-full w-full group "
              id="0"
            >
              <div
                className="texto_image w-full absolute bottom-1/2 top-2/4  z-30 h-28 md:h-40 flex flex-row text-center px-4 sm:px-10
            justify-between items-center cursor-pointer transition-all duration-200 bg-black/50"
              >
                <div className="md:group-hover:pr-10  w-full  transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl md:mb-4 italic">Retrato Artístico</h3>
                  <h2 className="text-md sm:text-2xl font-thin">Moda subte</h2>
                </div>
                <Image
                  src={flecha}
                  alt=""
                  className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 w-[40px]"
                ></Image>
              </div>
              <Image
                src={img01}
                alt="asd"
                className="object-cover h-[600px] md:h-[800px] lg:h-[941px] rounded-2xl  group-hover:brightness-50"
              />
            </Link>
          </div>

          <div className="md:col-span-7 md:row-start-1 md:row-span-2 flex">
            <Link
              href="/fotografia/aura-gin"
              className="relative md:pt-0 group"
              id="1"
            >
              <div className="texto_image bottom-0 rounded-b-2xl absolute z-30 w-full h-1/3 MD:h-40 flex flex-row text-center justify-between px-4 sm:px-10 items-center cursor-pointer transition-all duration-200 bg-black/50">
                <div className="md:group-hover:pr-5 w-full  transition-all duration-300">
                <h3 className="text-2xl md:text-3xl md:pb-2 lg:mb-4 italic">
                    Fotografía comercial
                  </h3>
                  <h2 className="text-md md:text-2xl font-thin">AURA Gin</h2>
                </div>
                <Image
                  src={flecha}
                  alt=""
                  className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 w-[40px]"
                ></Image>
              </div>
              <Image
                src={img02}
                alt="asd"
                className="object-cover rounded-b-2xl rounded-2xl group-hover:brightness-50 h-[235px] sm:h-[300px] md:h-[395px] lg:h-[465px]"
              />
            </Link>
          </div>

          <div className="md:col-span-7 md:row-start-3 md:row-span-2 flex">
            <Link
              href="/fotografia/pasado-pisado"
              className="relative group"
              id="2"
            >
              <div className="texto_image bottom-0 rounded-b-2xl absolute z-30 px-10 w-full h-1/3 md:h-40 flex  flex-row text-center justify-between px-4 sm:px-10 items-center cursor-pointer transition-all duration-200 bg-black/50">
                <div className="md:group-hover:pr-10  w-full  transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl md:mb-4 italic">
                    Fotografía artística
                  </h3>
                  <h2 className="text-md md:text-2xl font-thin">Pasado Pisado</h2>
                </div>
                <Image
                  src={flecha}
                  alt=""
                  className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 w-[40px]"
                ></Image>
              </div>
              <Image
                src={img03}
                alt="asd"
                className="object-cover rounded-b-2xl h-full rounded-2xl group-hover:brightness-50 h-[235px] sm:h-[300px] md:h-[400px] lg:h-[465px]"
              />
            </Link>
          </div>
        </div>
        <div >
          <Link
            href="/fotografia/jettatore"
            className="mb-3 block h-[138px] sm:h-[250px] md:h-[300px] lg:h-[434px] relative group "
            id="3"
          >
            <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-1/2 md:h-1/3 flex flex-row text-center px-4 sm:px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
              <div className="md:group-hover:pr-10  w-full  transition-all duration-300">
                <h3 className="text-2xl md:text-3xl md:mb-4 italic">
                  Evento artístico
                </h3>
                <h2 className="text-md md:text-2xl font-thin">Jettatore - Obra teatral</h2>
              </div>
              <Image
                src={flecha}
                alt=""
                className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 w-[40px]"
              ></Image>
            </div>
            <Image
              src={img04}
              alt="asd"
              className="object-cover rounded-b-2xl h-full h-[138px] sm:h-[250px] md:h-[300px] lg:h-[434px] object-top rounded-2xl  group-hover:brightness-50"
            />
          </Link>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-3 mb-3 mt-3">
          <Link
            href="/fotografia/one-bar"
            className="h-[291px] sm:h-[320px] lg:h-[458px] relative pb-3 md:pb-0 group flex mb-3 md:mb-0"
          >
            <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-1/3 md:h-40 flex  flex-row text-center px-4 sm:px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
              <div className="md:group-hover:pr-5  w-full  transition-all duration-300">
                <h3 className="text-2xl md:text-3xl md:mb-4 italic">
                  Evento social
                </h3>
                <h2 className="text-md md:text-2xl  font-thin">One-bar</h2>
              </div>
              <Image
                src={flecha}
                alt=""
                className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 w-[40px]"
              ></Image>
            </div>
            <Image
              src={img05}
              alt="asds"
              className="object-cover rounded-b-2xl h-[291px] sm:h-[320px] lg:h-[458px] md:object-top rounded-2xl  group-hover:brightness-50"
              style={{objectPosition: "50% 10%"}}
            />
          </Link>
          <Link
            href="/fotografia/mas-que-uno"
            className="col-span-1 h-[267px] sm:h-[300px] md:h-[320px] lg:h-[458px] relative group flex"
          >
            <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-1/3 md:h-40 flex flex-row text-center px-4 sm:px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
              <div className="md:group-hover:pr-3  w-full  transition-all duration-300">
                <h3 className="text-2xl md:text-3xl md:mb-4 italic">
                  Evento artístico
                </h3>
                <h2 className="text-md md:text-2xl font-thin">Más que uno: 10 años</h2>
              </div>
              <Image
                src={flecha}
                alt=""
                className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 w-[40px]"
              ></Image>
            </div>
            <Image
              src={img06}
              alt="asds"
              className="object-cover rounded-b-2xl object-top h-[267px] sm:h-[300px] md:h-[320px] lg:h-[458px] rounded-2xl  group-hover:brightness-50"
            />
          </Link>
        </div>
        <Link
          href="/fotografia/toch"
          className="mb-3 flex relative group"
        >
          <div className="texto_image absolute bottom-0 rounded-b-2xl z-30 w-full h-[69px] sm:h-[80px] md:h-40 flex flex-row gap-2 text-center px-4 sm:px-10 justify-between items-center cursor-pointer transition-all duration-200 bg-black/50">
            <div className="md:group-hover:pr-10  w-full  transition-all duration-300">
              <h3 className="text-2xl md:text-3xl md:mb-4 italic">
                Evento artístico
              </h3>
              <h2 className="text-md md:text-2xl font-thin">TOCH en Camping Palermo</h2>
            </div>
            <Image
              src={flecha}
              alt=""
              className="invert md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 w-[40px]"
            ></Image>
          </div>
          <Image
            src={img07}
            alt="asds"
            className="object-cover rounded-b-2xl h-[138px] sm:h-[200px] md:h-[300px] lg:h-[434px] rounded-2xl group-hover:brightness-50 transition-all duration-300"
            style={{objectPosition: "50% 40%"}}
          />
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
