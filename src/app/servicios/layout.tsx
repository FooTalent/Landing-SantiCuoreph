"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ServiceBanner from "./Components/ServiceBanner";


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
    

    return (
        <div>
            <section>
                <h1>Servicios layout</h1>
                <h2>params: {pathname}</h2>
                <div>
                    {
                        services.map((service, idx) => {
                            const isActive: boolean = pathname.endsWith(service.href);
                            return <Link href={service.href} key={idx} className={isActive ? 'bg-green-500' : 'bg-red-500'}>{service.name}</Link>
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