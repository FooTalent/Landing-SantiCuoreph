import AboutMe from "./Componentes/AboutMe";
import Banner from "./Componentes/Banner";
import CallToAction from "./Componentes/CallToAction";
import Hero from "./Componentes/Hero";
import Testimonials from "./Componentes/Testimonials";


export default function Home() {

  const callToActionProps = {
    header: "¿Necesitás contenido que sea inolvidable?",
    imageUrl: "/images/call-to-action/profile-picture.png",
    buttonText: "Contactame"
  }

  return (
    <main className="">
      <Hero/>
      <Banner></Banner>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Testimonials></Testimonials>
      <CallToAction
      header={callToActionProps.header}
      imageUrl={callToActionProps.imageUrl}
      buttonText={callToActionProps.buttonText} />
    </main>
  );
}
