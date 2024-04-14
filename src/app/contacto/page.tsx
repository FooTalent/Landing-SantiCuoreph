"use client";
import Link from "next/link";
import React from "react";
import CustomButton from "../Componentes/CustomButton";
import Images from "./components/Images";
const page = () => {
  return (
    <>
      <section className="xl:w-[1236px] pr-10  md:px-0 mx-4  pb-[24px] text-3xl xl:mx-auto pt-4 xl:pt-0   border-b-[2px] border-black text-fondoNegro xl:text-[48px]  mb-[1em]">
        <h1 className="pt-[2.4em]  font-semibold font-merriwather ">
          Contacto
        </h1>
      </section>
      <section
        className="h-[513px] mx-4 xl:w-[1236px] xl:h-[594px] bg-no-repeat  pt-2 space-y-10  font-merriwather z-0 xl:max-w-screen-xl relative xl:mx-auto rounded-2xl "
        style={{ backgroundImage: "url('/images/aboutme/bgcontact.png')" }}
      >
        <div className="absolute  -z-10 top-0 bg-black/30 h-full w-full rounded-2xl"></div>
        <div className="xl:flex xl:flex-row flex-col flex z-20  px-5 xl:px-40 ">
          <h3 className="text-[16px] w-full pb-10 xl:pb-0 font-merriwather  font-thin  xl:font-bold text-center xl:text-left xl:text-[36px] my-auto  text-white">
            Contenido fotográfico <br className="hidden xl:block" /> y
            audiovisual de calidad,
            <br className="hidden xl:block" /> a un mensaje de distancia
          </h3>
          <img
            src="/assets/img/fondoContact1.jpeg"
            alt="bg"
            className="xl:w-[245px] w-[200px] mx-auto rounded-full"
          />
        </div>
        <div className="px-5 xl:px-40 text-center space-y-10">
          <p className="text-white font-nunitoSans font-thin xl:font-bold  text-[16px] xl:text-[28px]">
            Solicitá hoy tu presupuesto completando el siguiente formulario
            Tendrás una respuesta en un plazo de 48 horas
          </p>
          <Link
            href={"/contacto/formulario"}
            className="bg-principal font-merriwather hidden xl:block xl:mx-auto py-3 px-7 hover:bg-principalHover ease-in-out transition-all text-[20px] rounded-full font-bold text-black w-max"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </section>
      <section className="xl:w-[1236px]  xl:pt-5 font-merriwather mx-auto">
        <div className="w-full flex mt-5 xl:hidden ">
          <Link
            href={"/contacto/formulario"}
            className="bg-principal p-10 mx-auto text-[20px]  xl:hidden   py-1 px-11 hover:bg-principalHover ease-in-out transition-all text-2xl rounded-full font-bold text-black"
          >
            Solicitar presupuesto
          </Link>
        </div>
        <div className="xl:bg-white xl:border font-nunitoSans xl:h-[288px] rounded-2xl space-y-14 xl:p-10 p-5">
          <h3 className="text-center text-[20px]  font-semibold  xl:text-[28px] ">
            ¿Tenés material de video propio? <br /> ¿Necesitás alguien que lo
            edite y genere contenido de impacto para tus redes?
          </h3>
          <div className="flex xl:text-3xl flex-col xl:flex-row text-xl font-bold xl:flex justify-evenly">
            <p className="text-center font-bold xl:text-[36px] my-auto">
              Escribime a{" "}
            </p>
            <a href="mailto:santicuroeph@gmail.com" className="text-center ">
              <CustomButton
                title="santicuoreph@gmail.com"
                styles="xl:bg-slate-100  xl:h-[84px] xl:w-[437px] transition-all ease-in-out duration-300 xl:border-none px-4 py-4 w-max mx-auto xl:mx-0 border xl:shadow-none shadow-md bg-white rounded-[20px] font-bold hover:bg-principalHover"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="xl:w-[1236px]   xl:py-5 font-merriwather mx-auto ">
        <div className="xl:bg-white  font-nunitoSans xl:h-[221px] xl:flex xl:py-10 xl:border flex rounded-2xl ">
          <div className="mx-auto xl:flex   xl:space-x-52">
            <h3 className="text-center text-2xl xl:text-[36px] pb-10 xl:pb-0 font-bold my-auto">
              ¡Contactame a través de mis redes!
            </h3>
            <div className="flex text-3xl pb-10 xl:pb-0 xl:space-x-16 font-bold justify-evenly">
              <Images />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
