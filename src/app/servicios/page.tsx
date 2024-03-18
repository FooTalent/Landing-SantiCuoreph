import Image from "next/image";
import img01 from "../../../public/images/services/photography/photo-01.png"
import img02 from "../../../public/images/services/photography/photo-02.png"
import img03 from "../../../public/images/services/photography/photo-03.png"

const ServicesPage = () => {
    return (
        <section className="flex flex-col">
            <div className="flex gap-3">
                <div className="">
                    <Image src={img01} alt="asd"  />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="">
                        <Image src={img02} alt="asd"  />
                    </div>
                    <div className="">
                        <Image src={img03} alt="asd"  />
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    );
}

export default ServicesPage;