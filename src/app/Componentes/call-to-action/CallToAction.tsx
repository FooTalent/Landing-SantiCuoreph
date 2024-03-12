import Image from "next/image";

type CallToActionProps = {
    header: string,
    imageUrl: string,
    buttonText: string,
    imageSize: number
}

const CallToAction = (props: CallToActionProps) => {

    const {header, imageUrl, buttonText, imageSize} = props;

    return (
        <section className="flex flex-col justify-center items-center gap-8">
            <p className="text-3xl font-bold">{header}</p>
            <div className="relative container mw-xl" >
            <Image
            src={imageUrl}
            fill={true}
            alt="Picture of Santi Cuore"
            />
            </div>
            <button>{buttonText}</button>
        </section>
    )
}

export default CallToAction;