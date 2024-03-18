'use client'

type buttonProps = {
    title: string,
    styles: string,
}

const CustomButton = (props: buttonProps) => {


const {title, styles}= props

    return(
        <button
        type="button"
        className={styles}
        onClick={() => {}}
        >
            {title}
        </button>
    )
}
export default CustomButton