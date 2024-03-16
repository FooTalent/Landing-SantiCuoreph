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
    <section className="h-max px-2 space-y-2 font-merriwather text-white  bg-black overflow-hidden">
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
            src="https://player.vimeo.com/progressive_redirect/playback/394784792/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=c9080766c8f3cfcb6f9b63ed5cce3dd219a2bd1f378d1c7bb1d374521ef22d31"
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
            src="https://player.vimeo.com/progressive_redirect/playback/348728035/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=9fd0f1b42276d7d0cdee48f924811ccb3f8288807f1504c5866b4b800fd8e02d"
            
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
