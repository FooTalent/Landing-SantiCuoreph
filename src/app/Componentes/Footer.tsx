import Mail from '../Icon/Mail'
import Instagram from '../Icon/Instagram'
import Whatsapp from '../Icon/Whatsapp'
const Footer = () => {
 
    return(
    <>
    <footer className="bg-fondoGris flex flex-col justify-center items-center text-center text-fondoBlanco gap-3 p-10 overflow-hidden nunitoSans font-normal text-base">
        <h4 className="text-2xl font-bold">¡Hablemos de tu proyecto!</h4>
        <picture className="flex flex flex-row justify-center items-center gap-8">
        <hr  className="min-w-[500px]"></hr>
        <a href='' className='p-2.5'><Instagram /></a>
        <a href='mailto:santi@gmail.com' className='p-2.5'><Mail /></a>
        <a href='' className='p-2.5'><Whatsapp size={24} /></a>
        <hr className="min-w-[500px]"></hr>
        </picture>
        <p>Prohibida la reproducción total o parcial de este sitio y su contenido.</p>
        <p className="font-bold">SantiCuorePH Copyright &copy; 2024. Buenos Aires, Argentina.</p>
       </footer>

       </> 
    )
}

export default Footer