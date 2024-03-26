"use client";

type buttonProps = {
  title: string;
  styles: string;
  onClick?: () => void;
};

const CustomButton = (props: buttonProps) => {
  const { title, styles, onClick } = props;

  return (
    <button type="button" className={styles} onClick={onClick}>
      {title}
    </button>
  );
};
export default CustomButton;
