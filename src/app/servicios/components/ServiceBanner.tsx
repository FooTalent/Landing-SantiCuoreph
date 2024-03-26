"use client"

import Image, { StaticImageData } from 'next/image';
import { Fade } from "react-slideshow-image"

//"/../../../../public/images/services/photography/banner/banner01.jpg",

const ServiceBanner = () => {

    const images = [
        {
            url: "/images/services/photography/banner/banner01.jpg",
            caption: "Texto una imagen"
        },
        {
            url: "/images/services/photography/banner/banner02.jpg",
            caption: "Texto segunda imagen"
        }

    ]
 
  return (
    <section>
        <Fade
            indicators={false}
            arrows={false}
            autoplay={true}
            infinite={true}
            canSwipe={false}
            transitionDuration={5000}
        >
            <div className='each-slide'>
                <div>
                    <Image src={images[0].url}
                                    width="0"
                                    height="0"
                                    sizes="100%"
                                    className="w-screen h-screen object-cover"
                    alt='Imagen 01' />
                </div>
            </div>
            <div className='each-slide'>
                <div>
                    <Image src={images[1].url} alt='Imagen 02'
                                    width="0"
                                    height="0"
                                    sizes="100%"
                                    className="w-screen h-screen object-cover" />
                </div>
            </div>
        </Fade>
    </section>
  );
}

export default ServiceBanner;