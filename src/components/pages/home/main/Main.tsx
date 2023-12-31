import Image from "next/image";
import foto1 from "../../../../../public/foto1.png"
import foto2 from "../../../../../public/foto2.png"
import foto3 from "../../../../../public/foto3.png"
import * as S from './styles'

export function Main() {

  return (
    <S.Container>
      <S.ContainerContent>
        <S.ImageStyle >
          <button>Procure por lojas</button>
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
        <S.InfoSecondary>
          <S.InfoMain>
            <h1>Encontre o <span>menor</span> preço.<br/> No <span>menor</span> tempo.</h1>
            <p>Navegue na plataforma para encontrar diversos produtos com preços competitivos</p>
          </S.InfoMain>
          <S.ContentSecondary>
            <S.ImageStyleSecondary >
              <h3>Apple</h3>
              <Image 
                src={foto2}
                alt="foto2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                priority={false}
                placeholder="empty"
                fill
              />
            </S.ImageStyleSecondary>
            <S.ImageStyleSecondary >
              <h3>Samsung</h3>
              <Image 
                src={foto3}
                alt="foto3"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                priority={false}
                placeholder="empty"
                fill
              />
          </S.ImageStyleSecondary>
          </S.ContentSecondary>
        </S.InfoSecondary>
      </S.ContainerContent>
    </S.Container>
  )
}