import Image from "next/image";
import bannerPhotos from "../../../../public/images/services/photography/banner/bannerphoto.jpg";


const ServiceBanner = () => {
    return (
        <section className="relative">
            <Image src={bannerPhotos} alt="banner" className="object-cover max-h-[300px]" />
            <div className="absolute inset-0 top-50 right-50"><h3>texto</h3><button>click me</button></div>
        </section>
    );
}

export default ServiceBanner;