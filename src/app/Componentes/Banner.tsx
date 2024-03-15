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
    <section className="h-screen font-merriwather text-white  bg-black">
      <div
        onMouseEnter={handleVideo}
        onMouseLeave={handleVideo}
        className={`relative hover:scale-[0.97]  flex   w-full h-1/2   transition-all ease-in-out    `}
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
            src="https://vod-progressive.akamaized.net/exp=1710479431~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3651%2F14%2F368256550%2F1523668912.mp4~hmac=82b6437dc2f72299dd25092d4522a7cf16bc8c49fa4c93eb13e1570a02d3aeb9/vimeo-prod-skyfire-std-us/01/3651/14/368256550/1523668912.mp4?filename=file.mp4"
          />
        )}

        <div className="absolute p-5 right-0 left-0 top-0 z-30 flex h-full w-full transition-all duration-200 hover:bg-black/50 ">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] italic  ">
            Fotografías
          </h1>
        </div>
      </div>
      <div
        onMouseEnter={handleVideo1}
        onMouseLeave={handleVideo1}
        className={`relative hover:scale-[0.97]  flex   w-full h-1/2   transition-all ease-in-out `}
      >
        {!videoImage ? (
          <img
            className="h-full  w-full  object-cover"
            src="https://images.pexels.com/photos/2354163/pexels-photo-2354163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        ) : (
          <video
            className="w-full object-cover object-bottom"
            loop
            autoPlay
            ref={video1Ref}
            muted
            src="https://vod-progressive.akamaized.net/exp=1710479932~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F711%2F14%2F353558999%2F1436805237.mp4~hmac=93852619386b969a935f35e0e99b6fbdd84614171e08de698693761be654967e/vimeo-prod-skyfire-std-us/01/711/14/353558999/1436805237.mp4?filename=file.mp4"
          />
        )}
        <div className="absolute p-5 top-0 z-30 flex h-full w-full transition-all duration-200 hover:bg-black/50 ">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] italic   ">
            Edición Audiovisual
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
