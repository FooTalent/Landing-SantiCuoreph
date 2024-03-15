'use client'
import Image from 'next/image'
import botonWhatsapp from '../../../public/images/whatsappBoton.png'
const BtnWhatsapp = () => {
    return(
        <div className='absolute right-10 bottom-10 z-40'>
        <Image src={botonWhatsapp} alt='Mi WhatsApp' className='w-16 cursor-pointer' />
        </div>
    )
}

export default BtnWhatsapp