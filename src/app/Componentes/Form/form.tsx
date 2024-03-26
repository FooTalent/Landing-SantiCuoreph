"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CustomButton from "../CustomButton";
import { useState } from "react";
import Select from "react-select";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

type Inputs = {
  servicio: string;
  nombre: string;
  apellido: string;
  telefono1: number;
  telefono2: number;
  email: string;
  tipoServFoto: Option[];
  ciudad: string;
  fecha: Date;
};

export default function Form() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [paso, setPaso] = useState(0);
  const servFotograficoOptions = [
    {
      value: "cumpleano-casamiento",
      label: "Cobertura de cumpleaños / casamiento",
    },
    {
      value: "evento",
      label: "Cobertura de evento social / artístico / corporativo",
    },
    { value: "artistica", label: "Fotografía artística" },
    { value: "comercial", label: "Fotografía comercial / publicitaria" },
    { value: "retrato", label: "Retrato" },
    { value: "otro", label: "Otro tipo de fotografía" },
  ];

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
        className="pt-8 pb-20 px-9 bg-formBackground rounded-[32px] font-nunitoSans text-fondoBlanco text-3xl h-[400px] backdrop-blur-sm drop-shadow-2xl"
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
          <fieldset id="paso2" className="flex flex-col gap-4 pb-10 px-32">
            <label htmlFor="send" className="flex flex-col">
              ¿Qué tipo de servicio fotográfico necesitas?
              <Controller
                name="tipoServFoto"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Seleccioná un tipo de servicio fotográfico"}
                    {...field}
                    options={servFotograficoOptions}
                    isClearable
                    styles={{
                      control: (styles) => ({
                        ...styles,
                        boxSizing: "content-box",
                        backgroundColor: "#424242",
                        borderRadius: "10px",
                        padding: "0 21px",
                        border: "1px solid #FCCD35",
                        color: "#f2f2f2",
                        fontSize: "18px",
                        margin: "20px 0",
                        overlay: "none",
                        ":hover": {
                          ...styles[":hover"],
                          borderColor: "#FBBF01",
                        },
                      }),
                      singleValue: (styles) => ({
                        ...styles,
                        color: "#f2f2f2",
                        overlay: "none",
                      }),
                      placeholder: (styles) => ({
                        ...styles,
                        color: "#f2f2f2",
                      }),
                      option: (styles, { isFocused }) => ({
                        ...styles,
                        backgroundColor: isFocused ? "#FCCD35" : "#424242",
                        ":first-child": {
                          ...styles[":first-child"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-child"],
                          borderRadius: "0 0 10px 10px",
                        },
                        color: isFocused ? "#292319" : "#f2f2f2",
                      }),
                      menu: (styles) => ({
                        ...styles,
                        borderRadius: "10px",
                        fontSize: "18px",
                      }),
                      menuList: (styles) => ({
                        ...styles,
                        maxHeight: "auto",
                        padding: "0",
                        overflow: "hidden",
                      }),
                    }}
                    // Otros props de React Select según tus necesidades
                  />
                )}
              ></Controller>
            </label>
            <label htmlFor="ciudad" className="flex flex-col">
              ¿En qué ciudad se va a realizar la sesión fotográfica?
              <input
                {...register("ciudad", { required: true })}
                id="ciudad"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
              />
              <label htmlFor="fecha" className="flex flex-col">
                ¿En qué fecha estimada se va a realizar la sesión de fotos?
                <div className="flex relative max-w-[50%] border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover">
                  <Image
                    src="/assets/img/calendar_month_FILL0_wght400_GRAD0_opsz40 1.svg"
                    alt="icon"
                  />
                  <input
                    type="date"
                    {...register("fecha", { required: true })}
                    id="fecha"
                    className="appearance-none border-l-[1.5px] border-inputBorderSelected  text-xl  text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                  />
                </div>
              </label>
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
