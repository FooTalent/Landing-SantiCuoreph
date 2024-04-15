"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function Images() {
  const [setHoveredW, setSetHoveredW] = useState<boolean>(false);
  const [setHoveredI, setSetHoveredI] = useState<boolean>(false);
  const handleSendMessageWhatssap = () => {
    const phoneNumberEncoded = encodeURIComponent(5491153748531);
    const messageEncoded = encodeURIComponent(
      "¡Hola, Santi! Estoy interesado en tus servicios. ¿Podrías darme informacion sobre"
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
          <img
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/whasshovered.png"
            alt=""
          />
        ) : (
          <img
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/whass.png"
            alt=""
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
          <img
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/instahovered.png"
            alt=""
          />
        ) : (
          <img
            className="w-[89.46px] xl:w-[122px] hover:"
            src="/images/insta.png"
            alt=""
          />
        )}
      </Link>
    </>
  );
}
