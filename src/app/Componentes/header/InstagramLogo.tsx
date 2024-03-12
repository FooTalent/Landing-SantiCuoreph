import Image from "next/image";

const InstagramLogo = (props : { size: number}) => {

    const {size} = props;

    return (
        <Image
            src="./images/navbar/instagram.svg"
            alt="Instagram logo"
            width={size}
            height={size}
        />
    );
};

export default InstagramLogo;