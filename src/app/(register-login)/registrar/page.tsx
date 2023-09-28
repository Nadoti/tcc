"use client"

import * as S from "@/styles/pages/login/styles"


export default function RegisterPage() {
  
  return (
    <S.Container>
      <S.AreaLogin>
        <h1>Cadastre uma nova conta </h1>
        <input type="text" placeholder="TESTE"/>
        <input type="text" placeholder="TESTE"/>
        <button >Cadastrar</button>
      </S.AreaLogin>
    </S.Container>
  )
}