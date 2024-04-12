import CustomButton from "../CustomButton";
import santi from '../../../../public/images/aboutme/05_FotografiaSantiagoGarcia.webp'
import Image from "next/image";
import Link from "next/link";
import CustomFlecha from "./CustomFlecha";
const AboutMe = () => {
    return (
        <>
       <section className="Sobremi lg:grid-cols-2 lg:grid-rows-1 gap-8 lg:gap-2 my-20 lg:my-40 max-w-[1000px] m-auto">
            <picture className="Sobremi__retrato  h-[350px]  sm:w-[420px] lg:h-[480px] m-2 row-span-2 flex">
                <Image
                src={santi}
                width={420}
                height={520}
                alt="SantiCuroePH"
                className="object-cover w-full h-full rounded-lg border-solid border-principal border-2">

                </Image>
            </picture>
            <div className="quiensoy lg:row-span-1 Merriweather w-fit max-w-sm ml-4">
            <h2 className="nunitoSans font-bold text-4xl mb-5">Sobre mí</h2>
            <p className="text-balance text-xl">¡Hola! Soy Santiago García, creador de <b>SantiCuorePH</b>, y soy...</p>
            </div>
            <div className="sobremi__texto Merriweather w-fit max-w-sm ml-3">
                <CustomFlecha description="Fotógrafo profesional" />
                <CustomFlecha description="Editor de video" />
                <CustomFlecha description="Creador de contenido audiovisual" />
                <CustomFlecha description="Reelmaker" />
                <p className="text-xl font-semibold my-10">¿Querés saber más sobre mí?</p>
                <div className="button flex justify-center items-center">
                <Link href={"/sobre-mi"}>
                <CustomButton title="Saber más" styles="py-2 mt-4 px-12 bg-principal rounded-full merriwather font-semibold hover:font-extrabold text-fondoNegro text-xl 2lg:text-4xl hover:bg-principalHover " />
                </Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutMe;