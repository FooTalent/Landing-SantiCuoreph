import Image from "next/image";
import Link from "next/link";

type CallToActionProps = {
    header: string,
    imageUrl: string,
    buttonText: string,
    imageSize: number
}

const CallToAction = (props: CallToActionProps) => {

    const {header, imageUrl, buttonText, imageSize} = props;

    return (
        <section className="mx-auto text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[42px]  flex flex-col justify-center items-center gap-[1.25em] md:gap-[1.25em] relative">
            <p className="text-center font-bold merriwather">{header}</p>
            <picture className="relative w-3/12 min-w-[150px] max-w-[410px] aspect-square" >
            <Image
            src={imageUrl}
            fill={true}
            alt="Picture of Santi Cuore"
            />
            </picture>
                <Link href="/contacto" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl py-[0.5em] px-[2em] bg-principal rounded-full merriwather font-semibold text-fondoNegro hover:bg-principalHover hover:font-bold">
                    Contactame          
                </Link>                

                
        </section>
    )
}

export default CallToAction;