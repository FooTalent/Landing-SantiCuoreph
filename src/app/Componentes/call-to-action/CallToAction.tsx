import Image from "next/image";
import CustomButton from "../CustomButton";

type CallToActionProps = {
    header: string,
    imageUrl: string,
    buttonText: string,
    imageSize: number
}
//w-1/5 max-w-[410px] min-w-[200px]

const CallToAction = (props: CallToActionProps) => {

    const {header, imageUrl, buttonText, imageSize} = props;

    return (
        <section className="mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl flex flex-col justify-center items-center gap-[1.25em] md:gap-[1.25em] relative">
            <p className="text-center font-bold merriwather">{header}</p>
            <div className="relative w-3/12 min-w-[150px] max-w-[410px] aspect-square" >
            <Image
            src={imageUrl}
            fill={true}
            alt="Picture of Santi Cuore"
            />
            </div>
            <CustomButton
                title="Contactame"
                styles="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-[0.5em] px-[2em] bg-principal rounded-full merriwather font-bold text-fondoNegro" />
        </section>
    )
}

export default CallToAction;