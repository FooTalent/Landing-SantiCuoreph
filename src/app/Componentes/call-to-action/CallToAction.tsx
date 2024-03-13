import Image from "next/image";
import CustomButton from "../CustomButton";

type CallToActionProps = {
    header: string,
    imageUrl: string,
    buttonText: string,
    imageSize: number
}

const CallToAction = (props: CallToActionProps) => {

    const {header, imageUrl, buttonText, imageSize} = props;

    return (
        <section className="flex flex-col justify-center items-center gap-[85px] relative">
            <p className="text-6xl font-bold merriwather">{header}</p>
            <div className="relative w-3/12 max-w-[410px] min-w-[200px] aspect-square" >
            <Image
            src={imageUrl}
            fill={true}
            alt="Picture of Santi Cuore"
            />
            </div>
            <CustomButton
                title="Contactame"
                styles="py-4 bg-principal rounded-full merriwather font-bold text-fondoNegro text-4xl w-3/12 max-w-[410px] min-w-[200px]" />
        </section>
    )
}

export default CallToAction;