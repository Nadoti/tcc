'use client'
import { CardSmartphone } from "./components/cardSmartphone/CardSmartphone";
import { Header } from "./components/header/Header";
import { Main } from "./components/pages/home/main/Main";
import * as S from "./styles/pages/home/styles"


export default function Home() {
  return (
    <section>
      <Header />
      <Main />

      <S.Container>
        <S.ContainerContent>
          <h2>Smartphones em promoção</h2>
          <S.CardContent>
            <CardSmartphone />
          </S.CardContent>
        </S.ContainerContent>
      </S.Container>
    </section>
  )
}
