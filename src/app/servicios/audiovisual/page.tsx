"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const buttonStyle = {
  width: "50px",
  background: "none",
  border: "0px",
};
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="lg:mr-40 mr-4"
        style={{ ...buttonStyle }}
      >
        <div className="bg-slider xl:w-14 w-10 h-10 xl:h-14 flex justify-center items-center hover:bg-sliderHover rounded-full object-cover">
          <Image
          className="w-[15px] h-[17px] xl:w-20 xl:h-2"
            src="/assets/img/ArrowRight.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </button>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="lg:mr-40 -ml-8 "
        style={{ ...buttonStyle }}
      >
        <div className="bg-slider xl:w-14 w-10 h-10 xl:h-14 flex justify-center items-center hover:bg-sliderHover rounded-full">
          <Image
          className="w-[15px] h-[17px] xl:w-20 xl:h-20"
            src="/assets/img/ArrowLeft.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </button>
    </div>
  );
}
const Audiovisual = () => {
  const videoRef1: any = useRef<any>(null);
  const videoRef2: any = useRef<any>(null);
  const videoRef3: any = useRef<any>(null);
  const videoRef4: any = useRef<any>(null);
  const videoRef5: any = useRef<any>(null);

  const [carrousel, setCarrousel] = useState<boolean>(false);
  let sliderRef: any = useRef<Slider>(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (carrouselRef.current && !carrouselRef.current.contains(e.target)) {
        document.body.style.overflow = "auto";
        setCarrousel(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleOpenModal = (to: number) => {
    sliderRef.slickGoTo(to),
      setCarrousel(true),
      (document.body.style.overflow = "hidden");
  };
  const carrouselRef: any = useRef<HTMLDivElement>();
  return (
    <section
      className={
        carrousel
          ? `backdrop-blur-xl mb-36 bg-black/15 h-screen flex fixed top-0 right-0 left-0 bottom-0 z-[9999]`
          : "mb-36"
      }
    >
      <div
        ref={carrouselRef}
        className={
          carrousel
            ? ` w-[70%] md:w-[60%]  lg:w-[50%] mx-auto mt-10 `
            : "hidden"
        }
      >
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="/videos/-df52-4356-853b-f2fcf5ce094e.mp4"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className=" text-2xl xl:text-[48px]  italic">Spasio Kinesio</h1>
              <p className="text-fondoBlanco font-nunitoSans font-thin text-xl md:text-[30px]">
                Creación de video para redes
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="/videos/-aa9d-4724-bd79-6eef7dc35203.mp4"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className="  text-2xl xl:text-[48px]  italic">
                TOCH en Camping de Palermo
              </h1>
              <p className="text-fondoBlanco font-nunitoSans font-thin  text-xl md:text-[30px]">
                Creación de video para redes
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="/videos/Backstage Microcentro ALTA.mp4"
            />

            <div className="m-auto text-center text-fondoBlanco">
              <h1 className="  text-2xl xl:text-[48px]  italic">
                Backstage de fotos Pasado Pisado{" "}
              </h1>
              <p className="font-nunitoSans font-thin  text-xl md:text-[30px]">
                Creación de video para redes{" "}
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="/videos/Sala de Exposiciones.mp4"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className="  text-2xl xl:text-[48px]  italic">
                Exposición en Centro Cultural Kirchner{" "}
              </h1>
              <p className="font-nunitoSans font-thin  text-xl md:text-[30px]">
                Edición de video{" "}
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              onMouseEnter={(e) => e}
              muted
              controls
              src="/videos/Biró.mp4"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className="  text-2xl xl:text-[48px]  italic">José Ladislao Biró </h1>
              <p className="font-nunitoSans font-thin  text-xl md:text-[30px]">
                Edición de video{" "}
              </p>
            </div>
          </div>
          <div className=" h-[450px]">
            <div className=" h-full  flex">
              <div className="space-y-20 m-auto flex flex-col">
                <p className="merriwather text-2xl text-center italic text-white">
                  Reservemos una cita!
                </p>
                <div>
                  <Link
                    href="/contacto"
                    className="text-xl transition-all ease-in-out sm:text-2xl md:text-[40px] py-[0.5em] px-[2em] md:px-[81px] md:py-[17px] bg-principal rounded-full merriwather font-semibold text-fondoNegro hover:bg-principalHover hover:font-bold"
                  >
                    Contactame
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {!carrousel && (
        <div
          className={
            "gap-y-2 xl:max-w-screen-xl  px-5 lg:px-0 mx-auto flex flex-col"
          }
        >
          <div className="flex-col mt-10 lg:flex space-y-2  lg:space-y-0 lg:flex-row gap-x-2 font-merriwather italic text-fondoBlanco">
            <div
              onMouseEnter={() => videoRef1.current.play()}
              onMouseLeave={() => videoRef1.current.pause()}
              className="relative cursor-pointer"
            >
              <video
                ref={videoRef1}
                className="
                h-[656.92px]                
                xl:h-[1344px] rounded-2xl object-cover  w-full"
                loop
                muted
                src="/videos/-df52-4356-853b-f2fcf5ce094e.mp4"
              />
              <div
                onClick={() => {
                  handleOpenModal(0);
                }}
                className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
              >
                <div className="m-auto">
                  <h1 className=" text-[48px]  italic">Spasio Kinesio</h1>
                  <p className="text-fondoBlanco font-nunitoSans font-thin text-[30px]">
                    Creación de video para redes
                  </p>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => videoRef2.current.play()}
              onMouseLeave={() => videoRef2.current.pause()}
              className="relative cursor-pointer"
            >
              <video
                ref={videoRef2}
                className="h-[656.92px]                
                xl:h-[1344px] rounded-2xl object-cover  w-full"
                loop
                muted
                src="/videos/-aa9d-4724-bd79-6eef7dc35203.mp4"
              />
              <div
                onClick={() => handleOpenModal(1)}
                className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
              >
                <div className="m-auto">
                  <h1 className=" text-[48px]  italic">
                    TOCH en Camping de Palermo
                  </h1>
                  <p className="text-fondoBlanco font-nunitoSans font-thin text-[30px]">
                    Creación de video para redes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col space-y-2  lg:space-y-0 lg:flex lg:flex-row gap-x-2">
            <div
              onMouseEnter={() => videoRef3.current.play()}
              onMouseLeave={() => videoRef3.current.pause()}
              className="relative w-full lg:flex lg:w-1/2 text-fondoBlanco cursor-pointer"
            >
              <video
                ref={videoRef3}
                className="h-[656.92px]                
                xl:h-[1344px] rounded-2xl object-cover  w-full"
                loop
                muted
                src="/videos/Backstage Microcentro ALTA.mp4"
              />
              <div
                onClick={() => handleOpenModal(2)}
                className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
              >
                <div className="m-auto">
                  <h1 className=" text-[48px]  italic">
                    Backstage de fotos Pasado Pisado{" "}
                  </h1>
                  <p className="font-nunitoSans font-thin text-[30px]">
                    Creación de video para redes{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 gap-y-2 flex flex-col">
              <div
                onMouseEnter={() => videoRef4.current.play()}
                onMouseLeave={() => videoRef4.current.pause()}
                className="relative h-1/2 text-fondoBlanco cursor-pointer"
              >
                <video
                  ref={videoRef4}
                  className=" object-cover rounded-2xl h-full w-full "
                  loop
                  muted
                  src="/videos/Sala de Exposiciones.mp4"
                />
                <div
                  onClick={() => handleOpenModal(3)}
                  className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
                >
                  <div className="m-auto">
                    <h1 className="text-xl xl:text-[48px]  italic">
                      Exposición en Centro Cultural Kirchner{" "}
                    </h1>
                    <p className="font-nunitoSans font-thin text-[20px] xl:text-[30px]">
                      Edición de video{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={() => videoRef5.current.play()}
                onMouseLeave={() => videoRef5.current.pause()}
                className="relative h-1/2 text-fondoBlanco cursor-pointer"
              >
                <video
                  ref={videoRef5}
                  className=" object-cover rounded-2xl h-full w-full"
                  loop
                  muted
                  src="/videos/Biró.mp4"
                />
                <div
                  onClick={() => handleOpenModal(4)}
                  className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
                >
                  <div className="m-auto">
                    <h1 className=" text-xl xl:text-[48px]  italic">
                      José Ladislao Biró{" "}
                    </h1>
                    <p className="text-[20px] font-nunitoSans font-thin xl:text-[30px]">
                      Edición de video{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Audiovisual;
