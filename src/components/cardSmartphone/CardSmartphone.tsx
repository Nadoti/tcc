"use client"
import * as S from "./styles"
import celular from "../../../public/celular.png"
import Image from "next/image"
import Link from "next/link"

export function CardSmartphone() {

  return (
    <S.Container>
      <S.Img>
        <Image src={celular} alt="Celular" />
      </S.Img>
      <S.InfoContent>
        <S.Title>Smartphone Xiaomi Redmi Note 12 4GB RAM 128GB Câmera Tripla</S.Title>
        <S.DetailNameStore>Menor preço via Casas Bahia</S.DetailNameStore>
        <S.DetailsPrice>
          <span>R$ 999,99</span>
          <p>até 6x de R$ 166,66</p>
        </S.DetailsPrice>
      </S.InfoContent>
      <S.BtnCompare>
        <Link href="/">
          Compare
        </Link>
      </S.BtnCompare>
    </S.Container>
  )
}