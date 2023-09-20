import celular from "../../../public/bestPrice.png"
import Image from "next/image"
import Link from "next/link"
import * as S from "./styles"

export function CardBestPriceThisWeek() {

  return (
    <S.Container>
      <S.Img>
        <Image src={celular} alt="Celular" />
      </S.Img>
      <S.InfoContent>
        <S.Title>Smartphone Xiaomi Redmi Note 12 4GB RAM 128GB Câmera Tripla</S.Title>
        <S.DetailNameStore>Menor preço</S.DetailNameStore>
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