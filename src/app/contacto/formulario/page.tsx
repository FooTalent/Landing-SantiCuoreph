"use client";
import { useState } from "react";
import CustomButton from "@/app/Componentes/CustomButtonequipo6";
import Form from "../../Componentes/Form/form";
import { useRouter } from "next/navigation";
const Contact = () => {
  const navigate = useRouter();
  const [paso, setPaso] = useState<number>(0);
  return (
    <div className="">
      <div
        id="formulario"
        className="pt-28 pb-28 md:py-40 px-5 md:px-16 lg:px-64"
      >
        <div className="flex">
          <CustomButton
            title=""
            styles="w-[30px] h-30px] mr-4"
            onClick={() => {
              if (paso === 0) {
                navigate.push("/contacto");
              } else {
                setPaso(paso - 1);
              }
            }}
          />
          <h1 className="font-merriwather text-2xl sm:text-4xl lg:text-6xl font-bold text-fondoBlanco">
            Solicitud de presupuesto
          </h1>
        </div>
        <div className="border-[1.5px] border-fondoBlanco my-9 "></div>
        <Form paso={paso} setPaso={setPaso} />
      </div>
    </div>
  );
};

export default Contact;
