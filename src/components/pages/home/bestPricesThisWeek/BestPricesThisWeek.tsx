"use client"
import { CardBestPriceThisWeek } from "@/components/cardBestPriceThisWeek/CardBestPriceThisWeek"
import * as S from "./styles"

export function BestPricesThisWeek() {

  return (
    <S.Container>
      <S.ContainerContent>
        <h2>Melhores preços desta semana</h2>
        <S.CardContent>
          <CardBestPriceThisWeek />
        </S.CardContent>
      </S.ContainerContent>
    </S.Container>
  )
}