"use client";
import Image from "next/image";
import bannerFotografia from "../../../public/images/banner.jpg";
import Link from "next/link";
const Banner = () => {
  return (
    <>
      <section className="h-max mb-4 space-y-2 font-merriwather text-white  bg-fondoBlanco overflow-hidden relative">
        <Link href={"/servicios"}>
          <div className="absolute p-5 pt-16 right-0 left-0 top-0 z-30 flex h-fit w-fit">
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] lg:ml-20 ml-4  merriwather">
              Fotografía
            </h2>
          </div>
          <div
            className={`relative hover:scale-[1.3] flex w-full h-[500px]  transition-all ease-in-out cursor-pointer   `}
          >
            <Image
              src={bannerFotografia}
              width={4036}
              height={500}
              alt="terraza"
              className="object-cover"
            ></Image>
          </div>
        </Link>
      </section>

      <section className="h-max space-y-2 font-merriwather text-white  bg-fondoBlanco overflow-hidden relative">
        <Link href={"servicios/audiovisual"}>
          <div className="absolute p-5 pt-16 top-0 z-30 flex h-fit w-fit">
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] lg:ml-20 ml-4 merriwather drop-shadow-[0_8px_5px_rgb(0,0,0,0.8)] ">
              Edición Audiovisual
            </h2>
          </div>
          <div
            className={`relative  hover:scale-[1.3]  flex  lg:items-start  w-full h-[500px]   transition-all ease-in-out cursor-pointer `}
          >
            <video
              className="w-full object-cover object-bottom"
              loop
              autoPlay
              muted
              src="/videos/bannerhome.mp4"
            />
          </div>
        </Link>
      </section>
    </>
  );
};

export default Banner;
