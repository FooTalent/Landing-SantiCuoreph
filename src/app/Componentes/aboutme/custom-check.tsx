import CheckIcon from "../header/check.icon"

type CheckProps = {
    description: string,
}

const CustomCheck = (props: CheckProps) => {


const {description}= props

    return(
        <div className="flex items-center flex-row nunitoSans font-bold text-xl gap-3 my-5">
        <CheckIcon />
        {description}
        </div>
    )
}

export default CustomCheck