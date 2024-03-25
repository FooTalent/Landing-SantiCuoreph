"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CustomButton from "../CustomButton";
import { useState } from "react";

type Inputs = {
  servicio: string;
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
  const [paso, setPaso] = useState(0);

  console.log(watch("servicio")); // watch input value by passing the name of it

  return (
    /**Encabezados */
    <div>
      {paso == 0 && (
        <div className="text-fondoBlanco text-3xl mb-10 font-nunitoSans">
          <h2 className="text-3xl font-bold">
            Solicitá hoy tu presupuesto completando el siguiente formulario.
          </h2>
          <h2 className="text-3xl font-bold">
            Tendrás una respuesta en un plazo de 48 horas.
          </h2>
        </div>
      )}
      {paso == 1 && (
        <div className="text-fondoBlanco text-3xl mb-10  flex justify-between pb-6 items-center">
          <h2 className="text-3xl font-bold font-merriwather">
            Información de contacto
          </h2>
          <h2 className="text-2xl font-bold font-nunitoSans">
            Paso {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "fotografia" && (
        <div className="text-fondoBlanco text-3xl mb-10 flex justify-between pb-6 items-center">
          <h2 className="text-3xl font-bold">Servicio de fotografía</h2>
          <h2 className="text-2xl font-bold font-nunitoSans">
            Paso {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "edicion" && (
        <div className="text-fondoBlanco text-3xl mb-10 flex justify-between pb-6 items-center">
          <h2 className="text-3xl font-bold">
            Servicio de edición / creación de video
          </h2>
          <h2 className="text-2xl font-bold font-nunitoSans">
            Paso {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "ambos" && (
        <div className="text-fondoBlanco text-3xl mb-10 flex justify-between pb-6 items-center">
          <h2 className="text-3xl font-bold">
            Servicio de fotografía y edición de video
          </h2>
          <h2 className="text-2xl font-bold font-nunitoSans">
            Paso {paso} de 4
          </h2>
        </div>
      )}

      {/**Formulario */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 pb-20 px-9 bg-formBackground rounded-[32px] font-nunitoSans text-fondoBlanco text-3xl h-[400px] backdrop-blur-xl drop-shadow-2xl"
      >
        {/**Encabezados de Formulario */}
        {paso == 0 && (
          <div className="flex justify-between pb-10 font-nunitoSans">
            <h2 className="text-2xl font-bold">
              ¿Qué tipo de servicio necesitas?
            </h2>
          </div>
        )}
        {paso == 1 && (
          <div className="flex justify-between pb-6">
            <h2 className="text-2xl font-bold">
              Ingresá tus datos de contacto
            </h2>
          </div>
        )}

        {/**FieldSets*/}
        {paso == 0 && (
          <fieldset id="paso 0" className="flex gap-4 w-full justify-between">
            <input
              type="radio"
              id="fotografia"
              className="peer/draft hidden"
              value="fotografia"
              {...register("servicio")}
            />

            <label
              htmlFor="fotografia"
              className="rounded-[20px] border-2 border-inputBorderSelected bg-[#424242] py-[11px] text-2xl font-semibold text-nunitoSans  flex justify-center cursor-pointer peer-checked/draft:bg-inputBorderSelected peer-checked/draft:hover:bg-principalHover peer-checked/draft:text-textoInput grow hover:bg-principalHover hover:text-fondoGris transition-all duration-200"
            >
              Fotografía
            </label>
            <input
              type="radio"
              id="edicion"
              className="hidden peer/draft1"
              value="edicion"
              {...register("servicio")}
            />
            <label
              htmlFor="edicion"
              className="rounded-[20px] border-2 border-inputBorderSelected bg-[#424242cc] py-[11px] text-2xl font-semibold text-nunitoSans  flex justify-center cursor-pointer peer-checked/draft1:bg-inputBorderSelected peer-checked/draft1:hover:bg-principalHover peer-checked/draft1:text-textoInput grow hover:bg-principalHover hover:text-fondoGris transition-all duration-200"
            >
              Edición / Creación de video
            </label>
            <input
              type="radio"
              id="ambos"
              className="hidden peer/draft2"
              value="ambos"
              {...register("servicio")}
            />
            <label
              htmlFor="ambos"
              className="rounded-[20px] border-2 border-inputBorderSelected bg-[#424242cc] py-[11px] text-2xl font-semibold text-nunitoSans  flex justify-center cursor-pointer peer-checked/draft2:bg-inputBorderSelected peer-checked/draft2:hover:bg-principalHover peer-checked/draft2:text-textoInput grow hover:bg-principalHover hover:text-fondoGris transition-all duration-200"
            >
              Ambos
            </label>
          </fieldset>
        )}
        {/** paso 1 */}
        {paso == 1 && (
          <fieldset
            id="paso1"
            className="grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-4 text-xl"
          >
            <label htmlFor="nombre" className="flex flex-col">
              Nombre
              <input
                {...register("nombre", { required: true })}
                id="nombre"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-[2px] outline-principalHover"
              />
              {errors.nombre && <span>Este campo es requerido</span>}
            </label>

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="apellido" className="flex flex-col">
              Apellido
              <input
                {...register("apellido", { required: true })}
                id="apellido"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
              />
            </label>
            {/* errors will return when field validation fails  */}
            {errors.nombre && <span>This field is required</span>}
            <label htmlFor="telefono" className="flex flex-col">
              Telefono
              <div className="flex gap-3 w-full">
                <input
                  {...register("telefono1", { required: true })}
                  className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl w-20 h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                  id="telefono"
                />
                <input
                  {...register("telefono2", { required: true })}
                  className="mt-2 border-[1.5px] border-inputBorderSelected w-full rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground 2xl:grow focus:outline outline-3 outline-principalHover"
                />
              </div>
            </label>
            <label htmlFor="email" className="flex flex-col">
              Email (opcional)
              <input
                {...register("email")}
                type="email"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
              />
            </label>
            <div className="col-span-2 ">
              <h2 className="text-center">
                ¿Por qué medio querés recibir tu presupuesto?
              </h2>
              <div className="flex justify-center gap-20 py-5">
                <label
                  htmlFor="whatsapp"
                  className="flex  gap-1 items-center text-base "
                >
                  <input
                    type="checkbox"
                    className="appearance-none w-7 h-7 border-2 border-inputBorderSelected rounded-md checked:bg-inputBorderSelected"
                  />{" "}
                  Teléfono
                </label>
                <label
                  htmlFor="mail"
                  className="flex gap-1 items-center text-base"
                >
                  <input
                    type="checkbox"
                    className="appearance-none w-7 h-7 border-2 border-inputBorderSelected rounded-md checked:bg-inputBorderSelected"
                  />{" "}
                  Mail
                </label>
              </div>
            </div>
          </fieldset>
        )}
        {/** paso 2 */}
        {paso == 2 && watch("servicio") === "fotografia" && (
          <fieldset id="paso2" className="flex flex-col gap-4 pb-10">
            <label htmlFor="send" className="flex flex-col">
              ¿Qué tipo de servicio fotográfico necesitas?
              <Controller as={Select} name="send" control={control}>
                <option value="fotografia">Fotografía</option>
                <option value="edicion">Edición / Creación de video</option>
                <option value="ambos">
                  Fotografía y edición / creación de video
                </option>
              </Controller>
            </label>
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

        <CustomButton
          title="Continuar"
          styles="bg-principal rounded-[40px] px-14 py-3 font-merriwather font-bold text-3xl mt-16 hover:bg-principalHover"
          onClick={() => {
            setPaso(paso + 1);
          }}
        />
      </div>
    </div>
  );
}
