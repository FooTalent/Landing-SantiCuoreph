"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ServiceBanner from "./components/ServiceBanner";


const services = [
    {name: "Fotografía", href: "/servicios"},
    {name: "Edición audiovisual", href: "/servicios/audiovisual"}
]

const ServicesLayout =({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const pathname = usePathname();
    const activeStyle = 'font-extrabold';
    const inactiveStyle = 'font-light'
    

    return (
        <div className="font-merriwather font-bold">
            <section className="xl:max-w-screen-xl mx-auto pb-8 border-b-4 border-black text-fondoNegro md:text-7xl 2xl:text-8xl pl-[1.5em] mb-[1em]">
                <h1 className="pt-[1.6em] pb-[.4em]">Servicios</h1>
                <div className="flex gap-8 text-4xl">
                    {
                        services.map((service, idx) => {
                            const isActive: boolean = pathname.endsWith(service.href);
                            return <div key={idx}>
                                        <Link href={service.href}  className={isActive ? activeStyle : inactiveStyle}>{service.name}</Link>
                                        {
                                            isActive && <div className="pt-[0.5em] mx-auto w-4/5 border-b-8 border-yellow-500"></div>
                                        }
                                    </div>
                        })
                    }
                </div>
            </section>
            {children}
            <section className="w-full">
                <ServiceBanner textBanner="Producciones fotográficas de calidad y la mejor cobertura para tus eventos"></ServiceBanner>
            </section>
        </div>
    );

}

export default ServicesLayout;