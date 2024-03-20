"use client";
import Image from "next/image";
import bannerFotografia from '../../../public/images/banner.jpg'

const Banner = () => {

  return (
    <section className="h-max px-2 space-y-2 font-merriwather text-white  bg-black overflow-hidden">
      <div
        className={`relative hover:scale-[1.2]  flex   w-full h-[500px]   transition-all ease-in-out    `}
      >
       <Image
       src={bannerFotografia}
       width={1536}
       height={500}
       alt="terraza"
       >

       </Image>

        <div className="absolute p-5 pt-16 right-0 left-0 top-0 z-30 flex h-full w-full transition-all duration-300 hover:bg-black/50 ">
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] lg:ml-20 ml-4 ">
            Fotografía
          </h2>
        </div>
      </div>
      <div                
        className={`relative hover:scale-[1.2]  flex   w-full h-[500px]   transition-all ease-in-out `}
      >
          <video
            className="w-full object-cover object-bottom"
            loop
            autoPlay
            muted
            src="https://player.vimeo.com/progressive_redirect/playback/348728035/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=9fd0f1b42276d7d0cdee48f924811ccb3f8288807f1504c5866b4b800fd8e02d"
            
          />
        <div className="absolute p-5 pt-16 top-0 z-30 flex h-full w-full  transition-all duration-200 hover:bg-black/50 ">
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] lg:ml-20 ml-4  ">
            Edición Audiovisual
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
