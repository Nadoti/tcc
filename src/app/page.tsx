'use client'
import { Header } from "./components/header/Header";
import Image from "next/image";
import foto1 from "../../public/foto1.png"
import foto2 from "../../public/foto2.png"
import foto3 from "../../public/foto3.png"
import * as S from './styles/pages/home/styles'


export default function Home() {
  return (
    <section>
      <Header />
      <S.Container>
        <S.ContainerContent>
          <S.ImageStyle >
            <Image 
              src={foto1}
              alt="foto1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full mx-auto flex items-center justify-center"
              loading="lazy"
              priority={false}
              placeholder="empty"
              fill
            />
          </S.ImageStyle>
          <div>
            <div>
              <h1>Encontre o menor preço. No menor tempo</h1>
              <p>Navegue na plataforma para encontrar diversos produtos com preços competitivos</p>
            </div>
            <div>
              <S.ImageStyle >
                <Image 
                  src={foto2}
                  alt="foto2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full mx-auto flex items-center justify-center"
                  loading="lazy"
                  priority={false}
                  placeholder="empty"
                  fill
                />
              </S.ImageStyle>
              <S.ImageStyle >
                <Image 
                  src={foto3}
                  alt="foto3"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full mx-auto flex items-center justify-center"
                  loading="lazy"
                  priority={false}
                  placeholder="empty"
                  fill
                />
            </S.ImageStyle>
            </div>
          </div>
        </S.ContainerContent>
      </S.Container>


      <div></div>
    </section>
  )
}
