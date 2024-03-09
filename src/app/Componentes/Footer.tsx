'use client'
import Image from "next/image"
import Instagram from '../../../public/multimedia/instagram.png'
const Footer = () => {
    return(
       <>
       <footer className="bg-fondoNegro flex flex-col justify-center items-center text-center text-fondoBlanco gap-3 p-10 overflow-hidden">
        <h4 className="text-lg">¡Trabajemos Juntos!</h4>
        <picture className="flex flex flex-row justify-center items-center gap-4">
        <hr  className="min-w-[500px]"></hr>
        <a href="">
        <Image
        src={Instagram}
        width={32}
        height={32}
        alt="Instagram"
        >
            
        </Image>
        </a>
        <a href="">
        <Image
        src={Instagram}
        width={32}
        height={32}
        alt="Instagram"
        >
            
        </Image>
        </a>
        <a href="">
        <Image
        src={Instagram}
        width={32}
        height={32}
        alt="Instagram"
        >
            
        </Image>   
        </a>
        <hr className="min-w-[500px]"></hr>
        </picture>
        <p>Prohibida la reproducción total o parcial de este sitio y su contenido.</p>
        <p className="font-bold">SantiCuorePH Copyright &copy; 2024. Buenos Aires, Argentina.</p>
       </footer>
       </> 
    )
}

export default Footer