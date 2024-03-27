"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const buttonStyle = {
  width: "50px",
  background: "none",
  border: "0px",
};
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="lg:mr-40 mr-4"
        style={{ ...buttonStyle }}
      >
        <div className="bg-slider w-14 h-14 flex justify-center items-center hover:bg-sliderHover rounded-full object-cover">
          <Image
            src="/assets/img/ArrowRight.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </button>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="lg:mr-40 -ml-8 "
        style={{ ...buttonStyle }}
      >
        <div className="bg-slider w-14 h-14 flex justify-center items-center hover:bg-sliderHover rounded-full">
          <Image
            src="/assets/img/ArrowLeft.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </button>
    </div>
  );
}
const Audiovisual = () => {
  const videoRef1: any = useRef<any>(null);
  const videoRef2: any = useRef<any>(null);
  const videoRef3: any = useRef<any>(null);
  const videoRef4: any = useRef<any>(null);
  const videoRef5: any = useRef<any>(null);

  const [carrousel, setCarrousel] = useState<boolean>(false);
  let sliderRef: any = useRef<Slider>(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (carrouselRef.current && !carrouselRef.current.contains(e.target)) {
        setCarrousel(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const carrouselRef: any = useRef<HTMLDivElement>();
  return (
    <section
      className={
        carrousel
          ? `backdrop-blur-xl  bg-black/15 flex absolute top-0 right-0 left-0 bottom-0 z-[9999] `
          : ""
      }
    >
      <div
        ref={carrouselRef}
        className={carrousel ? `w-[70%] md:w-[60%]  lg:w-[50%] mx-auto mt-10 ` : "hidden"}
      >
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/587c/fc4f/-df52-4356-853b-f2fcf5ce094e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oIxtYZfwYkaxfxF3~WzW58LU594fcs1RyrXgBsuv6XCOJNzXnnf09mVgZX0R31rfksTh3oCNrK1UWGctkR8EUoqTWiR9Sz1VjlHui3nLxmYeXAnD1Lu9YhyhbxwhxDc9S87JyfzMZcOi4i9mJ9Su6cvZREXPrfh7vGbkTMKzWy8NNS9RmNsIfw3ZPy0NPPAPqfbjSEbG2kauBqSghU6aiy6s9-boRDwY6wWrgU4q4-NP2AIEtjQnYCvrIHULSVBjR~mQiHuFmNPAAFksisBQRANpzA7e9cUpHp5cCE4nSb24MmVk7AH8UtsIhUN89Ii8EUPBr1JiSKanAB66NU1TSQ__"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className=" text-[48px]  italic">Spasio Kinesio</h1>
              <p className="text-fondoBlanco font-nunitoSans font-thin text-[10px] md:text-[30px]">
                Creación de video para redes
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/5c14/6b55/-aa9d-4724-bd79-6eef7dc35203?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXtR5x7WEG0N6HRUBWDd6DYZOPHdQtAMuhoF2lO-dmw9JTRhn2N1LfmNFKv02jfO7vx1xiPwZf8sJZ7WqJUTOCmBarnEjMMx1J4tl7w7VwwVoWp1EGUCCLVRBxlKanKuOH93bZtbLJuQ-Q5y7qcxUk0771IwYBSDa9KVYVekleQ9nDdZYwBeara1Xf9TnrWf4pMZG6v55WceIG2DWIJI3-R0C7mhIore66GfNEgbiv07zkFZKGR1gU15Gqe6Jdkkux2zzyRLGw48d3EPVWBPSUla2VI6VJpoGssOTKkNJFhUPczmTQ8-N8w4ng~Bo~vPOufj2ewRc4cgqRBwVIw36A__"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className=" text-[48px]  italic">
                TOCH en Camping de Palermo
              </h1>
              <p className="text-fondoBlanco font-nunitoSans font-thin text-[30px]">
                Creación de video para redes
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/ce1a/1b48/-85d7-44fb-9b96-104d788a4786?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvL4ujCfx3eOx4TKgOhlJpk1IGroqvJyr5YUAI59kPbl-rvCqpVe~WsK0HM3na09KL657VJvmN1JFZvmBdzjK9s4J7tOCL3NW8JV~tV~X3LXxUYiEz5Q0dapUCREQW1mHXIKBDx8gvEcXSPYV8wG92L4fpNNXNoVxJOTdYgJYBZ~te1bEmF1m6VDtcNT-5ywRokSu~u-6BohW4cel-fqxzVs8ykWl8fjMhDkO40o5girBXHCFh59rRRb8s1eTWfpKfDVuvVKgqPEpfpHQzp-MlF5tNtCl2kN9ThiQNPP-4zASsJRVfbOs~EJ~clRlVrT~Txo0CfdH2cIMIY9RQr5JQ__"
            />

            <div className="m-auto text-center text-fondoBlanco">
              <h1 className=" text-[48px]  italic">
                Backstage de fotos Pasado Pisado{" "}
              </h1>
              <p className="font-nunitoSans font-thin text-[30px]">
                Creación de video para redes{" "}
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              muted
              controls
              src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/cef7/36ca/-a141-40b3-8f53-79cd6c4aa1d9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RF65o0qclXmGSrETDL2rWGDJuR8Hiazy67IdHnJCyRjHoSJzlypw~nB3w9JdRNCKBFDyuClhlfoB6HtkuobTzPrC6vUrIUz3Eh97wQBm4I78j9nJnKDvU~Ap6LFbunn32Sfi~S9UeecOXtxMSeLuAlv4suUM012xJzqBzV5-HABVY9tGM8lxEsoM2IQA5hOgB3vqfhoKsLmZF-NLe7zFvfaGNTDYbusjNVb4jiywZM8hpNUfm85y4pLBv11-hkqi2TCpMmEIrdq-GKXwfY2yiFYQo3R2PVlmO-giv4uFyCCMAGrn9KoK3YQXA09RKSq1zuxSH5pe9d~oZevGRO~fVA__"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className=" text-[48px]  italic">
                Exposición en Centro Cultural Kirchner{" "}
              </h1>
              <p className="font-nunitoSans font-thin text-[30px]">
                Edición de video{" "}
              </p>
            </div>
          </div>
          <div className=" h-[450px] ">
            <video
              className="object-contain h-full mx-auto"
              loop
              onMouseEnter={(e) => e}
              muted
              controls
              src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/1319/0194/-ffd4-4bb6-8432-79cb045c2c58?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMVgihU5xxgDK1N2Du7osgVvPN7BW8Ar-7kltMtxCVcjjED8h~s-5n-2sK~gxCOZsGGC7SNmwUn5Iogcn1G5ll~Pw5jUNWKsgOK2oQVQ98g7OJsKRjw0fcBY5BuCAGuv~XZ2qmYZnxDOF9m2oxmqaL~wWHS1-E1ZRxud9cnoeHU4niBMBnE221LxDDW-rCC6jQXcqXJ5IoICYm-I2y1yggM213juGuhVwkz5PNwNAyoOgNjBtfihGK0F8cYOrFwpPhuSZghQ02m5FjUK9KL7TU8GMC8NX0-bDIgeQ-EpHEjU4z4un~hqwXo6gAuWYSBjWnz9iUjPfcqV019cYVcgHA__"
            />
            <div className="m-auto text-center text-fondoBlanco">
              <h1 className=" text-[48px]  italic">José Ladislao Biró </h1>
              <p className="font-nunitoSans font-thin text-[30px]">
                Edición de video{" "}
              </p>
            </div>
          </div>
        </Slider>
      </div>
      {!carrousel && (
        <div className={"gap-y-2 xl:max-w-screen-xl mx-auto flex flex-col"}>
          <div className="flex gap-x-2 font-merriwather italic text-fondoBlanco">
            <div
              onMouseEnter={() => videoRef1.current.play()}
              onMouseLeave={() => videoRef1.current.pause()}
              className="relative"
            >
              <video
                ref={videoRef1}
                className="h-[1344px] rounded-2xl object-cover  w-full"
                loop
                muted
                src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/587c/fc4f/-df52-4356-853b-f2fcf5ce094e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oIxtYZfwYkaxfxF3~WzW58LU594fcs1RyrXgBsuv6XCOJNzXnnf09mVgZX0R31rfksTh3oCNrK1UWGctkR8EUoqTWiR9Sz1VjlHui3nLxmYeXAnD1Lu9YhyhbxwhxDc9S87JyfzMZcOi4i9mJ9Su6cvZREXPrfh7vGbkTMKzWy8NNS9RmNsIfw3ZPy0NPPAPqfbjSEbG2kauBqSghU6aiy6s9-boRDwY6wWrgU4q4-NP2AIEtjQnYCvrIHULSVBjR~mQiHuFmNPAAFksisBQRANpzA7e9cUpHp5cCE4nSb24MmVk7AH8UtsIhUN89Ii8EUPBr1JiSKanAB66NU1TSQ__"
              />
              <div
                onClick={() => {
                  sliderRef.slickGoTo(0), setCarrousel(true);
                }}
                className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
              >
                <div className="m-auto">
                  <h1 className=" text-[48px]  italic">Spasio Kinesio</h1>
                  <p className="text-fondoBlanco font-nunitoSans font-thin text-[30px]">
                    Creación de video para redes
                  </p>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => videoRef2.current.play()}
              onMouseLeave={() => videoRef2.current.pause()}
              className="relative"
            >
              <video
                ref={videoRef2}
                className="h-[1344px] rounded-2xl object-cover  w-full"
                loop
                muted
                src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/5c14/6b55/-aa9d-4724-bd79-6eef7dc35203?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXtR5x7WEG0N6HRUBWDd6DYZOPHdQtAMuhoF2lO-dmw9JTRhn2N1LfmNFKv02jfO7vx1xiPwZf8sJZ7WqJUTOCmBarnEjMMx1J4tl7w7VwwVoWp1EGUCCLVRBxlKanKuOH93bZtbLJuQ-Q5y7qcxUk0771IwYBSDa9KVYVekleQ9nDdZYwBeara1Xf9TnrWf4pMZG6v55WceIG2DWIJI3-R0C7mhIore66GfNEgbiv07zkFZKGR1gU15Gqe6Jdkkux2zzyRLGw48d3EPVWBPSUla2VI6VJpoGssOTKkNJFhUPczmTQ8-N8w4ng~Bo~vPOufj2ewRc4cgqRBwVIw36A__"
              />
              <div
                onClick={() => {
                  sliderRef.slickGoTo(1), setCarrousel(true);
                }}
                className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
              >
                <div className="m-auto">
                  <h1 className=" text-[48px]  italic">
                    TOCH en Camping de Palermo
                  </h1>
                  <p className="text-fondoBlanco font-nunitoSans font-thin text-[30px]">
                    Creación de video para redes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2">
            <div
              onMouseEnter={() => videoRef3.current.play()}
              onMouseLeave={() => videoRef3.current.pause()}
              className="relative w-1/2 text-fondoBlanco "
            >
              <video
                ref={videoRef3}
                className="h-[1344px] rounded-2xl object-cover  w-full"
                loop
                muted
                src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/ce1a/1b48/-85d7-44fb-9b96-104d788a4786?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvL4ujCfx3eOx4TKgOhlJpk1IGroqvJyr5YUAI59kPbl-rvCqpVe~WsK0HM3na09KL657VJvmN1JFZvmBdzjK9s4J7tOCL3NW8JV~tV~X3LXxUYiEz5Q0dapUCREQW1mHXIKBDx8gvEcXSPYV8wG92L4fpNNXNoVxJOTdYgJYBZ~te1bEmF1m6VDtcNT-5ywRokSu~u-6BohW4cel-fqxzVs8ykWl8fjMhDkO40o5girBXHCFh59rRRb8s1eTWfpKfDVuvVKgqPEpfpHQzp-MlF5tNtCl2kN9ThiQNPP-4zASsJRVfbOs~EJ~clRlVrT~Txo0CfdH2cIMIY9RQr5JQ__"
              />
              <div
                onClick={() => {
                  sliderRef.slickGoTo(2), setCarrousel(true);
                }}
                className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
              >
                <div className="m-auto">
                  <h1 className=" text-[48px]  italic">
                    Backstage de fotos Pasado Pisado{" "}
                  </h1>
                  <p className="font-nunitoSans font-thin text-[30px]">
                    Creación de video para redes{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 gap-y-2 flex flex-col">
              <div
                onMouseEnter={() => videoRef4.current.play()}
                onMouseLeave={() => videoRef4.current.pause()}
                className="relative h-1/2 text-fondoBlanco "
              >
                <video
                  ref={videoRef4}
                  className=" object-cover rounded-2xl h-full w-full "
                  loop
                  muted
                  src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/cef7/36ca/-a141-40b3-8f53-79cd6c4aa1d9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RF65o0qclXmGSrETDL2rWGDJuR8Hiazy67IdHnJCyRjHoSJzlypw~nB3w9JdRNCKBFDyuClhlfoB6HtkuobTzPrC6vUrIUz3Eh97wQBm4I78j9nJnKDvU~Ap6LFbunn32Sfi~S9UeecOXtxMSeLuAlv4suUM012xJzqBzV5-HABVY9tGM8lxEsoM2IQA5hOgB3vqfhoKsLmZF-NLe7zFvfaGNTDYbusjNVb4jiywZM8hpNUfm85y4pLBv11-hkqi2TCpMmEIrdq-GKXwfY2yiFYQo3R2PVlmO-giv4uFyCCMAGrn9KoK3YQXA09RKSq1zuxSH5pe9d~oZevGRO~fVA__"
                />
                <div
                  onClick={() => {
                    sliderRef.slickGoTo(3), setCarrousel(true);
                  }}
                  className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
                >
                  <div className="m-auto">
                    <h1 className=" text-[48px]  italic">
                      Exposición en Centro Cultural Kirchner{" "}
                    </h1>
                    <p className="font-nunitoSans font-thin text-[30px]">
                      Edición de video{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={() => videoRef5.current.play()}
                onMouseLeave={() => videoRef5.current.pause()}
                className="relative h-1/2 text-fondoBlanco "
              >
                <video
                  ref={videoRef5}
                  className=" object-cover rounded-2xl h-full w-full"
                  loop
                  muted
                  src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/1319/0194/-ffd4-4bb6-8432-79cb045c2c58?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMVgihU5xxgDK1N2Du7osgVvPN7BW8Ar-7kltMtxCVcjjED8h~s-5n-2sK~gxCOZsGGC7SNmwUn5Iogcn1G5ll~Pw5jUNWKsgOK2oQVQ98g7OJsKRjw0fcBY5BuCAGuv~XZ2qmYZnxDOF9m2oxmqaL~wWHS1-E1ZRxud9cnoeHU4niBMBnE221LxDDW-rCC6jQXcqXJ5IoICYm-I2y1yggM213juGuhVwkz5PNwNAyoOgNjBtfihGK0F8cYOrFwpPhuSZghQ02m5FjUK9KL7TU8GMC8NX0-bDIgeQ-EpHEjU4z4un~hqwXo6gAuWYSBjWnz9iUjPfcqV019cYVcgHA__"
                />
                <div
                  onClick={() => {
                    sliderRef.slickGoTo(4), setCarrousel(true);
                  }}
                  className="absolute rounded-xl bg-black/50 top-0 h-full text-center  w-full flex flex-col opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 "
                >
                  <div className="m-auto">
                    <h1 className=" text-[48px]  italic">
                      José Ladislao Biró{" "}
                    </h1>
                    <p className="font-nunitoSans font-thin text-[30px]">
                      Edición de video{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Audiovisual;
