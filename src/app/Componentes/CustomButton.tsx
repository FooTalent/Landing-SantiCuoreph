"use client";

type buttonProps = {
  title: string;
  styles: string;
  onClick?: () => void;
  disabled?: boolean;
};

const CustomButton = (props: buttonProps) => {
  const { title, styles, onClick, disabled = false } = props;

  return (
    <button
      type="button"
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
export default CustomButton;
