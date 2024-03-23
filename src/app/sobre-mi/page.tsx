import santi from '../../../public/images/aboutme/05_FotografiaSantiagoGarcia.jpeg'
import santiCuorePH from '../../../public/images/aboutme/08_FotografiaSantiagoGarcia.jpeg'
import santiago from '../../../public/images/aboutme/Foto Santi.jpg'
import Image from 'next/image';
import background1 from '../../../public/images/aboutme/image 28.jpg'
import background2 from '../../../public/images/aboutme/background2.jpg'
import background3 from '../../../public/images/aboutme/MAS QUE UNO BAJA-51 1.jpg'
import ServiceBanner from '../servicios/components/ServiceBanner';
const AboutMe = () => {
    return (
        <>
        <section className="max-w-[1296px] m-auto merriwather text-fondoNegro">
        <h1 className=" text-6xl font-semibold ml-20 mb-10 pt-40">Sobre mí</h1>
        <hr className="w-full h-1 bg-black" />
            <div className="Santiago García flex  flex-col lg:flex-row gap-20">
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
                <div className='sobremi__text text-start mt-28 text-2xl max-w-[560px]'>
                        <h2 className='text-4xl font-semibold mb-14'>!Hola! <br/> Soy Santiago García.</h2>
                        <p className='mb-14'>Soy una persona divertida, creativa, apasionada. Y soy el corazón detrás de <b>SantiCuore PH.</b> Actualmente vivo en la vibrante ciudad de Buenos Aires, Argentina.</p>
                        <p>El año 2013 fue el punto de partida en que empezó mi recorrido en el fascinante mundo de la fotografía. Estudié y luego me recibí como Técnico Superior en Fotografía Profesional en el ISEC.</p>
                    </div>
            </div>
        </section>
        <picture className=''>
        <Image
            src={background1}
            width={3050}
            height={600}
            alt='bar'
            className='h-full'
            >
            </Image>
        </picture>
        <section className='w-full grid grid-cols-1 lg:grid-cols-2  h-full items-center'>
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
        <Image
            src={background2}
            width={3050}
            height={600}
            alt='banda'
            className='static h-full'
            >
            </Image>
        <section className='w-full flex flex-col items-start justify-center max-w-[1100px] my-36  m-auto text-3xl gap-20'>
            <p>Estoy convencido de que una buena presencia en redes es fundamental para cualquier marca. Por eso también me encargo de crear contenido impactante y de calidad para distintas empresas y organizaciones. </p>
            <p>Con mi trabajo ayudo a potenciar y fortalecer la imagen de distintas marcas a través de la creación de contenido para redes como TikTok e Instagram.</p>
        </section>
        <picture className=''>
        <Image
            src={background3}
            width={3050}
            height={600}
            alt='bar'
            className='h-full'
            >
            </Image>
        </picture>
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
            <div className='text-2xl text-balance'>
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