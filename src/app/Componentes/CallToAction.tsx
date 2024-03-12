import Image from "next/image";

type CallToActionProps = {
    header: string,
    imageUrl: string,
    buttonText: string,
}

const CallToAction = (props: CallToActionProps) => {

    const {header, imageUrl, buttonText} = props;

    return (
        <section className="flex flex-col justify-center items-center gap-8">
            <p className="text-3xl font-bold">{header}</p>
            <Image
            src={imageUrl}
            width={250}
            height={250}
            alt="Picture of Santi Cuore"
            />
            <button>{buttonText}</button>
        </section>
    )
}

export default CallToAction;