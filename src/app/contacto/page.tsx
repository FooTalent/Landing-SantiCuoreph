import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "../Componentes/CustomButton";
const page = () => {
  return (
    <>
      <section className="xl:max-w-screen-xl mx-4 text-4xl xl:mx-auto pt-14 xl:pt-0 pb-8 border-b-4 border-black text-fondoNegro md:text-7xl 2xl:text-8xl pl-[1.5em] mb-[1em]">
        <h1 className="pt-[1.6em] pb-[.4em] font-bold">Contacto</h1>
      </section>
      <section
        className="h-[513px] xl:h-[759px] mx-4 pt-10 space-y-10  font-merriwather z-0 xl:max-w-screen-xl relative xl:mx-auto rounded-2xl "
        style={{ backgroundImage: "url('/images/aboutme/background2.webp')" }}
      >
        <div className="absolute  -z-10 top-0 bg-black/30 h-full w-full rounded-2xl"></div>
        <div className="xl:flex xl:flex-row flex-col flex z-20  px-5 xl:px-40 ">
          <h3 className="text-[16px] pb-10 xl:pb-0 text-center xl:text-left xl:text-[40px] my-auto font-semibold  text-white">
            Contenido fotográfico <br /> y audiovisual de calidad,<br /> a un mensaje de distancia
          </h3>
          <img
            src="/assets/img/fondoContact1.jpeg"
            alt="bg"
            className="xl:w-[400px] w-[200px] mx-auto rounded-full"
          />
        </div>
        <div className="px-5 xl:px-40 text-center space-y-10">
          <p className="text-white  text-[16px] xl:text-2xl">
            Solicitá hoy tu presupuesto completando el siguiente formulario
            Tendrás una respuesta en un plazo de 48 horas
          </p>
          <Link href={"/contacto/formulario"} className="bg-principal hidden xl:block xl:mx-auto py-5 px-7 hover:bg-principalHover ease-in-out transition-all text-3xl rounded-full font-bold text-black w-max">
            Solicitar presupuesto
          </Link>
        </div>
      </section>
      <section className="xl:max-w-screen-xl xl:pt-5 font-merriwather mx-auto">
        <div className="w-full flex mt-5 xl:hidden ">
          <Link href={"/contacto/formulario"} className="bg-principal p-10 mx-auto  xl:hidden   py-3 px-4 hover:bg-principalHover ease-in-out transition-all text-2xl rounded-full font-bold text-black">
            Solicitar presupuesto
          </Link>
        </div>
        <div className="xl:bg-white xl:border  rounded-2xl space-y-14 p-10 ">
          <h3 className="text-center text-[20px] xl:text-2xl ">
            ¿Tenés material de video propio? <br /> ¿Necesitás alguien que lo
            edite y genere contenido de impacto para tus redes?
          </h3>
          <div className="flex xl:text-3xl flex-col xl:flex-row text-xl font-bold xl:flex justify-evenly">
            <p className="text-center ">Escribime a </p>
            <a href="mailto:santicuroeph@gmail.com">
            <CustomButton title="santicuoreph@gmail.com" styles="xl:bg-slate-100  xl:border-none px-4 py-4 w-max mx-auto xl:mx-0 border xl:shadow-none shadow-md bg-white rounded-2xl hover:bg-principalHover"  />
            </a>
          </div>
        </div>
      </section>
      <section className="xl:max-w-screen-xl xl:py-5 font-merriwather mx-auto ">
        <div className="xl:bg-white xl:flex xl:py-10 xl:border flex rounded-2xl ">
          <div className="mx-auto xl:flex  xl:space-x-52">
            <h3 className="text-center text-2xl pb-10 xl:pb-0 font-bold my-auto">
              ¡Contactame a través de mis redes!
            </h3>
            <div className="flex text-3xl pb-10 xl:pb-0 xl:space-x-16 font-bold justify-evenly">
              <Link href="https://www.instagram.com/santicuore.ph/">
                <img src="/images/Property 1=Hover.png" alt="" />
              </Link>
              <Link href={"https://www.instagram.com/santicuore.ph/"}>
                <img src="/images/Instagram Contacto.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
