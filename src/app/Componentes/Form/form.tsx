"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CustomButton from "../CustomButton";
import { useEffect, useState } from "react";
import Select from "react-select";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import Modal from "../Modal";
import { useRouter } from "next/navigation";

interface Option {
  label: string;
  value: string;
}

type Inputs = {
  servicio: string;
  nombre: string;
  apellido: string;
  telefono1: number;
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
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/g, "Ingrese un nombre válido"),
  apellido: z
    .string()
    .min(1, "Debes ingresar un apellido")
    .max(30)
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/g, "Ingrese un apellido válido"),
  email: z
    .string()
    .min(1, "Debes ingresar un mail")
    .email("Ingrese un formato de email válido"),
  telefono1: z
    .string({ required_error: "Campo requerido" })
    .refine(isValidPhoneNumber, {
      message: "Ingrese un número telefónico válido",
    }),
  ciudad: z
    .string()
    .min(1, "Ingrese un barrio o ciudad. Por ej: Almagro, Buenos Aires."),
  comentarios: z.string().max(2000),
});
interface FormProps {
  paso: number;
  setPaso: (value: number) => void;
}

const Form: React.FC<FormProps> = ({ paso, setPaso }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useRouter();
  const {
    control,
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const valores = getValues();
    var datos = {
      service_id: "service_hjd0tod",
      template_id: "template_t15hwmx",
      user_id: "pgqqrrNHA6i0mNJwi",
      template_params: {
        nombre: valores.nombre,
        apellido: valores.apellido,
        telefono1: valores.telefono1,
        mail: valores.email,
        ciudad: valores.ciudad,
        servicio:
          valores.servicio === "fotografia"
            ? "Fotografía"
            : valores.servicio === "edicion"
            ? "Edición / Creación de videos"
            : "Fotografía y Edición / Creación de videos",
        contactoW: valores.contactoW ? "Si" : "No",

        contactoM: valores.contactoM ? valores.email : "No",

        tipoServFoto: valores.tipoServFoto
          ? valores.tipoServFoto.label
          : "No corresponde",
        tipoServAudVis: valores.tipoServAudVis
          ? valores.tipoServAudVis.label
          : "No corresponde",
        fecha: valores.fecha,
        duracion: valores.duracion.label,
        cantidadFotos: valores.cantidadFotos
          ? valores.cantidadFotos.label
          : "No corresponde",
        cantidadVideos: valores.cantidadVideos
          ? valores.cantidadVideos.label
          : "No corresponde",
        formato: valores.formato ? valores.formato.label : "No corresponde",
        comentarios: valores.comentarios,
        whatsapp: contactoW
          ? `https://api.whatsapp.com/send?phone=${valores.telefono1
              .toString()
              .slice(1)}`
          : "",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };
    var datosAviso = {
      service_id: "service_hjd0tod",
      template_id: "template_u709am4",
      user_id: "pgqqrrNHA6i0mNJwi",
      template_params: {
        nombre: valores.nombre,
        apellido: valores.apellido,
        telefono1: valores.telefono1,
        mail: valores.email,
        ciudad: valores.ciudad,
        servicio:
          valores.servicio === "fotografía"
            ? "Fotografía"
            : valores.servicio === "edicion"
            ? "Edición / Creación de videos"
            : "Fotografía y Edición / Creación de videos",
        contactoW: valores.contactoW ? "Si" : "No",

        contactoM: valores.contactoM ? valores.email : "No",

        tipoServFoto: valores.tipoServFoto
          ? valores.tipoServFoto.label
          : "No corresponde",
        tipoServAudVis: valores.tipoServAudVis
          ? valores.tipoServAudVis.label
          : "No corresponde",
        fecha: valores.fecha,
        duracion: valores.duracion.label,
        cantidadFotos: valores.cantidadFotos
          ? valores.cantidadFotos.label
          : "No corresponde",
        cantidadVideos: valores.cantidadVideos
          ? valores.cantidadVideos.label
          : "",
        formato: valores.formato ? valores.formato.label : "No corresponde",
        comentarios: valores.comentarios,
        whatsapp: contactoW
          ? `https://api.whatsapp.com/send?phone=${valores.telefono1
              .toString()
              .slice(1)}`
          : "",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    }).then((response) => {
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosAviso),
      });
      setShowModal(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };
  const [habilitar, setHabilitar] = useState(false);

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
  const cantidadesVideoEdicion = [
    { value: "3", label: "Hasta 3 videos" },
    { value: "5", label: "Hasta 5 videos" },
    { value: "10", label: "Hasta 10 videos" },
    { value: "10+", label: "Mas de 10 videos" },
    { value: "0", label: "No lo sé" },
  ];
  const cantidadesVideoAmbos = [
    { value: "1", label: "1 video" },
    { value: "2", label: "2 videos" },
    { value: "3", label: "3 videos" },
    { value: "4", label: "4 videos" },
    { value: "5", label: "5 videos" },
    { value: "5+", label: "Mas de 5 videos" },
    { value: "0", label: "No lo sé" },
  ];
  const servAudiovisualOptions = [
    { value: "graba-edita", label: "Grabación y edición de video" },
    { value: "redes-sociales", label: "Creación de video para redes sociales" },
    { value: "otro", label: "Otro tipo de producción audiovisual" },
  ];
  const handleBlurValidation = async (fieldName: any) => {
    await trigger(fieldName); // Disparar la validación para el campo especificado
    funcionControladora();
  };
  const today = new Date().toISOString().split("T")[0];
  const servicio = watch("servicio");
  const apellido = watch("apellido");
  const nombre = watch("nombre");
  const mail = watch("email");
  const telefono1 = watch("telefono1");
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

  const funcionControladora = () => {
    if (paso === 0 && servicio) {
      setHabilitar(true);
    } else if (
      paso === 1 &&
      apellido &&
      nombre &&
      mail &&
      Object.keys(errors).length === 0 &&
      telefono1 &&
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
  };

  //control paso 0

  useEffect(() => {
    funcionControladora();
  }, [
    paso,
    apellido,
    mail,
    servicio,
    nombre,
    contactoM,
    contactoW,
    errors,
    telefono1,
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
      <Modal showModal={showModal} setShowModal={setShowModal} redirect={"/"} />
      {paso == 0 && (
        <div className="text-fondoBlanco sm:text-3xl mb-9 font-nunitoSans mx-5">
          <h2 className="text-base sm:text-xl lg:text-3xl font-bold mb-3">
            Solicitá hoy tu presupuesto completando el siguiente formulario.
          </h2>
          <h2 className="text-base sm:text-xl lg:text-3xl font-normal">
            Tendrás una respuesta en un plazo de 48 horas.
          </h2>
        </div>
      )}
      {paso == 1 && (
        <div className="text-fondoBlanco text-xl mb-8  flex justify-between items-center px-6">
          <h2 className="sm:text-3xl font-bold font-merriwather">
            Información de contacto
          </h2>
          <h2 className="text-xl sm:text-2xl font-bold font-nunitoSans">
            {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "fotografia" && (
        <div
          className={`text-fondoBlanco mb-10 ${
            paso === 2 || (paso === 4 && watch("servicio"))
              ? "mx-7 sm:mx-8 md:mx-10"
              : ""
          } flex justify-between sm:pb-6 items-center`}
        >
          <h2 className="text-lg sm:text-3xl font-bold md:mx-10">
            Servicio de fotografía
          </h2>
          <h2 className="text-lg sm:text-2xl font-bold font-nunitoSans">
            {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "edicion" && (
        <div
          className={`text-fondoBlanco mb-10 ${
            paso === 2 || (paso === 4 && watch("servicio"))
              ? "sm:mx-52 mx-7 md:mx-10"
              : ""
          } flex justify-between sm:pb-6 items-center`}
        >
          <h2 className="text-xl sm:text-3xl flex-shrink w-[70%] font-bold">
            Servicio de edición / creación de video
          </h2>
          <h2 className="text-xl flex-grow sm:text-2xl font-bold font-nunitoSans text-right">
            {paso} de 4
          </h2>
        </div>
      )}
      {paso == 2 && watch("servicio") === "ambos" && (
        <div
          className={`text-fondoBlanco mb-10 ${
            paso === 2 || (paso === 4 && watch("servicio"))
              ? "sm:mx-52 mx-7 md:mx-10"
              : ""
          } flex justify-between pb-6 items-center`}
        >
          <h2 className="text-xl sm:text-3xl flex-shrink w-[70%] font-bold">
            Servicio de fotografía y edición de video
          </h2>
          <h2 className="text-xl flex-grow sm:text-2xl font-bold font-nunitoSans text-right">
            {paso} de 4
          </h2>
        </div>
      )}
      {paso == 3 && (
        <div
          className={`text-fondoBlanco mb-10 flex justify-between sm:pb-6 items-center`}
        >
          <h2 className="text-xl sm:text-3xl font-bold">
            Servicio de fotografía
          </h2>
          <h2 className="text-xl sm:text-2xl font-bold font-nunitoSans">
            {paso} de 4
          </h2>
        </div>
      )}
      {paso == 4 && (
        <div
          className={`text-fondoBlanco mb-10 flex justify-between sm:pb-6 items-center md:mx-10`}
        >
          <h2 className="text-xl sm:text-3xl font-bold">
            Servicio de fotografía
          </h2>
          <h2 className="text-xl sm:text-2xl font-bold font-nunitoSans">
            {paso} de 4
          </h2>
        </div>
      )}

      {/**Formulario */}
      <div className="backdrop-blur-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${
            paso === 2 || (paso === 4 && watch("servicio"))
              ? "md:mx-10"
              : "px-9"
          } bg-formBackground rounded-[32px] font-nunitoSans text-fondoBlanco text-3xl min-h-[372px] backdrop-shadow-xl`}
        >
          {/**Encabezados de Formulario */}
          {paso == 0 && (
            <div className="flex justify-between py-10 font-nunitoSans">
              <h2 className="text-xl sm:text-2xl font-bold">
                ¿Qué tipo de servicio necesitás?
              </h2>
            </div>
          )}
          {paso == 1 && (
            <div className="py-8">
              <h2 className="text-base sm:text-left text-center sm:text-2xl font-bold">
                Ingresá tus datos de contacto
              </h2>
            </div>
          )}

          {/**FieldSets*/}
          {paso == 0 && (
            <fieldset
              id="paso 0"
              className="flex lg:flex-row flex-col gap-6 sm:gap-4 w-full justify-between"
            >
              <input
                type="radio"
                id="fotografia"
                className="peer/draft hidden"
                value="fotografia"
                {...register("servicio")}
              />

              <label
                htmlFor="fotografia"
                className="rounded-[15px] border-2 border-inputBorderSelected bg-[#424242] py-[11px] text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold text-nunitoSans  flex justify-center cursor-pointer peer-checked/draft:bg-inputBorderSelected peer-checked/draft:hover:bg-principalHover peer-checked/draft:text-textoInput grow hover:bg-principalHover hover:text-fondoGris transition-all duration-200 align-middle"
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
                className="rounded-[15px] border-2 border-inputBorderSelected bg-[#424242cc] py-[11px] text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold text-nunitoSans  flex justify-center cursor-pointer peer-checked/draft1:bg-inputBorderSelected peer-checked/draft1:hover:bg-principalHover peer-checked/draft1:text-textoInput grow hover:bg-principalHover hover:text-fondoGris transition-all duration-200"
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
                className="rounded-[15px] border-2 border-inputBorderSelected bg-[#424242cc] py-[11px] text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold text-nunitoSans  flex justify-center cursor-pointer peer-checked/draft2:bg-inputBorderSelected peer-checked/draft2:hover:bg-principalHover peer-checked/draft2:text-textoInput grow hover:bg-principalHover hover:text-fondoGris transition-all duration-200"
              >
                Ambos
              </label>
            </fieldset>
          )}
          {/** paso 1 */}
          {paso == 1 && (
            <fieldset
              id="paso1"
              className="flex flex-col min-w-56 sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-x-24 gap-y-4 text-base sm:text-xl"
            >
              <label htmlFor="nombre" className="flex flex-col pt-3 sm:pt-0">
                Nombre *
                <input
                  {...register("nombre", { required: true })}
                  id="nombre"
                  className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-lg px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-[2px] outline-principalHover placeholder:italic placeholder:text-[14px]"
                  maxLength={30}
                  onBlur={() => handleBlurValidation("nombre")}
                  placeholder="Ingresá tu(s) nombre(s)"
                />
                {errors.nombre && (
                  <p className="text-red-600 text-xs">
                    {errors.nombre.message}
                  </p>
                )}
              </label>
              <label htmlFor="apellido" className="flex flex-col pt-3 sm:pt-0">
                Apellido*
                <input
                  {...register("apellido", {
                    required: true,
                  })}
                  id="apellido"
                  className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover placeholder:italic"
                  maxLength={30}
                  onBlur={() => handleBlurValidation("apellido")}
                  placeholder="Ingresá tu(s) apellido(s)"
                />
                {errors.apellido && (
                  <p className="text-red-600 text-xs">
                    {errors.apellido.message}
                  </p>
                )}
              </label>
              <label htmlFor="telefono" className="flex flex-col pt-3 sm:pt-0">
                Teléfono*
                <Controller
                  name="telefono1"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      className="mt-2 border-[1.5px] border-inputBorderSelected w-full rounded-2xl h-10 text-xl px-4 py-1  bg-formBackground 2xl:grow focus:outline outline-3 outline-principalHover"
                      placeholder="ingrese su telefono"
                      onChange={onChange}
                      countryCallingCodeEditable={false}
                      defaultCountry="AR"
                      international
                      value={value?.toString()}
                      onBlur={() => handleBlurValidation("telefono1")}
                    />
                  )}
                />
                {errors.telefono1 && (
                  <p className="text-red-600 text-xs">
                    {errors.telefono1.message}
                  </p>
                )}
              </label>
              <label htmlFor="email" className="flex flex-col pt-3 sm:pt-0">
                Email*
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
              <div className="sm:col-span-2 w-full pt-3 sm:pt-0">
                <h2 className="text-center font-bold">
                  ¿Por qué medio querés recibir tu presupuesto?*
                </h2>
                <div className="flex justify-center gap-8 sm:gap-20 py-5">
                  <label
                    htmlFor="whatsapp"
                    className="flex  gap-1 items-center text-base "
                  >
                    <input
                      {...register("contactoW")}
                      type="checkbox"
                      className="appearance-none w-7 h-7 border-2 border-inputBorderSelected rounded-sm checked:bg-checkBackground"
                    />{" "}
                    Whatsapp
                  </label>
                  <label
                    htmlFor="mail"
                    className="flex gap-1 items-center text-base"
                  >
                    <input
                      {...register("contactoM")}
                      type="checkbox"
                      className="appearance-none w-7 h-7 border-2 border-inputBorderSelected rounded-sm checked:bg-checkBackground"
                    />{" "}
                    Mail
                  </label>
                </div>
              </div>
            </fieldset>
          )}
          {/** paso 2a */}
          {paso == 2 && watch("servicio") === "fotografia" && (
            <fieldset id="paso2" className="flex flex-col gap-6 pb-10 md:px-36">
              <label
                htmlFor="servicio"
                className="flex flex-col text-base font-bold text-center px-7"
              >
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
                          margin: "20px 0",
                          overlay: "none",
                          textAlign: "left",
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
                          textAlign: "left",
                        }),
                      }}
                      // Otros props de React Select según tus necesidades
                    />
                  )}
                ></Controller>
              </label>
              <label
                htmlFor="ciudad"
                className="flex flex-col text-base font-bold px-7"
              >
                ¿En qué ciudad se va a realizar la sesión fotográfica?*
                <input
                  {...register("ciudad", { required: true })}
                  id="ciudad"
                  className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                  maxLength={30}
                  onBlur={() => handleBlurValidation("ciudad")}
                  placeholder="Por ej.: Almagro, Buenos Aires"
                />
                {errors.ciudad && (
                  <p className="text-red-600 text-xs">
                    {errors.ciudad.message}
                  </p>
                )}
              </label>
              <label
                htmlFor="fecha"
                className="flex flex-col text-base font-bold px-7"
              >
                ¿En qué fecha estimada se va a realizar la sesión de fotos?*
                <div className="flex relative sm:max-w-[50%] border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover">
                  <Image
                    src="/assets/img/calendar_month_FILL0_wght400_GRAD0_opsz40 1.svg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute top-[50%] translate-y-[-50%] sm:left-6 left-1"
                  />
                  <input
                    type="date"
                    {...register("fecha", { required: true })}
                    id="fecha"
                    className="appearance-none border-l-[1.5px] border-inputBorderSelected text-center mx-auto text-base sm:text-xl  text-fondoBlanco bg-formBackground outline-none  py-3"
                    min={today}
                  />
                </div>
              </label>
              <label
                htmlFor="duracion"
                className="flex flex-col text-base font-bold px-7"
              >
                ¿Cuántas horas necesitás el servicio?*
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="cantidadFotos"
                className="flex flex-col text-base font-bold px-7"
              >
                ¿Cuántas fotos necesitás?*
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="formato"
                className="flex flex-col text-base font-bold px-7"
              >
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
            <fieldset
              id="paso2"
              className="flex flex-col gap-6 sm:px-32 md:px-7"
            >
              <label
                htmlFor="servicio"
                className="flex flex-col text-base font-bold text-center px-7"
              >
                ¿Qué tipo de servicio de video necesitás?*
                <Controller
                  name="tipoServAudVis"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="servicio"
                      placeholder={"Seleccioná un tipo de servicio de video"}
                      {...field}
                      options={servAudiovisualOptions}
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          boxSizing: "content-box",
                          backgroundColor: "#424242",
                          borderRadius: "10px",
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="ciudad"
                className="flex flex-col text-base font-bold text-center px-7"
              >
                ¿En qué ciudad se va a realizar la sesión de video?*
                <input
                  {...register("ciudad", { required: true })}
                  id="ciudad"
                  className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-base sm:text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                  onBlur={() => handleBlurValidation("ciudad")}
                  placeholder="Por ej.: Almagro, Buenos Aires"
                />
                {errors.ciudad && (
                  <p className="text-red-600 text-xs">
                    {errors.ciudad.message}
                  </p>
                )}
              </label>
              <label
                htmlFor="fecha"
                className="flex flex-col text-base font-bold text-center px-7"
              >
                ¿En qué fecha estimada se va a realizar la sesión de video?*
                <div className="flex relative max-w-[60%] sm:max-w-[50%] border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover">
                  <Image
                    src="/assets/img/calendar_month_FILL0_wght400_GRAD0_opsz40 1.svg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute top-[50%] translate-y-[-50%] sm:left-6 left-1"
                  />
                  <input
                    type="date"
                    {...register("fecha", { required: true })}
                    id="fecha"
                    className="appearance-none border-l-[1.5px] border-inputBorderSelected text-center mx-auto text-base sm:text-xl  text-fondoBlanco bg-formBackground outline-none  py-3"
                    min={today}
                  />
                </div>
              </label>
              <label
                htmlFor="duracion"
                className="flex flex-col text-base font-bold text-center px-7"
              >
                ¿Cuántas horas necesitás el servicio?*
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="cantidadVideos"
                className="flex flex-col text-base font-bold text-center px-7"
              >
                ¿Cuántos videos necesitás?*
                <Controller
                  name="cantidadVideos"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="cantidadVideos"
                      placeholder={"Indicá cuántos videos necesitas"}
                      {...field}
                      options={cantidadesVideoEdicion}
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          boxSizing: "content-box",
                          backgroundColor: "#424242",
                          borderRadius: "10px",
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
            <fieldset
              id="paso2"
              className="flex flex-col gap-6 sm:px-32 md:px-7 px-7"
            >
              <label
                htmlFor="servicio"
                className="flex flex-col text-base font-bold text-center"
              >
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="servicio1"
                className="flex flex-col text-base font-bold text-center"
              >
                ¿Qué tipo de servicio de video necesitás?*
                <Controller
                  name="tipoServAudVis"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="servicio1"
                      placeholder={"Seleccioná un tipo de servicio de video"}
                      {...field}
                      options={servAudiovisualOptions}
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          boxSizing: "content-box",
                          backgroundColor: "#424242",
                          borderRadius: "10px",
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="ciudad"
                className="flex flex-col text-base font-bold text-center"
              >
                ¿En qué ciudad se va a realizar la sesión de fotos / video?*
                <input
                  {...register("ciudad", { required: true })}
                  id="ciudad"
                  className="mt-2 border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-base sm:text-xl px-4 py-3 text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover"
                  onBlur={() => handleBlurValidation("ciudad")}
                  placeholder="Por ej.: Almagro, Buenos Aires"
                />
                {errors.ciudad && (
                  <p className="text-red-600 text-xs">
                    {errors.ciudad.message}
                  </p>
                )}
              </label>
              <label
                htmlFor="fecha"
                className="flex flex-col text-base font-bold text-center"
              >
                ¿En qué fecha estimada se va a realizar la sesión de fotos /
                video?*
                <div className="flex relative max-w-[60%] sm:max-w-[50%] border-[1.5px] border-inputBorderSelected rounded-2xl h-11 text-xl text-fondoBlanco bg-formBackground focus:outline outline-3 outline-principalHover">
                  <Image
                    src="/assets/img/calendar_month_FILL0_wght400_GRAD0_opsz40 1.svg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute top-[50%] translate-y-[-50%] sm:left-6 left-1"
                  />
                  <input
                    type="date"
                    {...register("fecha", { required: true })}
                    id="fecha"
                    className="appearance-none border-l-[1.5px] border-inputBorderSelected text-center mx-auto text-base sm:text-xl  text-fondoBlanco bg-formBackground outline-none  py-3"
                    min={today}
                  />
                </div>
              </label>
              <label
                htmlFor="duracion"
                className="flex flex-col text-base font-bold text-center"
              >
                ¿Cuántas horas necesitás el servicio?*
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="cantidad"
                className="flex flex-col text-base font-bold text-center"
              >
                ¿Cuántas fotos necesitás?*
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="formato"
                className="flex flex-col text-base font-bold text-center"
              >
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
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
              <label
                htmlFor="cantidad2"
                className="flex flex-col text-base font-bold text-center"
              >
                ¿Cuántos videos necesitás?*
                <Controller
                  name="cantidadVideos"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="cantidadVideos"
                      placeholder={"Indicá cuántos videos necesitas"}
                      {...field}
                      options={cantidadesVideoAmbos}
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          boxSizing: "content-box",
                          backgroundColor: "#424242",
                          borderRadius: "10px",
                          padding: "0 12px",
                          border: "1px solid #FCCD35",
                          color: "#f2f2f2",
                          fontSize: "16px",
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
            <fieldset className="flex flex-col gap-4 md:px-7">
              <h2 className="text-fondoBlanco font-nunitoSans text-base sm:text-2xl font-bold text-center sm:text-left">
                Información adicional (opcional)
              </h2>
              <label className="flex flex-col text-fondoBlanco font-nunitoSans text-lg font-bold">
                <textarea
                  className="my-4 bg-fondoGris rounded-2xl h-64 sm:h-96 border p-2 sm:p-6 border-inputBorderSelected font-nunitoSans font-light italic text-base text-white"
                  {...register("comentarios")}
                  placeholder="Detallá cualquier información relevante relacionada con tu
                pedido"
                  maxLength={2000}
                />
              </label>
            </fieldset>
          )}
          {/** paso 4 */}
          {paso === 4 && (
            <fieldset className="flex flex-col gap-8 px-4 pb-12 sm:py-auto sm:px-32 md:px-10">
              <h2 className="text-fondoBlanco font-nunitoSans text-xl sm:text-2xl font-bold">
                Revisá que la información sea correcta
              </h2>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-2">
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg">
                    Nombre
                  </p>
                  <p className="font-nunito text-base sm:text-lg font-bold">
                    {watch("nombre")}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg">
                    Apellido
                  </p>
                  <p className="font-nunito text-base sm:text-lg font-bold">
                    {watch("apellido")}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-4 grow">
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg">
                    Whatsapp
                  </p>
                  <p className="font-nunito text-base sm:text-lg font-bold">
                    {watch("telefono1")}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-left">
                    Email
                  </p>
                  <p className="font-nunito text-base sm:text-lg font-bold">
                    {watch("email")}
                  </p>
                </div>
              </div>
              {watch("tipoServFoto") && (
                <div>
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2 ">
                    ¿Qué tipo de servicio fotográfico necesitás?
                  </p>
                  <p className="font-nunito text-base text-center sm:text-left sm:text-lg font-bold">
                    {watch("tipoServFoto.label")}
                  </p>
                </div>
              )}
              {watch("tipoServAudVis") && (
                <div>
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                    ¿Qué tipo de servicio de video necesitás?
                  </p>
                  <p className="font-nunito text-base text-center sm:text-left sm:text-lg font-bold">
                    {watch("tipoServAudVis.label")}
                  </p>
                </div>
              )}
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                  {watch("servicio") === "fotografia" &&
                    "¿En qué ciudad se va a realizar la sesión fotográfica?"}
                  {watch("servicio") === "edicion" &&
                    "¿En qué ciudad se va a realizar la sesión de video?"}
                  {watch("servicio") === "ambos" &&
                    "¿En qué ciudad se va a realizar la sesión de fotos / video?"}
                </p>
                <p className="font-nunito text-base text-center sm:text-left sm:text-lg font-bold">
                  {watch("ciudad")}
                </p>
              </div>
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                  {watch("servicio") === "fotografia" &&
                    "¿En qué fecha estimada se va a realizar la sesión de fotos?"}
                  {watch("servicio") === "edicion" &&
                    "¿En qué fecha estimada se va a realizar la sesión de video?"}
                  {watch("servicio") === "ambos" &&
                    "¿En qué fecha estimada se va a realizar la sesión de fotos / video?"}
                </p>
                <p className="font-nunito text-base text-center sm:text-left sm:text-lg font-bold">
                  {watch("fecha").toString().slice(-2)}
                  {"/"}
                  {watch("fecha").toString().slice(-5, -3)}
                  {"/"}
                  {watch("fecha").toString().slice(0, 4)}
                </p>
              </div>
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                  {watch("servicio") === "fotografia" &&
                    "Tiempo estimado de la cobertura del evento / sesión fotográfica"}
                  {watch("servicio") === "edicion" &&
                    "Tiempo estimado de la cobertura del evento / sesión de video"}
                  {watch("servicio") === "ambos" &&
                    "Tiempo estimado de la cobertura del evento o sesión de fotos / video"}
                </p>
                <p className="font-nunito text-base text-center sm:text-left sm:text-lg font-bold">
                  {watch("duracion.label")}
                </p>
              </div>
              {(watch("servicio") === "fotografia" ||
                watch("servicio") === "ambos") && (
                <div>
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                    ¿Cuántas fotos necesitás?
                  </p>
                  <p className="font-nunito text-center sm:text-left text-base sm:text-lg font-bold">
                    {watch("cantidadFotos.label")}
                  </p>
                </div>
              )}
              {(watch("servicio") === "fotografia" ||
                watch("servicio") === "ambos") && (
                <div>
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                    ¿En qué formato necesitás las fotos?
                  </p>
                  <p className="font-nunito text-center sm:text-left text-base sm:text-lg font-bold">
                    {watch("formato.label")}
                  </p>
                </div>
              )}
              {watch("servicio") === "edicion" ||
                (watch("servicio") === "ambos" && (
                  <div>
                    <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                      ¿Cuántos videos necesitás?
                    </p>
                    <p className="font-nunito text-center sm:text-left text-base sm:text-lg font-bold">
                      {watch("cantidadVideos.label")}
                    </p>
                  </div>
                ))}

              {watch("comentarios") && (
                <div>
                  <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                    Detallá cualquier información relevante relacionada con tu
                    pedido
                  </p>
                  <p className="font-nunito text-center sm:text-left text-base sm:text-lg font-bold max-w-[50ch]">
                    {watch("comentarios")}
                  </p>
                </div>
              )}
              <div>
                <p className="text-fondoBlanco font-nunitoSans text-base sm:text-lg text-center sm:text-left pb-2">
                  ¿Por qué medio querés recibir tu presupuesto?
                </p>
                <p className="font-nunito text-center sm:text-left text-lg font-bold">
                  {watch("contactoW") ? "Whatsapp" : ""}
                  {watch("contactoM") && watch("contactoW") ? "-" : ""}{" "}
                  {watch("contactoM") ? "Mail" : ""}
                </p>
              </div>
            </fieldset>
          )}

          {paso === 3 && (
            <p
              className={`font-nunitoSans text-[15px] font-normal sm:px-36 md:px-7 text-right ${
                watch("comentarios")?.length === 2000 ? "text-red-600" : ""
              }`}
            >
              {watch("comentarios") ? watch("comentarios")?.length : "0"} / 2000
            </p>
          )}
        </form>
        {paso >= 1 && paso <= 2 && (
          <p
            className={`font-nunitoSans text-base font-bold ${
              paso == 3
                ? "px-36"
                : "sm:px-56  sm:text-left text-fondoBlanco text-center pt-5"
            }`}
          >
            (*) Campos obligatorios
          </p>
        )}
      </div>
      {/*Botones para volver o pasar al siguiente formulario */}
      <div className="flex flex-col sm:flex-wrap sm:justify-around sm:items-center md:gap-4">
        {/** Boton extra */}
        <CustomButton
          title="Editar información"
          styles={`${
            paso === 4 ? " bg-fondoBlanco/50" : "hidden"
          } text-fondoBlanco rounded-[40px] px-14 md:px-10 py-4 font-merriwather font-bold text-base md:text-lg lg:text-2xl mt-5 sm:mt-16 hover:bg-principalHover flex items-center justify-center md:min-w-72`}
          onClick={() => {
            if (paso === 0) {
              navigate.push("/contacto");
            } else if (paso === 4) {
              setPaso(1);
            } else {
              setPaso(paso - 1);
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around sm:gap-4 md:w-full">
          {/**BOTON VOLVER */}
          <CustomButton
            title="Volver"
            styles="hidden sm:block bg-principal hover:bg-principalHover rounded-[40px] px-14 md:px-10 py-3 font-merriwather font-bold text-base md:text-lg lg:text-2xl mt-5 sm:mt-16 hover:bg-principalHover sm:min-w-60"
            onClick={() => {
              if (paso === 0) {
                navigate.push("/contacto");
              } else {
                setPaso(paso - 1);
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          <CustomButton
            title={`${paso == 4 ? "Enviar formulario" : "Continuar"}`}
            disabled={!habilitar}
            styles={`${
              habilitar
                ? "bg-principal hover:bg-principalHover"
                : "bg-backgroundDisabled cursor-not-allowed text-textoDisabled"
            } rounded-[40px] px-14 md:px-10 py-2 font-merriwather font-bold text-base sm:text-lg md:text-xl lg:text-2xl mt-5 sm:mt-16 sm:w-auto w-full sm:min-w-60`}
            onClick={() => {
              if (paso === 4) {
                handleSubmit(onSubmit)();
              } else {
                handleContinuar();
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Form;
