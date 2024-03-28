/*
if (sessionEncontrada) {
  console.log(`Sesión encontrada: ${sessionEncontrada.title}`);
} else {
  console.log(`No se encontró ninguna sesión con el path ${pathABuscar}`);
}
*/

import Image from "next/image";
import "./styles.css"
import Link from "next/link";
import CloseButton from "./close-btn"

type SessionInfoType = {
  title: string;
  subtitle: string;
  path: string;
  images: string[];
};

const sessionInfo: SessionInfoType[] = [
  {
    title: "Lorena",
    subtitle: "Retrato artístico",
    path: "lorena",
    images: [
        "/images/lorena/lor01.jpg",
        "/images/lorena/lor02.jpg",
        "/images/lorena/lor03.jpg",
        "/images/lorena/lor04.jpg",
        "/images/lorena/lor05.jpg",
    ],
  },
  {
    title: "AURA Gin",
    subtitle: "Fotografía comercial",
    path: "aura-gin",
    images: [
        "/images/aura/aura01.jpg",
        "/images/aura/aura02.jpg",
        "/images/aura/aura03.jpg",
        "/images/aura/aura04.jpg",
        "/images/aura/aura05.jpg",
        "/images/aura/aura06.jpg",
        "/images/aura/aura07.jpg",
        "/images/aura/aura08.jpg",
    ],
  },
];

const SessionPage = ({ params }: { params: { session: string } }) => {
  const path = params.session;
  const session = sessionInfo.find((session) => session.path === path);

  if (session) {
    return (
      <div className="bg-fondoNegro">
        <section className=" pt-32 xl:max-w-screen-xl mx-auto">
          <div className="flex justify-between">
            <div className="text-fondoBlanco">
              <h1 className="text-5xl merriwather italic font-bold">{session.title}</h1>
              <h2 className="text-3xl py-8 merriwather font-semibold">{session.subtitle}</h2>
            </div>
            <div>
              <Link href="/servicios"><div className="p-3 hover:rounded-md hover:bg-fondoGris"><CloseButton /></div></Link>
            </div>
          </div>

          <div className="session-container pb-20">
            {
                session.images.map((image, idx) => {
                    return <div key={idx} className="image-container">
                                <Image src={image} width={600} height={1000} alt="Image" />
                            </div>
                })
            }
          </div>
        </section>
      </div>
    );
  }
};

export default SessionPage;
