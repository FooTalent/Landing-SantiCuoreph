"use client";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const heigthCard = 500;
  const [videoImage, setVideoImage] = useState(true);
  const video0Ref = useRef<HTMLVideoElement>(null);
  const [video0Playing, setVideoPlaying] = useState(false);
  const handleVideo = () => {
    if (video0Playing) {
      video0Ref.current?.pause();
    } else {
      video0Ref.current?.play();
    }
    setVideoPlaying(!video0Playing);
  };
  const video1Ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    video1Ref.current?.pause();
    video0Ref.current?.pause();
  }, []);
  const [video1Playing, setVideo1Playing] = useState(false);
  const handleVideo1 = () => {
    if (video1Playing) {
      video1Ref.current?.pause();
    } else {
      video1Ref.current?.play();
    }
    setVideo1Playing(!video1Playing);
  };

  return (
    <section className="h-max px-2 space-y-2 bg-black overflow-hidden">
      <div
        onMouseEnter={handleVideo}
        onMouseLeave={handleVideo}
        className={`relative hover:scale-[1.012] col-span-1 my-auto flex   w-full h-[${heigthCard}px]  bg-white transition-all ease-in-out hover:shadow-2xl smm:right-0 smm:top-15  smm:col-span-4   smm:h-[250px]`}
      >
        {!videoImage ? (
          <img
            className="h-full  w-full  object-cover"
            src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="1209hn"
          />
        ) : (
          <video
            className="w-full object-cover"
            loop
            autoPlay
            ref={video0Ref}
            muted
            src="https://vod-progressive.akamaized.net/exp=1710300796~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F508%2F18%2F452544778%2F1991951834.mp4~hmac=5deebafb47f76f68c01dad58f084824fd69b7137ff33aab95761e74c274e0930/vimeo-prod-skyfire-std-us/01/508/18/452544778/1991951834.mp4?filename=file.mp4"
          />
        )}

        <div className="absolute top-0 z-30 flex h-full w-full transition-all duration-200 hover:bg-black/50 ">
          <div className="flex flex-col  p-5 ">
            <h1 className="pb-2  text-5xl font-bold text-white smm:text-xl ">
              Fotografías
            </h1>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={handleVideo1}
        onMouseLeave={handleVideo1}
        className={`relative hover:scale-[1.012] col-span-1 my-auto flex   w-full h-[${heigthCard}px]  bg-white transition-all ease-in-out hover:shadow-2xl smm:right-0 smm:top-15  smm:col-span-4   smm:h-[250px]`}
      >
        {!videoImage ? (
          <img
            className="h-full  w-full  object-cover"
            src="https://images.pexels.com/photos/2354163/pexels-photo-2354163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        ) : (
          <video
            className="w-full object-cover"
            loop
            autoPlay
            ref={video1Ref}
            muted
            src="https://vod-progressive.akamaized.net/exp=1710299839~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2331%2F21%2F536658081%2F2539702061.mp4~hmac=3b2e75f30f5f44a8d21c7f207183927a49aff53b49dc08394e9751e6ff8385a7/vimeo-prod-skyfire-std-us/01/2331/21/536658081/2539702061.mp4?filename=file.mp4"
          />
        )}
        <div className="absolute top-0 z-30 flex h-full w-full transition-all duration-200 hover:bg-black/50 ">
          <div className="flex flex-col  p-5 ">
            <h1 className="pb-2  text-5xl font-bold text-white smm:text-xl ">
              Edición Audiovisual
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
