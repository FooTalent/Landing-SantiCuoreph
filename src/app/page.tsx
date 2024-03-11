import AboutMe from "./Componentes/AboutMe";
import Banner from "./Componentes/Banner";
import CallToAction from "./Componentes/CallToAction";
import Hero from "./Componentes/Hero";
import Testimonials from "./Componentes/Testimonials";


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Banner></Banner>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </main>
  );
}
