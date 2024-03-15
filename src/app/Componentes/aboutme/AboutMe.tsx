import CustomButton from "../CustomButton";
import santi from '../../../../public/images/aboutme/SantiCuroePH.png'
import Image from "next/image";
import CustomFlecha from "./CustomFlecha";
const AboutMe = () => {
    return (
        <>
        <section className="Sobremi flex flex-col items-center justify-center lg:flex-row lg:items-start gap-20 my-40">
            <picture className="Sobremi__retrato">
                <Image
                src={santi}
                width={380}
                height={480}
                alt="SantiCuroePH">

                </Image>
            </picture>
            <div className="sobremi__texto Merriweather w-fit max-w-sm">
                <h2 className="nunitoSans font-bold text-4xl mb-5">Sobre mí</h2>
                <p className="text-balance text-xl">!Hola! Soy Santiago García, creador de <b>SantiCuorePH</b>, y soy...</p>
                <CustomFlecha description="Fotógrafo profesional" />
                <CustomFlecha description="Editor de video" />
                <CustomFlecha description="Creador de contenido audiovisual" />
                <CustomFlecha description="Realmaker" />
                <p className="text-xl font-semibold my-5">¿Querés saber más sobre mí</p>
                <div className="button flex justify-center items-center">
                <CustomButton title="Saber más" styles="py-2 px-12 bg-principal rounded-full merriwather font-bold text-fondoNegro text-xl 2lg:text-4xl hover:bg-principalHover hover:scale-110" />
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutMe;