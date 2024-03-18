import Image from "next/image";

type InfoPhotoParams = {
    title: string,
    subtitle: string,
    imageUrl: string,
}

const InfoPhoto = (params : InfoPhotoParams) => {
    return(
        <Image src={params.imageUrl} alt="image" fill={true}/>
    );
}

export default InfoPhoto;