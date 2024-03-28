import santi from '../../../public/images/aboutme/Foto Sanit 2.webp'
import santiCuorePH from '../../../public/images/aboutme/08_FotografiaSantiagoGarcia.webp'
import santiago from '../../../public/images/aboutme/Foto Santi.webp'
import Image from 'next/image';
import background1 from '../../../public/images/aboutme/image 28.jpg'
import background2 from '../../../public/images/aboutme/background2.jpg'
import background3 from '../../../public/images/aboutme/MAS QUE UNO BAJA-51 1.jpg'
import ServiceBanner from '../servicios/components/ServiceBanner'
import { url } from 'inspector';
const AboutMe = () => {
    return (
        <>
        <section className="max-w-[1296px] m-auto merriwather text-fondoNegro nunitoSans">
        <h1 className="text-5xl lg:text-6xl font-semibold ml-10 lg:ml-20 mb-5 lg:mb-10 pt-32">Sobre mí</h1>
        <hr className="max-w-[1296px] mx-8 h-1 bg-black" />
            <div className="SantiagoGarcia gap-x-20 items-start m-8 lg:grid-cols-2 lg:grid-rows-1">
                <picture className="fotosanti row-span-1 lg:col-span-1">
                    <Image
                    src={santi}
                    width={613}
                    height={757}
                    alt='santiCuorepH'
                    className=' mt-10 lg:mt-16'
                    >
                    </Image>
                </picture>
                <div className='santiagoSaluda lg:col-span-2'>
                <h2 className='text-2xl lg:text-4xl font-semibold  mt-6 lg:mb-14 text-center lg:hidden'>¡Hola!  Soy Santiago García.</h2>
                </div>
                <div className='sobremi__text text-start mt-0 lg:mt-28 text-xl lg:text-2xl max-w-[590px] py-14 lg:p-0 lg:col-span-1' >
                <h2 className='text-2xl lg:text-4xl font-semibold  mt-6 lg:mb-14 text-start  hidden lg:flex'>¡Hola! <br />  Soy Santiago García.</h2>
                        <p className='mb-14'>Soy una persona divertida, creativa, apasionada. Y soy el corazón detrás de <b>SantiCuore PH.</b> Actualmente vivo en la vibrante ciudad de Buenos Aires, Argentina.</p>
                        <p>El año 2013 fue el punto de partida en que empezó mi recorrido en el fascinante mundo de la fotografía. Estudié y luego me recibí como Técnico Superior en Fotografía Profesional en el ISEC.</p>
                    </div>
            </div>
        </section>
        <picture className=''>
        <div className='bg-fixed  h-screen bg-background1' >
        </div>
        </picture>
        <section className='sobremi__Santi w-full grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 h-full place-content-center  nunitoSans text-xl lg:text-2xl max-w-[590px] max-w-fit m-auto'>
                        <p className='pocodespues my-16 sm:my-16 m-8  block lg:hidden'>Poco tiempo después, en 2016, creé <b>SantiCuore PH.</b></p>  
                        <p className='pocodespues mt-10 mb-16  m-8  flex lg:hidden'>Este emprendimiento surgió como resultado de una búsqueda de expresión artística. Comenzó inicialmente como un anhelo de capturar la belleza y la emoción detrás de cada instante, y con el objetivo de llevar a un nivel profesional mi creatividad y mi pasión por la fotografía</p>
                        <div className='hidden lg:flex flex-col m-8'>
                        <p className='pocodespues m-16'>Poco tiempo después, en 2016, creé <b>SantiCuore PH.</b></p>  
                        <p className='pocodespues m-16 '>Este emprendimiento surgió como resultado de una búsqueda de expresión artística. Comenzó inicialmente como un anhelo de capturar la belleza y la emoción detrás de cada instante, y con el objetivo de llevar a un nivel profesional mi creatividad y mi pasión por la fotografía</p>
                        </div>
        <picture className="flex justify-center santiCamera m-8 lg:m-0 ">
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
        <div className='bg-fixed  h-screen flex items-center justify-center bg-background2'  >
            <h2 className='text-xl text-center md:text-2xl lg:text-5xl font-bold text-white m-4'>Creando recuerdos, construyendo historias...</h2>
        </div>
        <section className='w-full flex flex-col items-start justify-center max-w-[1100px] my-36 p-10  m-auto text-xl lg:text-2xl gap-20 nunitoSans'>
            <p>Estoy convencido de que una buena presencia en redes es fundamental para cualquier marca. Por eso también me encargo de crear contenido impactante y de calidad para distintas empresas y organizaciones. </p>
            <p className='font-bold'>Con mi trabajo ayudo a potenciar y fortalecer la imagen de distintas marcas a través de la creación de contenido para redes como TikTok e Instagram.</p>
        </section>
        <div className='bg-fixed  h-screen bg-background3'  >
        </div>
        <section className='w-full grid grid-cols-1 lg:grid-cols-2  nunitoSans max-w-[590px] lg:max-w-fit m-auto  mb-96 lg:mb-0 text-lg text-start'>
        <div className=' flex flex-col lg:hidden gap-10 mx-8  mt-10'>
        <p >Mi enfoque va más allá de simplemente capturar imágenes y editar videos:</p>  
        <p className='font-bold'>Me encargo de crear recuerdos y construir historias que perduren en el tiempo</p>
        </div>
        <picture className="flex justify-center m-8 lg:m-0">
                    <Image
                    src={santiago}
                    width={678}
                    height={792}
                    alt='santiCuorepH'
                    className=''
                    >
                    </Image>
                </picture>
        <div className='sobremi__text mx-8'>
            <div className='text-balance flex flex-col gap-10 mt-0'>
                        <p className='hidden lg:block mt-10'>Mi enfoque va más allá de simplemente capturar imágenes y editar videos:</p>  
                        <p className='hidden lg:block font-bold'>Me encargo de crear recuerdos y construir historias que perduren en el tiempo</p>
                        <p >Ahora que ya sabés un poco mas sobre mí...</p>
                        <p className='font-bold'>¡Es hora de conocernos!</p>
                    </div>
            </div>
        </section>
        <ServiceBanner />
        </>
     
    );
};

export default AboutMe;