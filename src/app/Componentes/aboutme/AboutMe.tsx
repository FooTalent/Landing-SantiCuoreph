import CustomButton from "../CustomButton";
import santi from '../../../../public/images/aboutme/05_FotografiaSantiagoGarcia.jpeg'
import Image from "next/image";
import CustomFlecha from "./CustomFlecha";
const AboutMe = () => {
    return (
        <>
        <section className="Sobremi flex flex-col items-center justify-center lg:flex-row lg:items-start gap-20 m-6 my-40">
            <picture className="Sobremi__retrato  h-[350px]  sm-[420px] lg:h-[480px] m-2">
                <Image
                src={santi}
                width={420}
                height={520}
                alt="SantiCuroePH"
                className="object-cover w-full h-full rounded-lg border-solid border-principal border-2">

                </Image>
            </picture>
            <div className="sobremi__texto Merriweather w-fit max-w-[369px]">
                <h2 className="nunitoSans font-bold text-4xl mb-5">Sobre mí</h2>
                <p className="text-balance text-xl">¡Hola! Soy Santiago García, creador de <b>SantiCuorePH</b>, y soy...</p>
                <CustomFlecha description="Fotógrafo profesional" />
                <CustomFlecha description="Editor de video" />
                <CustomFlecha description="Creador de contenido audiovisual" />
                <CustomFlecha description="Reelmaker" />
                <p className="text-xl font-semibold my-10">¿Querés saber más sobre mí?</p>
                <div className="button flex justify-center items-center">
                <CustomButton title="Saber más" styles="py-2 mt-4 px-12 bg-principal rounded-full merriwather font-semibold hover:font-extrabold text-fondoNegro text-xl 2lg:text-4xl hover:bg-principalHover " />
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutMe;