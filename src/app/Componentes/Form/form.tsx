"use client";
import { useForm, SubmitHandler, Controller, set } from "react-hook-form";
import CustomButton from "../CustomButton";
import { use, useEffect, useState } from "react";
import Select from "react-select";
import Image from "next/image";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  contactoW: boolean;
  contactoM: boolean;
  tipoServFoto?: Option;
  tipoServAudVis?: Option;
  ciudad: string;
  fecha: Date;
  duracion: Option;
  cantidadFotos: Option;
  cantidadVideos: Option;
  formato: Option;
  comentarios?: string;
};
const schema = z.object({
  nombre: z
    .string()
    .min(1, "Debes ingresar un nombre")
    .max(30, "Límite de caracteres alcanzado")
    .regex(/^[a-zA-Z\s]*$/, "Ingrese solo letras"),
  apellido: z
    .string()
    .min(1, "Debes ingresar un apellido")
    .max(30)
    .regex(/^[a-zA-Z\s]*$/, "No se permiten caracteres especiales ni números"),
  email: z.string().email("Formato de email invalido"),
  telefono1: z
    .string()
    .regex(/^\d*$/, { message: "Ingrese solo números" })
    .min(2, "Debes ingresar una característica válida")
    .max(4),
  telefono2: z
    .string()
    .regex(/^\d*$/, { message: "Ingrese solo números" })
    .min(4, "No es un número telefonico correcto")
    .max(7),
  ciudad: z.string().min(1, "Debes ingresar una ciudad"),
  comentarios: z.string().max(2000),
});

