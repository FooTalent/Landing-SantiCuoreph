"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ServiceBanner from "./components/ServiceBanner";
import banner01 from "../../../public/images/services/photography/banner/bannerphoto.jpg";
import banner02 from "../../../public/images/services/photography/img01.jpg";

const services = [
  { name: "Fotografía", href: "/servicios" },
  { name: "Edición audiovisual", href: "/servicios/audiovisual" },
];

const ServicesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const activeStyle = "font-extrabold";
  const inactiveStyle = "font-light";

    return (
        <div className="font-merriwather font-bold mx-auto">
            <section className="xl:max-w-screen-xl mx-auto pb-8 border-b-4 border-black text-fondoNegro mx-4 lg:mx-4 mb-3">
                <h1 className="text-3xl md:text-5xl xl:text-6xl pt-[5rem] pb-[1rem] md:pt-28 xl:pt-32 pl-5 sm:pl-16 md:pl-24 lg:pl-32 xl:pb-[.4em]">Servicios</h1>
                <div className="flex gap-8 pl-5 sm:pl-20 md:pl-28 lg:pl-36">
                    {
                        services.map((service, idx) => {
                            const isActive: boolean = pathname.endsWith(service.href);
                            return <div key={idx}>
                                        <Link href={service.href}  className={`${isActive ? activeStyle : inactiveStyle} text-2xl md:text-3xl xl:text-4xl`}>{service.name}</Link>
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
                <ServiceBanner />
            </section>
        </div>
  );
};

export default ServicesLayout;
