"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import CallToAction from "../call-to-action/CallToAction";
import CustomButton from "../CustomButton";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 pb-20 px-36 bg-formBackground rounded-[32px] font-nunitoSans text-3xl h-[400px]"
      >
        <div className="flex justify-between pb-6">
          <h2 className="text-2xl font-bold">Información de contacto</h2>
          {/* Aqui incoporar el paso */}
          <h2 className="text-xl">Paso 1 de x</h2>
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <fieldset className="grid grid-cols-2 grid-rows-2 gap-x-36 gap-y-5 text-xl">
          <label htmlFor="nombre" className="flex flex-col">
            Nombre
            <input
              {...register("example")}
              id="nombre"
              className="mt-3 border border-principalHover rounded-2xl h-16 text-xl px-4 py-3 text-fondoBlanco bg-inputBackground"
            />
          </label>

          {/* include validation with required or other standard HTML validation rules */}
          <label htmlFor="apellido" className="flex flex-col">
            Apellido
            <input
              {...register("exampleRequired", { required: true })}
              id="apellido"
              className="mt-3 border-[1.5px] border-principalHover rounded-2xl h-16 bg-inputBackground"
            />
          </label>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <label htmlFor="telefono" className="flex flex-col">
            Telefono
            <div className="flex gap-3">
              <input
                {...register("exampleRequired")}
                className="mt-3 border-[1.5px] border-principalHover rounded-2xl h-16 bg-inputBackground w-20"
                id="telefono"
              />
              <input
                {...register("exampleRequired")}
                className="mt-3 border-[1.5px] border-principalHover rounded-2xl h-16 bg-inputBackground grow"
              />
            </div>
          </label>
          <label htmlFor="email" className="flex flex-col">
            Email (opcional)
            <input
              type="email"
              className="mt-3 border-[1.5px] border-principalHover rounded-2xl h-16 bg-inputBackground"
            />
          </label>
        </fieldset>
      </form>
      <div className="flex justify-around">
        <CustomButton
          title="Volver"
          styles="bg-principal rounded-[40px] px-14 py-3 font-merriwather font-bold text-3xl mt-16 hover:bg-principalHover"
        />
        <CustomButton
          title="Continuar"
          styles="bg-principal rounded-[40px] px-14 py-3 font-merriwather font-bold text-3xl mt-16"
        />
      </div>
    </div>
  );
}
