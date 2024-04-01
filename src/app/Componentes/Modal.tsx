"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  redirect: string;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, redirect }) => {
  const router = useRouter();
  const handleCancelModal = () => {
    setShowModal(false);
    router.push(redirect);
  };
  return (
    <div
      className={`${
        showModal ? "absolute" : "hidden"
      } w-full h-full backdrop-blur-lg flex z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] `}
    >
      <div className="h-72 w-[700px] space-y-5 p-5 rounded-3xl font-merriwather  border bg-white m-auto">
        <button
          className="ml-auto flex"
          onClick={() => {
            setShowModal(false), (document.body.style.overflow = "auto");
          }}
        >
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <polygon
              points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
            />
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-center">
          ¡Listo! Ya recibimos tu solicitud de presupuesto
        </h3>
        <p className="text-center">
          Te enviaremos una respuesta en un plazo estimado de 48 horas
        </p>
        <div className="flex justify-evenly">
          <button
            onClick={handleCancelModal}
            className="border w-32 rounded-3xl font-bold py-3 px-9 hover:bg-principalHover transition-all ease-in-out"
          >
            Volver a Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
