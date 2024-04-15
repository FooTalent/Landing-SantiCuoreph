'use client'
import Image from "next/image"
import check from '../../../../public/images/Group.png'
type flechaProps = {
    description: string,
}

const CustomFlecha = (props: flechaProps) => {


const {description}= props

    return(
        <div className="flex flex-row nunitoSans font-bold text-xl gap-2 my-5">
        <Image
        src={check}
        width={17}
        height={17}
        alt="flecha"
        className="object-cover w-7 h-fit">

        </Image>
        {description}
        </div>
    )
}
export default CustomFlecha