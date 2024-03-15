import AboutMe from "./Componentes/aboutme/AboutMe";
import Banner from "./Componentes/Banner";
import CallToAction from "./Componentes/call-to-action/CallToAction";
import Testimonials from "./Componentes/Slideshow/Testimonials";
import Slideshow from "./Componentes/Slideshow/Slider";

export default function Home() {
  const callToActionProps = {
    header: "¿Necesitás contenido que sea inolvidable?",
    imageUrl: "/images/call-to-action/profile-picture.png",
    buttonText: "Contactame",
    imageSize: 410,
  };



  return (
      <>
      <Slideshow />
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Testimonials></Testimonials>
      <div className="mb-[8rem]">
        <CallToAction
          header={callToActionProps.header}
          imageUrl={callToActionProps.imageUrl}
          buttonText={callToActionProps.buttonText}
          imageSize={callToActionProps.imageSize}
        />
      </div>
      </>
  );
}
