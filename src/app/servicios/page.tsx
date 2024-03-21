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
    <section className="px-4 lg:px-40">
      <div className="grid grid-cols-5 gap-3 mb-3 items-stretch overflow-hidden lg:max-h-[550px] 2xl:max-h-[1160px]">
        <div className="col-span-2">
          <Image
            src={img01}
            alt="asd"
            className="object-cover rounded-xl lg:max-h-[550px]"
          />
        </div>
        <div
          className="col-span-3 grid grid-rows-2 gap-3 lg:max-h-[550px]"
        >
          <div>
            <Image
              src={img02}
              alt="asd"
              className="object-cover h-full rounded-2xl lg:max-h-[550px]"
            />
          </div>
          <div>
            <Image
              src={img03}
              alt="asd"
              className="object-cover h-full rounded-2xl lg:max-h-[550px]"
            />
          </div>
        </div>
      </div>

      <div className="mb-3 lg:max-h-[456px]">
        <Image src={img04} alt="asd" className="object-cover rounded-2xl lg:max-h-[456px]"/>
      </div>

      <div className="grid grid-cols-5 gap-3 mb-3 lg:max-h-[550px]">
        <div className="col-span-2 lg:max-h-[200px]">
          <Image src={img05} alt="asds" className="object-cover rounded-2xl lg:max-h-[200px]" />
        </div>
        <div className="col-span-3 lg:max-h-[550px]">
          <Image src={img06} alt="asds" className="object-contain rounded-2xllg:max-h-[550px]" />
        </div>
      </div>
      <div className="mb-3" style={{ maxHeight: "571px" }}>
        <Image src={img07} alt="asds" className="object-cover h-full rounded-2xl w-full" style={{ maxHeight: "571px" }}/>
      </div>
    </section>
  );
};

export default ServicesPage;
