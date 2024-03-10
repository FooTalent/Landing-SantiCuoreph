'use client'
import Linkedin from '../Icon/Linkedin'
import Instagram from '../Icon/Instagram'
import { useEffect, useState} from "react"
import Link from 'next/link'
const Footer = () => {

    //Para evitar problemas de Hydration se espera a que cargue el componente antes de ser mostrado
    const [isLoaded, setIsloaded] = useState(false)

    useEffect(() => {
        setIsloaded(true)
    },[])

    if(!isLoaded) return null
 
    return(
    <>
    <footer className="bg-fondoNegro p-8 pb-10 text-principal text-sm">
    <div className="flex flex-col items-start justify-center gap-10 md:gap-0 md:flex-row md:justify-between md:items-center">
    <div className="flex flex-col gap-2">
    <picture className="flex gap-4">   {/*Semantica Picture en los iconos para evitar uso excesivo de DIVs*/}
    <Instagram />
    <Linkedin /> 
    {/*SVG Instagram y Linkedin*/}
    </picture>
    <address className='not-italic'> {/*semantica address para contenedor correo eletronico, la etiqueta pone por defecto el texto en
    italic, por lo cual, especifico not-italic*/}
        <a href="mailto:Santiph@gmail.com">Mail: Santiph@gmail.com</a>   {/*Mailto para clickear y abrir app correos*/}
    </address>
    </div>
    <nav>   {/*Nav en footer ya que es un apartado de enlaces de navegacion*/}
        <ul className="flex flex-col gap-1.5">
            <li><Link href={""}>Acerca de</Link></li>
            <li><Link href={""}>Contacto</Link></li>
            <li><Link href={""}>Aviso Legal</Link></li>
        </ul>
    </nav>
    </div>
    <p className="text-center pt-6">Santi cuore Copyright 2024</p>
</footer>

       </> 
    )
}

export default Footer