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
        <div className="px-4 lg:px-40 font-merriwather font-bold">
            <section className="pb-8 border-b-4 border-black text-fondoNegro">
                <h1 className="py-16 text-8xl">Servicios</h1>
                <div className="flex gap-8 text-4xl">
                    {
                        services.map((service, idx) => {
                            const isActive: boolean = pathname.endsWith(service.href);
                            return <div>
                                        <Link href={service.href} key={idx} className={isActive ? activeStyle : inactiveStyle}>{service.name}</Link>
                                        {
                                            isActive && <div className="pt-[0.5em] mx-auto w-4/5 border-b-8 border-yellow-500"></div>
                                        }
                                    </div>
                        })
                    }
                </div>
            </section>
            {children}
            <section>
                <ServiceBanner></ServiceBanner>
            </section>
        </div>
    );

}

export default ServicesLayout;