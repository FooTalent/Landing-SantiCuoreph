import Image from "next/image";
import bannerPhotos from "../../../../public/images/services/photography/banner/bannerphoto.jpg";
import Link from "next/link";

type ServiceBannerProps = {
    textBanner: string
}

const ServiceBanner = (props : ServiceBannerProps) => {
    return (
        <section className="relative">
            <Image src={bannerPhotos} alt="banner" className="object-cover max-h-[500px] w-full" />
            <div className="absolute inset-0 xl:max-w-screen-xl mx-auto items-center justify-between flex flex-wrap lg:flex-nowrap">
                <div>
                <h3 className="text-lg mx-4 lg:text-[43px] text-fondoBlanco">{props.textBanner}</h3>
                </div>
                <div>
                <Link href="/contacto" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl py-[0.5em] px-[2em] bg-principal rounded-full merriwather font-semibold text-fondoNegro hover:bg-principalHover hover:font-bold">
                    Contactame          
                </Link>  
                </div>
                </div>
        </section>
    );
}

export default ServiceBanner;