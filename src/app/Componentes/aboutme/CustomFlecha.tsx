'use client'
import Image from "next/image"
import flecha from '../../Icon/Group.png'
type flechaProps = {
    description: string,
}

const CustomFlecha = (props: flechaProps) => {


const {description}= props

    return(
        <div className="flex flex-row nunitoSans font-bold text-xl gap-2 my-5">
        <Image
        src={flecha}
        width={17}
        height={17}
        alt="flecha"
        className="object-cover w-8 h-fit">

        </Image>
        {description}
        </div>
    )
}
export default CustomFlecha