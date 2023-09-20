"use client"
import Link from "next/link";
import * as S from './styles'
import Image from "next/image";
import logo from "../../../public/logo.svg"
import { BiSolidUser, BiSearchAlt2 } from "react-icons/bi";

export function Header() {

    return (
        <S.HeaderContainer>
            <S.ColorBg/>
            <S.HeaderContent>
                <Link href="/">
                    <Image 
                        src={logo}
                        alt="Logo"
                    />
                </Link>
                <S.NavContainer>
                    <Link href="/smartphones">Smartphones</Link>
                    <Link href="/notebook">Notebooks</Link>
                    <Link href="/tv">Tvs</Link>
                    <Link href="/categorias">Categorias</Link>
                </S.NavContainer>
                <S.SearchLoginContainer>
                    <S.SearchProduct>
                        <BiSearchAlt2 size={20} />
                        Procure o produto, marca ou modelo
                    </S.SearchProduct>
                    <Link href="/login">
                        <BiSolidUser size={30} color={"#7E8129"} />
                    </Link>
                </S.SearchLoginContainer>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}