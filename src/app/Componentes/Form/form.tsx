"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomButton from "../CustomButton";
import { useState } from "react";

type Inputs = {
  nombre: string;
  apellido: string;
  telefono1: number;
  telefono2: number;
  email: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [paso, setPaso] = useState(1);

  console.log(watch("nombre")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <div className="text-fondoBlanco text-3xl mb-10 font-nunitoSans">
        <h2 className="text-3xl font-bold">
          Solicitá hoy tu presupuesto completando el siguiente formulario.
        </h2>
        <h2 className="text-3xl font-bold">
          Tendrás una respuesta en un plazo de 48 horas.
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 pb-20 px-10 bg-formBackground rounded-[32px] font-nunitoSans text-fondoBlanco text-3xl h-[400px]"
      >
        {paso == 1 ? (
          <div className="flex justify-between pb-6">
            <h2 className="text-2xl font-bold">
              Ingresá tus datos de contacto
            </h2>
            {/* Aqui incoporar el paso */}
            <h2 className="text-xl">Paso {paso} de x</h2>
          </div>
        ) : (
          <div className="flex justify-between pb-10 font-nunitoSans">
            <h2 className="text-2xl font-bold">
              ¿Qué tipo de servicio necesitas?
            </h2>

            <h2 className="text-xl">Paso {paso} de x</h2>
          </div>
        )}
        {/* register your input into the hook by invoking the "register" function */}
        {/**Paso 1*/}
        {paso == 1 ? (
          <fieldset
            id="paso1"
            className="grid grid-cols-2 grid-rows-2 gap-x-28 gap-y-5 text-xl"
          >
            <label htmlFor="nombre" className="flex flex-col">
              Nombre
              <input
                {...register("nombre", { required: true })}
                id="nombre"
                className="mt-2 border-[1.5px] border-principalHover rounded-2xl h-16 text-xl px-4 py-3 text-fondoBlanco bg-inputBackground focus:outline outline-3 outline-principalHover"
              />
              {errors.nombre && <span>Este campo es requerido</span>}
            </label>

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="apellido" className="flex flex-col">
              Apellido
              <input
                {...register("apellido", { required: true })}
                id="apellido"
                className="mt-2 border-[1.5px] border-principalHover rounded-2xl h-16 text-xl px-4 py-3 text-fondoBlanco bg-inputBackground focus:outline outline-3 outline-principalHover"
              />
            </label>
            {/* errors will return when field validation fails  */}
            {errors.nombre && <span>This field is required</span>}
            <label htmlFor="telefono" className="flex flex-col">
              Telefono
              <div className="flex gap-3">
                <input
                  {...register("telefono1", { required: true })}
                  className="mt-2 border-[1.5px] border-principalHover rounded-2xl h-16 text-xl px-4 py-3 text-fondoBlanco bg-inputBackground w-20 focus:outline outline-3 outline-principalHover"
                  id="telefono"
                />
                <input
                  {...register("telefono2", { required: true })}
                  className="mt-2 border-[1.5px] border-principalHover rounded-2xl h-16 text-xl px-4 py-3 text-fondoBlanco bg-inputBackground grow focus:outline outline-3 outline-principalHover"
                />
              </div>
            </label>
            <label htmlFor="email" className="flex flex-col">
              Email (opcional)
              <input
                {...register("email")}
                type="email"
                className="mt-2 border-[1.5px] border-principalHover rounded-2xl h-16 text-xl px-4 py-3 text-fondoBlanco bg-inputBackground focus:outline outline-3 outline-principalHover"
              />
            </label>
            <label htmlFor="whatsapp" className="flex grow gap-2 items-center">
              <input
                type="checkbox"
                className="appearance-none w-8 h-8 border-[3px] border-principalHover rounded-md "
              />{" "}
              Quiero recibir mi presupuesto por Whatsapp
            </label>
            <label htmlFor="whatsapp" className="flex grow gap-2 items-center">
              <input
                type="checkbox"
                className="appearance-none w-8 h-8 border-[3px] border-principalHover rounded-md"
              />{" "}
              Quiero recibir mi presupuesto por mail
            </label>
          </fieldset>
        ) : (
          <fieldset className="flex gap-4 w-full justify-between">
            <CustomButton
              title="Fotografía"
              styles="rounded-[20px] border-2 border-secundario bg-[#424242cc] py-[11px] text-2xl font-semibold text-nunitoSans w-[310px]"
            />
            <CustomButton
              title="Edición/Creación de video"
              styles="rounded-[20px] border-2 border-secundario bg-[#424242cc] py-[11px] text-2xl font-semibold text-nunitoSans w-[310px]"
            />
            <CustomButton
              title="Ambos"
              styles="rounded-[20px] border-2 border-secundario bg-[#424242cc] py-[11px] text-2xl font-semibold text-nunitoSans w-[310px]"
            />
          </fieldset>
        )}
      </form>
      {/*Botones para volver o pasar al siguiente formulario */}
      <div className="flex justify-around">
        <CustomButton
          title="Volver"
          styles="bg-principal rounded-[40px] px-14 py-3 font-merriwather font-bold text-3xl mt-16 hover:bg-principalHover"
          onClick={() => setPaso(paso - 1)}
        />
        {paso == 1 && (
          <CustomButton
            title="Continuar"
            styles="bg-principal rounded-[40px] px-14 py-3 font-merriwather font-bold text-3xl mt-16"
            onClick={() => {
              setPaso(paso + 1);
            }}
          />
        )}
      </div>
    </div>
  );
}
