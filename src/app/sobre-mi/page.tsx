import santi from "../../../public/images/aboutme/FotografiaSantiagoGarcia.jpeg";
import santiCuorePH from "../../../public/images/aboutme/2_FotografiaSantiagoGarcia.jpeg";
import santiago from "../../../public/images/aboutme/image 103.jpg";
import Image from "next/image";
import ServiceBanner from "../servicios/components/ServiceBanner";
const AboutMe = () => {
  return (
    <>
      <section className="xl:w-[1236px] pr-10  md:px-0 mx-4  pb-[24px] text-3xl xl:mx-auto pt-4 xl:pt-0   border-b-[2px] border-black text-fondoNegro md:text-3xl xl:text-[48px]  mb-[1em]">
        <h1 className="pt-[2.4em]  font-semibold font-merriwather ">
          Sobre mí
        </h1>
      </section>
      <section className="xl:w-[1236px] m-auto merriwather text-fondoNegro nunitoSans">
        <div className="SantiagoGarcia gap-x-20 items-start m-6 mt-0 lg:grid-cols-2 lg:grid-rows-1">
          <picture className="fotosanti row-span-1 lg:col-span-1">
            <Image
              src={santi}
              width={613}
              height={757}
              alt="santiCuorepH"
              className=" mt-10 lg:mt-16"
            ></Image>
          </picture>
          <div className="santiagoSaluda lg:col-span-2">
            <h2 className="text-2xl lg:text-4xl font-semibold  mt-6 lg:mb-14 text-center lg:hidden">
              ¡Hola! Soy Santiago García.
            </h2>
          </div>
          <div className="sobremi__text text-start mt-0 lg:mt-28 text-xl lg:text-2xl max-w-[590px] py-14 lg:p-0 lg:col-span-1">
            <h2 className="text-2xl lg:text-4xl font-semibold  mt-6 lg:mb-14 text-start  hidden lg:flex">
              ¡Hola! <br /> Soy Santiago García.
            </h2>
            <p className="mb-14">
              Soy una persona divertida, creativa, apasionada. Y soy el corazón
              detrás de <b>SantiCuore PH.</b> Actualmente vivo en la vibrante
              ciudad de Buenos Aires, Argentina.
            </p>
            <p>
              El año 2013 fue el punto de partida en que empezó mi recorrido en
              el fascinante mundo de la fotografía. Estudié y luego me recibí
              como Técnico Superior en Fotografía Profesional en el ISEC.
            </p>
          </div>
        </div>
      </section>
      <picture className="">
        <div className="bg-fixed  h-screen bg-background1 bg-cover bg-center"></div>
      </picture>
      <section className="sobremi__Santi grid grid-cols-1 lg:flex h-full place-content-center  nunitoSans  sm:text-[20px] lg:text-[21px] m-auto">
        <p className="pocodespues my-16 sm:my-16 m-6  block lg:hidden">
          Poco tiempo después, en 2016, creé <b>SantiCuore PH.</b>
        </p>
        <p className="pocodespues mt-10 mb-16  m-6  flex lg:hidden">
          Este emprendimiento surgió como resultado de una búsqueda de expresión
          artística. Comenzó inicialmente como un anhelo de capturar la belleza
          y la emoción detrás de cada instante, y con el objetivo de llevar a un
          nivel profesional mi creatividad y mi pasión por la fotografía.
        </p>
        <div className="hidden lg:flex flex-col m-6">
          <p className="pocodespues m-16 mr-0">
            Poco tiempo después, en 2016, creé <b>SantiCuore PH.</b>
          </p>
          <p className="pocodespues m-16 ">
            Este emprendimiento surgió como resultado de una búsqueda de
            expresión artística. Comenzó inicialmente como un anhelo de capturar
            la belleza y la emoción detrás de cada instante, y con el objetivo
            de llevar a un nivel profesional mi creatividad y mi pasión por la
            fotografía.
          </p>
        </div>
        <picture className="flex justify-center santiCamera m-6 lg:m-0 sm:min-w-[550px]">
          <Image
            src={santiCuorePH}
            width={678}
            height={792}
            alt="santiCuorepH"
            className="object-cover"
          ></Image>
        </picture>
      </section>
      <div className="bg-fixed  h-screen flex items-center justify-center bg-background2 bg-cover bg-top">
        <h2 className="text-xl text-center md:text-2xl lg:text-5xl font-bold text-white m-4">
          Creando recuerdos, construyendo historias...
        </h2>
      </div>
      <section className="w-full flex flex-col items-start justify-center max-w-[1100px] my-36 p-10  m-auto text-xl lg:text-2xl gap-20 nunitoSans">
        <p>
          Estoy convencido de que una buena presencia en redes es fundamental
          para cualquier marca. Por eso también me encargo de crear contenido
          impactante y de calidad para distintas empresas y organizaciones.{" "}
        </p>
        <p className="font-bold">
          Con mi trabajo ayudo a potenciar y fortalecer la imagen de distintas
          marcas a través de la creación de contenido para redes como TikTok e
          Instagram.
        </p>
      </section>
      <div className="bg-fixed  h-screen bg-background3 bg-cover bg-center"></div>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2  nunitoSans max-w-[590px] lg:max-w-fit m-auto mb-20 lg:mb-0 text-lg text-start">
        <div className=" flex flex-col lg:hidden gap-10 mx-6 mt-10">
          <p>
            Mi enfoque va más allá de simplemente capturar imágenes y editar
            videos:
          </p>
          <p className="font-bold">
            Me encargo de crear recuerdos y construir historias que perduren en
            el tiempo.
          </p>
        </div>
        <picture className="flex justify-center m-6 lg:m-0">
          <Image
            src={santiago}
            width={678}
            height={792}
            alt="santiCuorepH Camera"
            className="max-h-[600px] object-cover"
          ></Image>
        </picture>
        <div className="sobremi__text mx-14">
          <div className="flex flex-col gap-10 mt-16">
            <p className="hidden lg:block mt-10 xl:ml-16">
              Mi enfoque va más allá de simplemente capturar imágenes y editar
              videos:
            </p>
            <p className="hidden lg:block font-bold xl:ml-16">
              Me encargo de crear recuerdos y construir historias que perduren
              en el tiempo.
            </p>
            <div className="flex flex-col gap-10 lg:items-center mt-20">
              <p>Ahora que ya sabés un poco más sobre mí...</p>
              <p className="font-bold">¡Es hora de conocernos!</p>
            </div>
          </div>
        </div>
      </section>
      <ServiceBanner />
    </>
  );
};

export default AboutMe;
