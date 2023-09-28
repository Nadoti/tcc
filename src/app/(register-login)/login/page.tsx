"use client"

import * as S from "@/styles/pages/login/styles"

export default function LoginPage() {

  return (
    <S.Container>
      <S.AreaLogin>
        <h1>Acesse sua conta</h1>
        <input type="text" placeholder="TESTE"/>
        <input type="text" placeholder="TESTE"/>
        <button>Entrar</button>
      </S.AreaLogin>
    </S.Container>
  )
}