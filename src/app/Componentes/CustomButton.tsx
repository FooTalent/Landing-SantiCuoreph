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
      {title !== "" ? (
        title === "Editar información" ? (
          <div className="flex justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.21 7.04055C21.6 6.65055 21.6 6.00055 21.21 5.63055L18.87 3.29055C18.5 2.90055 17.85 2.90055 17.46 3.29055L15.62 5.12055L19.37 8.87055M3.5 17.2505V21.0005H7.25L18.31 9.93055L14.56 6.18055L3.5 17.2505Z"
                fill="#F2F2F2"
              />
            </svg>
            {title}
          </div>
        ) : (
          title
        )
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="sm:hidden"
        >
          <path
            d="M25.0002 13.7496V16.2496H10.0002L16.8752 23.1246L15.1002 24.8996L5.2002 14.9996L15.1002 5.09961L16.8752 6.87461L10.0002 13.7496H25.0002Z"
            fill="#F2F2F2"
          />
        </svg>
      )}
    </button>
  );
};
export default CustomButton;
