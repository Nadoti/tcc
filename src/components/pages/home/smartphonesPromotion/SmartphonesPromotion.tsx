"use client"

import { CardSmartphone } from "@/components/cardSmartphone/CardSmartphone";
import * as S from "./styles"

export function SmartphonesPromotion() {

  return (
    <S.Container>
      <S.ContainerContent>
        <h2>Smartphones em promoção</h2>
        <S.CardContent>
          <CardSmartphone />
        </S.CardContent>
      </S.ContainerContent>
    </S.Container>
  )
}