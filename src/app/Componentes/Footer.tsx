import Mail from "../Icon/Mail";
import Instagram from "../Icon/Instagram";
import Whatsapp from "../Icon/Whatsapp";
const Footer = () => {
  return (
    <>
      <footer className="bg-fondoGris flex flex-col justify-center items-center text-center text-fondoBlanco gap-3 p-10 overflow-hidden font-nunitoSans font-normal text-base">
        <h4 className="text-base lg:text-2xl font-bold">
          ¡Hablemos de tu proyecto!
        </h4>
        <picture className="flex flex-row justify-center items-center gap-8">
          <hr className="min-w-[500px] hidden lg:block"></hr>
          <a
            href="https://www.instagram.com/santicuore.ph/"
            target="_blank"
            className="p-2.5"
          >
            <Instagram />
          </a>
          <a href="mailto:santiagocuoreph@gmail.com" className="p-2.5">
            <Mail />
          </a>
          <a
            href="https://wa.me/5491153748531?text=https://api.whatsapp.com/send?phone=5491153748531&text=%C2%A1Hola%2C%20Santi!%20Estoy%20interesado%20en%20tus%20servicios.%20%C2%BFPodr%C3%ADas%20darme%20informaci%C3%B3n%20sobre%20&type=phone_number&app_absent=0"
            target="_blank"
            className="p-2.5"
          >
            <Whatsapp size={40} />
          </a>
          <hr className="min-w-[500px] hidden lg:block"></hr>
        </picture>
        <p className="text-xs lg:text-base">
          Prohibida la reproducción total o parcial de este sitio y su
          contenido.
        </p>
        <p className="text-xs lg:text-base">
          Sitio web diseñado y desarrollado por{" "}
          <a
            href="https://www.linkedin.com/company/footalent/ "
            target="_Blank"
            className="font-bold"
          >
            Foo Talent Group.
          </a>
        </p>
        <p className="text-xs lg:text-base">
          <b>Santiago García. 2024.</b> Buenos Aires, Argentina.
        </p>
      </footer>
    </>
  );
};

export default Footer;
