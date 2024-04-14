"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Images() {
  const [setHoveredW, setSetHoveredW] = useState<boolean>(false);
  const [setHoveredI, setSetHoveredI] = useState<boolean>(false);
  const handleSendMessageWhatssap = () => {
    const phoneNumberEncoded = encodeURIComponent(5491153748531);
    const messageEncoded = encodeURIComponent(
      "¡Hola, Santi! Estoy interesado en tus servicios. ¿Podrías darme información sobre "
    );
    window.open(`https://wa.me/${phoneNumberEncoded}?text=${messageEncoded}`);
  };
  return (
    <>
      <button
        onMouseEnter={() => setSetHoveredW(true)}
        onMouseLeave={() => setSetHoveredW(false)}
        onClick={handleSendMessageWhatssap}
      >
        {setHoveredW ? (
          <Image
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/whasshovered.png"
            alt=""
            width={100}
            height={100}
          />
        ) : (
          <Image
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/whass.png"
            alt=""
            width={100}
            height={100}
          />
        )}
      </button>
      <Link
        target="_blank"
        href="https://www.instagram.com/santicuore.ph/"
        onMouseEnter={() => setSetHoveredI(true)}
        onMouseLeave={() => setSetHoveredI(false)}
      >
        {setHoveredI ? (
          <Image
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/instahovered.png"
            alt=""
            width={100}
            height={100}
          />
        ) : (
          <Image
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/insta.png"
            alt=""
            width={100}
            height={100}
          />
        )}
      </Link>
    </>
  );
}
