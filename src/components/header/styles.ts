import { styled } from "styled-components";



export const HeaderContainer = styled.header`
    height: 160px;
    width: 100%;
    background: #F9F9E6;
`

export const ColorBg = styled.span`
    width: 100%;
    background: ${(props) => props.theme.colors?.primary};
    display: block;
    height: 20px;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1220px;
    padding: 0 1.25rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.5rem;

    a {
        font-size: 1.25rem;
        color: #A7A4A4;
    }
`

export const SearchLoginContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
`

export const SearchProduct = styled.button`
    display: flex;
    align-items: center;
    border: 2px solid ${(props) => props.theme.colors?.primary};
    border-radius: 10px;
    padding: 10px 20px;
    gap: 10px;
    background: none;
    font-size: 12px;
    color: ${(props) => props.theme.colors?.primary};
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme.colors?.primary};
        color: #F9F9E6;
    }
`