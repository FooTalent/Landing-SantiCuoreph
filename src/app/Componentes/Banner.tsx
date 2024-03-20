"use client";
import Image from "next/image";
import bannerFotografia from '../../../public/images/banner.jpg'
import Link from "next/link";

const Banner = () => {

  return (
    <>
    <Link href="/servicios">
    <section className="h-max px-2 space-y-2 font-merriwather text-white  bg-black overflow-hidden relative hover:text-secundario ">
      <div className="absolute p-5 pt-16 right-0 left-0 top-0 z-30 flex h-fit w-fit">
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] lg:ml-20 ml-4  merriwather">
            Fotografía
          </h2>
        </div>
      <div
        className={`relative hover:scale-[1.2] flex w-full h-[500px]  transition-all ease-in-out cursor-pointer   `}
      >
       <Image
       src={bannerFotografia}
       width={4036}
       height={500}
       alt="terraza"
       >

       </Image>

      </div>
    </section>
    </Link>
    <Link href="/servicios/audiovisual">
    <section className="h-max px-2 space-y-2 font-merriwather text-white  bg-black overflow-hidden relative hover:text-secundario">
      <div className="absolute p-5 pt-16 top-0 z-30 flex h-fit w-fit">
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] lg:ml-20 ml-4 merriwather hover:secundario">
            Edición Audiovisual
          </h2>
        </div>
      <div                
        className={`relative hover:scale-[1.2]  flex  w-full h-[500px]   transition-all ease-in-out cursor-pointer `}
      >
          <video
            className="w-full object-cover object-bottom"
            loop
            autoPlay
            muted
            src="https://s3-figma-videos-production-sig.figma.com/video/1159262127674411291/TEAM/17de/6cd1/-61a8-4781-bdef-fd462c983666?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FHXQSgeVM5W9QF9udObiHm53zb6oZ1egVSEpdMoibsRdgf-a8tcw~mNYEiP~Mf7cgQswr5zyaeU1TA7wp-VsLTZPCb2f1iMEk85HIr2SwiEUnjti-w9TR9jNfi8HSnuRWpmxXWqHVjxxhwI5l14faOux0CRYcoFlncNiUmdoT8WZGXAnjod2pCqJtXbOoUDOQdoKJaPgdO6aCGzp6RhN1z2vEmzxKOFNyCiSFW~2QsL-IPjh~vpY14Hk0vW8SEzV1Q3XkIv3K-u0MU8staPync735z8LPCvj8puy5uDs2-M8f6PfMjTR9rVlmr-Et~NlN8ReGhivz~tQ~0aI5maQSQ__"
            
          />
      </div>
    </section>
    </Link>
    </>
  );
};

export default Banner;
