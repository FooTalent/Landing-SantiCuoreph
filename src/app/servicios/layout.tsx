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
  const activeStyle = "font-medium md:font-bold bg-principal md:bg-inherit p-1 px-3 rounded-full";
  const inactiveStyle = "font-light";

    return (
      <div className="pt-4">
      <section className="xl:w-[1236px] mx-auto max-w-screen-xl pb-4 border-b-2 border-black text-fondoNegro mx-4 xl:mx-auto md:mb-3 text-3xl xl:text-[48px]">
          <h1 className="font-semibold pt-[2.4em] pb-[1rem] md:pt-28 xl:pt-24 xl:pb-[.4em] font-merriwather">Servicios</h1>
          <div className="flex gap-4 md:gap-10 sm:justify-center xl:gap-32 font-nunitoSans">
                    {
                        services.map((service, idx) => {
                            const isActive: boolean = pathname.endsWith(service.href);
                            return <div key={idx}>
                                        <Link href={service.href}  className={`${isActive ? activeStyle : inactiveStyle} text-base sm:text-xl md:text-[30px]`}>{service.name}</Link>
                                        {
                                            isActive && <div className="md:pt-3 md:mx-auto md:w-[117px] md:border-b-8 md:border-yellow-500"></div>
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
