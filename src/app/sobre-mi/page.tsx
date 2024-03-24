import santi from '../../../public/images/aboutme/05_FotografiaSantiagoGarcia.jpeg'
import santiCuorePH from '../../../public/images/aboutme/08_FotografiaSantiagoGarcia.jpeg'
import santiago from '../../../public/images/aboutme/Foto Santi.jpg'
import Image from 'next/image';
import background1 from '../../../public/images/aboutme/image 28.jpg'
import background2 from '../../../public/images/aboutme/background2.jpg'
import background3 from '../../../public/images/aboutme/MAS QUE UNO BAJA-51 1.jpg'
import ServiceBanner from '../servicios/components/ServiceBanner';
import { url } from 'inspector';
const AboutMe = () => {
    return (
        <>
        <section className="max-w-[1296px] m-auto merriwather text-fondoNegro">
        <h1 className=" text-6xl font-semibold ml-10 lg:ml-20 mb-10 pt-40">Sobre mí</h1>
        <hr className="w-full h-1 bg-black" />
            <div className="Santiago García flex  flex-col lg:flex-row gap-20 items-center">
                <picture className="">
                    <Image
                    src={santi}
                    width={613}
                    height={757}
                    alt='santiCuorepH'
                    className='mt-16'
                    >
                    </Image>
                </picture>
                <div className='sobremi__text text-start mt-28 text-xl lg:text-2xl max-w-[560px] p-14 lg:p-0' >
                        <h2 className='text-2xl lg:text-4xl font-semibold mb-14'>!Hola! <br/> Soy Santiago García.</h2>
                        <p className='mb-14'>Soy una persona divertida, creativa, apasionada. Y soy el corazón detrás de <b>SantiCuore PH.</b> Actualmente vivo en la vibrante ciudad de Buenos Aires, Argentina.</p>
                        <p>El año 2013 fue el punto de partida en que empezó mi recorrido en el fascinante mundo de la fotografía. Estudié y luego me recibí como Técnico Superior en Fotografía Profesional en el ISEC.</p>
                    </div>
            </div>
        </section>
        <picture className=''>
        <div className='bg-fixed  h-screen' style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/c27b/5c0f/8fdee41caef8e3b6412277619e22aa49?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m5LaM8l6KoVNZkN-53Mvl5tDO0K81vHF~NgLk05Rii~D-6ZpZBrxA45NXzXRbQq3QgYJ0jCEwJ449a91A2gkmzp9TyGLGnUHyg~4PmbmAowpSa1-hx97ATEM0O0Vp7z8v~dZ32VwY5qkRpVuluojbgD7sUTeK60l2KcFd923VHPzTlrULeq-o4iTZh24Kqtqentfh8wgjjLmm2u8wxp5MUE2-R1hvYYJXerDH8B~xhYvtXuxHqzhzBTt--75LHgWBeK7BFO0m2WR-P9BygyPB16u~c6mq5ow7GTEXdqFCdgZZUxxuC9j0YdlIJ4cxDOie1ZiOrUomjzIP6fjJqwquA__")'}} >
        </div>
        </picture>
        <section className='w-full grid grid-cols-1 lg:grid-cols-2  h-full items-center '>
        <div className='sobremi__text text-start text-2xl m-20'>
                        <p className='mb-16'>Poco tiempo después, en 2016, creé <b>SantiCuore PH.</b></p>  
                        <p>Este emprendimiento surgió como resultado de una búsqueda de expresión artística. Comenzó inicialmente como un anhelo de capturar la belleza y la emoción detrás de cada instante, y con el objetivo de llevar a un nivel profesional mi creatividad y mi pasión por la fotografía</p>
                    </div>
        <picture className="flex justify-end">
                    <Image
                    src={santiCuorePH}
                    width={678}
                    height={792}
                    alt='santiCuorepH'
                    className=''
                    >
                    </Image>
                </picture>
        </section>
        <div className='bg-fixed  h-screen flex items-center justify-center' style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/827f/269c/11a44fdca6e915dd07ff6f9e58b6c890?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SW7gOwyHh9~nLuuC0Y~ZAdmQxkjN1~vb8mzqgeoSXU8vlQ77uQgdB8XFvg16C6~qeAOOh1zGVDPdO6~uN~LB5lSrKSeAeOb32Jert2U9N30VyRGHFEaxzRv-k9aXCaV1mO7IN7s~jjNmpNXSC8QZ5jE-p~PlOtv72TUaY~AIiUNmKqQQfERC5kCvxaH0I0USHhdbWtghdg--wl72q2YVxc3-dTsthFKnQanMNSolON6Ugy27NJfn5-tF8T1ehGeJAH5Eso5cC9oQCEkyx~agfQmm~5jzAyWyGslsNh9Cbxj9EzX3inCS~IAfI76DCqUg~nswPXlq0AsQQqDKGPKDjg__")'}} >
            <h2 className='text-xl text-center md:text-2xl lg:text-5xl font-bold text-white m-2'>Creando recuerdos, construyendo historias...</h2>
        </div>
        <section className='w-full flex flex-col items-start justify-center max-w-[1100px] my-36 p-10  m-auto text-xl lg:text-3xl gap-20 '>
            <p>Estoy convencido de que una buena presencia en redes es fundamental para cualquier marca. Por eso también me encargo de crear contenido impactante y de calidad para distintas empresas y organizaciones. </p>
            <p>Con mi trabajo ayudo a potenciar y fortalecer la imagen de distintas marcas a través de la creación de contenido para redes como TikTok e Instagram.</p>
        </section>
        <div className='bg-fixed  h-screen' style={{backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/e6c6/ce3f/773d9dc268a1dd97887da3dcec35d2c3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd7UWTGyr66htvt7r-nJ~mVekLu3nx7blC-9aA7XydY6uIz3g5droj2rOAb7ATvv-4YHadS4fxUwXyTvCs8-1QHtQr4N6L57HUE0WwmgterP~YnqSWCdObnCRoXsSPKIxb4FsOYEZbsQ5QGwVDzA31AkBfVNog54Y4OE88ZMO3GzzJxYjR~uaFZjJpKqK4Jrjc9yijH8cUuYrzubhL0yLPlo0K8JQDSaTWkVuQihHEBZ7IT~SVDDQwZm1CGzLojXa05xCwO7R~j1tztzp9WBD7SJNLVMnH~~z3JQG~r5SozjyLWrYRXCiZb7RLDwlIG8wltWzz-pCzNMc0r98huV9g__")'}} >
        </div>
        <section className='w-full grid grid-cols-1 lg:grid-cols-2 h-full items-center'>
        <picture className="flex justify-start">
                    <Image
                    src={santiago}
                    width={678}
                    height={792}
                    alt='santiCuorepH'
                    className=''
                    >
                    </Image>
                </picture>
        <div className='sobremi__text'>
            <div className='text-2xl text-balance m-20'>
                        <p className='mb-16'>Mi enfoque va más allá de simplemente capturar imágenes y editar videos:</p>  
                        <p className='mb-24'>Me encargo de crear recuerdos y construir historias que perduren en el tiempo</p>
                        <p className='mb-24'>Ahora que ya sabés un poco mas sobre mí...</p>
                        <p className='font-bold'>¡Es hora de conocernos!</p>
                    </div>
            </div>
        </section>
        <ServiceBanner  textBanner='Producciones fotográficas de calidad y la mejor cobertura para tus eventos' />
        </>
     
    );
};

export default AboutMe;