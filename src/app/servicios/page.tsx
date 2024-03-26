import Image from "next/image";
import img01 from "../../../public/images/services/photography/img01.jpg";
import img02 from "../../../public/images/services/photography/img02.jpg";
import img03 from "../../../public/images/services/photography/img03.jpg";
import img04 from "../../../public/images/services/photography/img04.jpg";
import img05 from "../../../public/images/services/photography/img05.jpg";
import img06 from "../../../public/images/services/photography/img06.jpg";
import img07 from "../../../public/images/services/photography/img07.jpg";


const ServicesPage = () => {

  return (
    <section className="xl:max-w-screen-xl mx-auto mb-36">
      <div className="grid grid-cols-5 gap-3 mb-3 items-stretch overflow-hidden xl:max-h-[928px] text-fondoBlanco">
        <picture className="col-span-2 relative h-full w-full">
          <div className="texto_image absolute z-30 w-full h-full flex opacity-0 hover:opacity-100 flex-col text-center justify-center items-center cursor-pointer transition-all duration-200 hover:hover:bg-black/50">
            <h2 className="text-5xl mb-4 italic">Lorena</h2>
            <h3 className="text-3xl font-thin">Retrato Artístico</h3>
          </div>
          <Image
            src={img01}
            alt="asd"
            className="object-cover rounded-xl h-full xl:max-h-[928px]"
          />
        </picture>
        <div
          className="col-span-3 grid grid-rows-2 gap-3 xl:max-h-[928px]"
        >
          <div>
            <Image
              src={img02}
              alt="asd"
              className="object-cover h-full rounded-2xl xl:max-h-[464px]"
            />
          </div>
          <div>
            <Image
              src={img03}
              alt="asd"
              className="object-cover h-full rounded-2xl xl:max-h-[464px]"
            />
          </div>
        </div>
      </div>

      <div className="mb-3 xl:max-h-[456px]">
        <Image src={img04} alt="asd" className="object-cover rounded-2xl xl:max-h-[456px] object-top"/>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3 xl:max-h-[456px]">
        <div className="col-span-1 xl:max-h-[456px]">
          <Image src={img05} alt="asds" className="object-cover rounded-2xl xl:max-h-[456px] object-top" />
        </div>
        <div className="col-span-1 h-full">
          <Image src={img06} alt="asds" className="object-cover h-full rounded-2xl xl:max-h-[456px]" />
        </div>
      </div>
      <div className="mb-3 xl:max-h-[456px]">
        <Image src={img07} alt="asds" className="object-cover rounded-2xl xl:max-h-[456px] object-top"/>
      </div>
    </section>
  );
};

export default ServicesPage;