export default function Form() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [habilitar, setHabilitar] = useState(false);
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
  const duraciones = [
    { value: "2", label: "Hasta 2 horas" },
    { value: "4", label: "Hasta 4 horas" },
    { value: "6", label: "Hasta 6 horas" },
    { value: "8", label: "Hasta 8 horas" },
    { value: "10", label: "Hasta 10 horas" },
    { value: "0", label: "No lo sé" },
  ];
  const formatos = [
    { value: "digital", label: "Digital" },
    { value: "impreso", label: "Impreso" },
    { value: "digital-impreso", label: "Digital e Impreso" },
  ];
  const cantidadesFotos = [
    { value: "25", label: "Hasta 25 fotos" },
    { value: "50", label: "Hasta 50 fotos" },
    { value: "75", label: "Hasta 75 fotos" },
    { value: "100", label: "Hasta 100 fotos" },
    { value: "100+", label: "Mas de 100 fotos" },
    { value: "0", label: "No lo sé" },
  ];
  const cantidadesVideo = [
    { value: "5", label: "Hasta 5 videos" },
    { value: "10", label: "Hasta 10 videos" },
    { value: "15", label: "Hasta 15 videos" },
    { value: "20", label: "Hasta 20 videos" },
    { value: "20+", label: "Mas de 20 videos" },
    { value: "0", label: "No lo sé" },
  ];
  const servAudiovisualOptions = [
    { value: "graba-edita", label: "Grabación y edición de video" },
    { value: "redes-sociales", label: "Creación de video para redes sociales" },
    { value: "otro", label: "Otro tipo de producción audiovisual" },
  ];
  const handleBlurValidation = async (fieldName: any) => {
    await trigger(fieldName); // Disparar la validación para el campo especificado
  };
  const today = new Date().toISOString().split("T")[0];
  const servicio = watch("servicio");
  const apellido = watch("apellido");
  const nombre = watch("nombre");
  const telefono1 = watch("telefono1");
  const telefono2 = watch("telefono2");
  const contactoM = watch("contactoM");
  const contactoW = watch("contactoW");
  const ciudad = watch("ciudad");
  const fecha = watch("fecha");
  const duracion = watch("duracion");
  const cantidadFotos = watch("cantidadFotos");
  const cantidadVideos = watch("cantidadVideos");
  const formato = watch("formato");
  const comentarios = watch("comentarios");
  const tipoServFoto = watch("tipoServFoto");
  const tipoServAudVis = watch("tipoServAudVis");
  //control paso 0
  useEffect(() => {
    if (paso === 0 && servicio) {
      setHabilitar(true);
    } else if (
      paso === 1 &&
      apellido &&
      nombre &&
      Object.keys(errors).length === 0 &&
      telefono1 &&
      telefono2 &&
      (contactoW || contactoM)
    ) {
      setHabilitar(true);
    } else if (
      paso === 2 &&
      servicio === "fotografia" &&
      cantidadFotos &&
      ciudad &&
      Object.keys(errors).length === 0 &&
      duracion &&
      fecha &&
      formato &&
      tipoServFoto
    ) {
      setHabilitar(true);
    } else if (
      paso === 2 &&
      servicio === "edicion" &&
      cantidadVideos &&
      ciudad &&
      Object.keys(errors).length === 0 &&
      duracion &&
      fecha
    ) {
      setHabilitar(true);
    } else if (
      paso === 2 &&
      servicio === "ambos" &&
      cantidadVideos &&
      cantidadFotos &&
      Object.keys(errors).length === 0 &&
      ciudad &&
      duracion &&
      fecha &&
      formato &&
      tipoServFoto &&
      tipoServAudVis
    ) {
      setHabilitar(true);
    } else if (paso === 3 || paso === 4) {
      setHabilitar(true);
    } else {
      setHabilitar(false);
    }
  }, [
    paso,
    apellido,
    servicio,
    nombre,
    contactoM,
    contactoW,
    errors,
    telefono1,
    telefono2,
    cantidadFotos,
    cantidadVideos,
    ciudad,
    duracion,
    fecha,
    formato,
    tipoServFoto,
    tipoServAudVis,
  ]);
  //control paso 3 y 4

  const handleContinuar = () => {
    if (paso == 0) {
      setHabilitar(false);
    }
    setPaso(paso + 1);
  };

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
        <div
          className={`text-fondoBlanco text-3xl mb-10 ${
            paso === 2 || (paso === 4 && watch("servicio")) ? "mx-52" : ""
          } flex justify-between pb-6 items-center`}
        >
          <h2 className="text-3xl font-bold">Servicio de fotografía</h2>
          <h2 className="text-2xl font-bold font-nunitoSans">
            Paso {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "edicion" && (
        <div
          className={`text-fondoBlanco text-3xl mb-10 ${
            paso === 2 || (paso === 4 && watch("servicio")) ? "mx-52" : ""
          } flex justify-between pb-6 items-center`}
        >
          <h2 className="text-3xl font-bold">
            Servicio de edición / creación de video
          </h2>
          <h2 className="text-2xl font-bold font-nunitoSans">
            Paso {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "ambos" && (
        <div
          className={`text-fondoBlanco text-3xl mb-10 ${
            paso === 2 || (paso === 4 && watch("servicio")) ? "mx-52" : ""
          } flex justify-between pb-6 items-center`}
        >
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
        className={`pt-8 pb-20 ${
          paso === 2 || (paso === 4 && watch("servicio"))
            ? "lg:mx-52 mx-32"
            : "px-9"
        } bg-formBackground rounded-[32px] font-nunitoSans text-fondoBlanco text-3xl min-h-[400px] backdrop-blur-md drop-shadow-xl`}
      >
        {/**Encabezados de Formulario */}
        {paso == 0 && (
          <div className="flex justify-between pb-10 font-nunitoSans">
            <h2 className="text-2xl font-bold">
              ¿Qué tipo de servicio necesitás?
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
              Nombre*
              <input
                {...register("nombre", { required: true })}
                id="nombre"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-[2px] outline-principalHover"
                maxLength={30}
                onBlur={() => handleBlurValidation("nombre")}
              />
              {errors.nombre && (
                <p className="text-red-600 text-xs">{errors.nombre.message}</p>
              )}
            </label>

            <label htmlFor="apellido" className="flex flex-col">
              Apellido*
              <input
                {...register("apellido", {
                  required: true,
                })}
                id="apellido"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                maxLength={30}
              />
            </label>
            <label htmlFor="telefono" className="flex flex-col">
              Telefono*
              <div className="flex gap-3 w-full">
                <div className="flex flex-col">
                  <input
                    {...register("telefono1", { required: true })}
                    className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl w-20 h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                    id="telefono"
                    maxLength={4}
                    onBlur={() => handleBlurValidation("telefono1")}
                  />
                  {errors.telefono1 && (
                    <p className="text-red-600 text-xs">
                      {errors.telefono1.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    {...register("telefono2", { required: true })}
                    className="mt-2 border-[1.5px] border-inputBorderSelected w-full rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground 2xl:grow focus:outline outline-3 outline-principalHover"
                    maxLength={7}
                    onBlur={() => handleBlurValidation("telefono2")}
                  />
                  {errors.telefono2 && (
                    <p className="text-red-600 text-xs">
                      {errors.telefono2.message}
                    </p>
                  )}
                </div>
              </div>
            </label>
            <label htmlFor="email" className="flex flex-col">
              Email (opcional)
              <input
                {...register("email")}
                type="mail"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                id="email"
                onBlur={() => handleBlurValidation("email")}
              />
              {errors.email && (
                <p className="text-red-600 text-xs">{errors.email.message}</p>
              )}
            </label>
            <div className="col-span-2 ">
              <h2 className="text-center">
                ¿Por qué medio querés recibir tu presupuesto?*
              </h2>
              <div className="flex justify-center gap-20 py-5">
                <label
                  htmlFor="whatsapp"
                  className="flex  gap-1 items-center text-base "
                >
                  <input
                    {...register("contactoW")}
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
                    {...register("contactoM")}
                    type="checkbox"
                    className="appearance-none w-7 h-7 border-2 border-inputBorderSelected rounded-md checked:bg-inputBorderSelected"
                  />{" "}
                  Mail
                </label>
              </div>
            </div>
          </fieldset>
        )}
        {/** paso 2a */}
        {paso == 2 && watch("servicio") === "fotografia" && (
          <fieldset id="paso2" className="flex flex-col gap-6 pb-10 px-32">
            <label htmlFor="servicio" className="flex flex-col">
              ¿Qué tipo de servicio fotográfico necesitás?*
              <Controller
                name="tipoServFoto"
                control={control}
                render={({ field }) => (
                  <Select
                    id="servicio"
                    placeholder={"Seleccioná un tipo de servicio fotográfico"}
                    {...field}
                    options={servFotograficoOptions}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
              ¿En qué ciudad se va a realizar la sesión fotográfica?*
              <input
                {...register("ciudad", { required: true })}
                id="ciudad"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                maxLength={30}
                onBlur={() => handleBlurValidation("ciudad")}
              />
              {errors.ciudad && (
                <p className="text-red-600 text-xs">{errors.ciudad.message}</p>
              )}
            </label>
            <label htmlFor="fecha" className="flex flex-col">
              ¿En qué fecha estimada se va a realizar la sesión de fotos?*
              <div className="flex relative max-w-[50%] border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover">
                <Image
                  src="/assets/img/calendar_month_FILL0_wght400_GRAD0_opsz40 1.svg"
                  alt="icon"
                  width={50}
                  height={50}
                  className="absolute top-[50%] translate-y-[-50%] left-6"
                />
                <input
                  type="date"
                  {...register("fecha", { required: true })}
                  id="fecha"
                  className="appearance-none border-l-[1.5px] border-inputBorderSelected text-center mx-auto text-xl  text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover py-3"
                  min={today}
                />
              </div>
            </label>
            <label htmlFor="duracion" className="flex flex-col">
              Tiempo estimado de la cobertura del evento / sesión fotográfica*
              <Controller
                name="duracion"
                control={control}
                render={({ field }) => (
                  <Select
                    id="duracion"
                    placeholder={"Indicá un tiempo estimado de horas"}
                    {...field}
                    options={duraciones}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
            <label htmlFor="cantidadFotos" className="flex flex-col">
              ¿Cuántas fotos editadas y retocadas necesitás?*
              {/* <input
                {...register("cantidadFotos", { required: true })}
                id="cantidad"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
              /> */}
              <Controller
                name="cantidadFotos"
                control={control}
                render={({ field }) => (
                  <Select
                    id="cantidadFotos"
                    placeholder={"Indicá cuantas fotos necesitas"}
                    {...field}
                    options={cantidadesFotos}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
            <label htmlFor="formato" className="flex flex-col">
              ¿En qué formato necesitás las fotos?*
              <Controller
                name="formato"
                control={control}
                render={({ field }) => (
                  <Select
                    id="formato"
                    placeholder={"Seleccioná un tipo de formato"}
                    {...field}
                    options={formatos}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
          </fieldset>
        )}
        {/** paso 2b */}
        {paso == 2 && watch("servicio") === "edicion" && (
          <fieldset id="paso2" className="flex flex-col gap-6 pb-10 px-32">
            <label htmlFor="servicio" className="flex flex-col">
              ¿Qué tipo de servicio audiovisual necesitás?*
              <Controller
                name="tipoServAudVis"
                control={control}
                render={({ field }) => (
                  <Select
                    id="servicio"
                    placeholder={"Seleccioná un tipo de servicio audiovisual"}
                    {...field}
                    options={servAudiovisualOptions}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
              ¿En qué ciudad se va a realizar la sesión de video?*
              <input
                {...register("ciudad", { required: true })}
                id="ciudad"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                onBlur={() => handleBlurValidation("ciudad")}
              />
              {errors.ciudad && (
                <p className="text-red-600 text-xs">{errors.ciudad.message}</p>
              )}
            </label>
            <label htmlFor="fecha" className="flex flex-col">
              ¿En qué fecha estimada se va a realizar la sesión de video?*
              <div className="flex relative max-w-[50%] border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover">
                <Image
                  src="/assets/img/calendar_month_FILL0_wght400_GRAD0_opsz40 1.svg"
                  alt="icon"
                  width={50}
                  height={50}
                  className="absolute top-[50%] translate-y-[-50%] left-6"
                />
                <input
                  type="date"
                  {...register("fecha", { required: true })}
                  id="fecha"
                  className="appearance-none border-l-[1.5px] border-inputBorderSelected text-center mx-auto text-xl  text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover py-3"
                  min={today}
                />
              </div>
            </label>
            <label htmlFor="duracion" className="flex flex-col">
              Tiempo estimado de la cobertura del evento / sesión de video*
              <Controller
                name="duracion"
                control={control}
                render={({ field }) => (
                  <Select
                    id="duracion"
                    placeholder={"Indicá un tiempo estimado de horas"}
                    {...field}
                    options={duraciones}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
            <label htmlFor="cantidadVideos" className="flex flex-col">
              ¿Cuántos videos editados necesitás?*
              <Controller
                name="cantidadVideos"
                control={control}
                render={({ field }) => (
                  <Select
                    id="cantidadVideos"
                    placeholder={"Indicá cuántos videos necesitas"}
                    {...field}
                    options={cantidadesVideo}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
          </fieldset>
        )}
        {/** paso 2c */}
        {paso == 2 && watch("servicio") === "ambos" && (
          <fieldset id="paso2" className="flex flex-col gap-6 pb-10 px-32">
            <label htmlFor="servicio" className="flex flex-col">
              ¿Qué tipo de servicio fotográfico necesitás?*
              <Controller
                name="tipoServFoto"
                control={control}
                render={({ field }) => (
                  <Select
                    id="servicio"
                    placeholder={"Seleccioná un tipo de servicio fotográfico"}
                    {...field}
                    options={servFotograficoOptions}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
            <label htmlFor="servicio1" className="flex flex-col">
              ¿Qué tipo de servicio audiovisual necesitás?*
              <Controller
                name="tipoServAudVis"
                control={control}
                render={({ field }) => (
                  <Select
                    id="servicio1"
                    placeholder={"Seleccioná un tipo de servicio audiovisual"}
                    {...field}
                    options={servAudiovisualOptions}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
              ¿En qué ciudad se va a realizar la sesión de fotos / video?*
              <input
                {...register("ciudad", { required: true })}
                id="ciudad"
                className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                onBlur={() => handleBlurValidation("ciudad")}
              />
              {errors.ciudad && (
                <p className="text-red-600 text-xs">{errors.ciudad.message}</p>
              )}
            </label>
            <label htmlFor="fecha" className="flex flex-col">
              ¿En qué fecha estimada se va a realizar la sesión de fotos /
              video?*
              <div className="flex relative max-w-[50%] border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover">
                <Image
                  src="/assets/img/calendar_month_FILL0_wght400_GRAD0_opsz40 1.svg"
                  alt="icon"
                  width={50}
                  height={50}
                  className="absolute top-[50%] translate-y-[-50%] left-6"
                />
                <input
                  type="date"
                  {...register("fecha", { required: true })}
                  id="fecha"
                  className="appearance-none border-l-[1.5px] border-inputBorderSelected text-center mx-auto text-xl  text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover py-3"
                  min={today}
                />
              </div>
            </label>
            <label htmlFor="duracion" className="flex flex-col">
              Tiempo estimado de la cobertura del evento o sesión de fotos /
              video*
              <Controller
                name="duracion"
                control={control}
                render={({ field }) => (
                  <Select
                    id="duracion"
                    placeholder={"Indicá un tiempo estimado de horas"}
                    {...field}
                    options={duraciones}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
            <label htmlFor="cantidad" className="flex flex-col">
              ¿Cuántas fotos editadas y retocadas necesitás?*
              <Controller
                name="cantidadFotos"
                control={control}
                render={({ field }) => (
                  <Select
                    id="cantidadFotos"
                    placeholder={"Indicá cuantas fotos necesitas"}
                    {...field}
                    options={cantidadesFotos}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
            <label htmlFor="formato" className="flex flex-col">
              ¿En qué formato necesitás las fotos?*
              <Controller
                name="formato"
                control={control}
                render={({ field }) => (
                  <Select
                    id="formato"
                    placeholder={"Seleccioná un tipo de formato"}
                    {...field}
                    options={formatos}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
            <label htmlFor="cantidad2" className="flex flex-col">
              ¿Cuántos videos editados necesitás?*
              <Controller
                name="cantidadVideos"
                control={control}
                render={({ field }) => (
                  <Select
                    id="cantidadVideos"
                    placeholder={"Indicá cuántos videos necesitas"}
                    {...field}
                    options={cantidadesVideo}
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
                        ":first-of-type": {
                          ...styles[":first-of-type"],
                          borderRadius: "10px 10px 0 0",
                        },
                        ":last-child": {
                          ...styles[":first-of-type"],
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
          </fieldset>
        )}
        {/** paso 3 */}
        {paso === 3 && (
          <fieldset className="flex flex-col gap-4 px-36">
            <h2 className="text-fondoBlanco font-nunitoSans text-2xl font-bold">
              Información adicional (opcional)
            </h2>
            <label className="flex flex-col text-fondoBlanco font-nunitoSans text-lg font-bold">
              Detallá cualquier información relevante relacionada con tu pedido
              <textarea
                className="my-4 bg-fondoGris rounded-2xl h-96 border p-6 border-inputBorderSelected font-nunitoSans font-light italic text-base text-white"
                {...register("comentarios")}
                maxLength={2000}
              />
            </label>
          </fieldset>
        )}
        {/** paso 4 */}
        {paso === 4 && (
          <fieldset className="flex flex-col gap-8 pb-10 px-32">
            <h2 className="text-fondoBlanco font-nunitoSans text-2xl font-bold">
              Revisá que la información sea correcta
            </h2>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-2">
                <p className="text-fondoBlanco font-nunitoSans text-lg">
                  Nombre
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("nombre")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-fondoBlanco font-nunitoSans text-lg">
                  Apellido
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("apellido")}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="text-fondoBlanco font-nunitoSans text-lg">
                  Teléfono
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("telefono1")}-{watch("telefono2")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-fondoBlanco font-nunitoSans text-lg text-left">
                  Email
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("email")}
                </p>
              </div>
            </div>
            {watch("tipoServFoto") && (
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                  ¿Qué tipo de servicio fotográfico necesitás?
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("tipoServFoto.label")}
                </p>
              </div>
            )}
            {watch("tipoServAudVis") && (
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                  ¿Qué tipo de servicio audiovisual necesitás?
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("tipoServAudVis.label")}
                </p>
              </div>
            )}
            <div>
              <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                {watch("servicio") === "fotografia" &&
                  "¿En qué ciudad se va a realizar la sesión fotográfica?"}
                {watch("servicio") === "edicion" &&
                  "¿En qué ciudad se va a realizar la sesión de video?"}
                {watch("servicio") === "ambos" &&
                  "¿En qué ciudad se va a realizar la sesión de fotos / video?"}
              </p>
              <p className="font-nunito text-lg font-bold">{watch("ciudad")}</p>
            </div>
            <div>
              <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                {watch("servicio") === "fotografia" &&
                  "¿En qué fecha estimada se va a realizar la sesión de fotos?"}
                {watch("servicio") === "edicion" &&
                  "¿En qué fecha estimada se va a realizar la sesión de video?"}
                {watch("servicio") === "ambos" &&
                  "¿En qué fecha estimada se va a realizar la sesión de fotos / video?"}
              </p>
              <p className="font-nunito text-lg font-bold">
                {watch("fecha").toString().slice(-2)}
                {"/"}
                {watch("fecha").toString().slice(-5, -3)}
                {"/"}
                {watch("fecha").toString().slice(0, 4)}
              </p>
            </div>
            <div>
              <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                {watch("servicio") === "fotografia" &&
                  "Tiempo estimado de la cobertura del evento / sesión fotográfica"}
                {watch("servicio") === "edicion" &&
                  "Tiempo estimado de la cobertura del evento / sesión de video"}
                {watch("servicio") === "ambos" &&
                  "Tiempo estimado de la cobertura del evento o sesión de fotos / video"}
              </p>
              <p className="font-nunito text-lg font-bold">
                {watch("duracion.label")}
              </p>
            </div>
            {(watch("servicio") === "fotografia" ||
              watch("servicio") === "ambos") && (
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                  ¿Cuántas fotos editadas y retocadas necesitás?
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("cantidadFotos.label")}
                </p>
              </div>
            )}
            {(watch("servicio") === "fotografia" ||
              watch("servicio") === "ambos") && (
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                  ¿En qué formato necesitás las fotos?
                </p>
                <p className="font-nunito text-lg font-bold">
                  {watch("formato.label")}
                </p>
              </div>
            )}
            {watch("servicio") === "edicion" ||
              (watch("servicio") === "ambos" && (
                <div>
                  <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                    ¿Cuántos videos editados necesitás?
                  </p>
                  <p className="font-nunito text-lg font-bold">
                    {watch("cantidadVideos.label")}
                  </p>
                </div>
              ))}

            {watch("comentarios") && (
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                  Detallá cualquier información relevante relacionada con tu
                  pedido
                </p>
                <p className="font-nunito text-lg font-bold max-w-[50ch]">
                  {watch("comentarios")}
                </p>
              </div>
            )}
            <div>
              <p className="text-fondoBlanco font-nunitoSans text-lg text-left pb-2">
                ¿Por qué medio querés recibir tu presupuesto?
              </p>
              <p className="font-nunito text-lg font-bold">
                {watch("contactoW") ? "Whatsapp" : ""}
                {watch("contactoM") && watch("contactoW") ? "-" : ""}{" "}
                {watch("contactoM") ? "Mail" : ""}
              </p>
            </div>
          </fieldset>
        )}
        {paso >= 1 && paso <= 2 && (
          <p
            className={`font-nunitoSans text-base font-normal ${
              paso == 3 ? "px-36" : "px-32"
            }`}
          >
            Los campos obligatorios están marcados con (*)
          </p>
        )}
        {paso === 3 && (
          <p
            className={`font-nunitoSans text-[15px] font-normal px-36 text-right ${
              watch("comentarios")?.length === 2000 ? "text-red-600" : ""
            }`}
          >
            {watch("comentarios") ? watch("comentarios")?.length : "0"} / 2000
          </p>
        )}
      </form>
      {/*Botones para volver o pasar al siguiente formulario */}
      <div className="flex justify-around ">
        <CustomButton
          title={`${
            paso == 4
              ? "Editar informacion"
              : "Volver"}`}
          styles="bg-principal rounded-[40px] px-14 py-3 font-merriwather font-bold text-3xl mt-16 hover:bg-principalHover"
          onClick={() =>{
           if(paso === 4){
              setPaso(0)
            }else{
              setPaso(paso - 1)
            }
          }}
        />
        <CustomButton
          title="Continuar"
          disabled={!habilitar}
          styles={`${
            habilitar
              ? "bg-principal hover:bg-principalHover"
              : "bg-backgroundDisabled cursor-not-allowed text-textoDisabled"
          } rounded-[40px] px-14 py-3 font-merriwather font-bold text-3xl mt-16`}
          onClick={() => {
            if (paso === 4) {
              handleSubmit(onSubmit)();
            } else {
              handleContinuar();
            }
          }}
        />
      </div>
    </div>
  );
}
