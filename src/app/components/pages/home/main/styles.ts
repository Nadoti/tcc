import { styled } from "styled-components";



export const Container = styled.main`
  width: 100%;
  background: ${(props) => props.theme.colors?.secondary};
  padding-top: 80px;
`
export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1220px;
  height: 456px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 680px 480px;
  gap: 20px;
  padding: 0 1.25rem;
`
export const ImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;

  button {
    z-index: 10;
    background: none;
    position: absolute;
    top: 0;
    margin-top: 20px;
    margin-left: 20px;
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.colors?.white};
    border: 1px solid ${(props) => props.theme.colors?.white};
    border-radius: 20px;
    font-size: 1rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    transition: all .3s ease-in-out;

    &:hover {
      background: ${(props) => props.theme.colors?.white};
      color:  ${(props) => props.theme.colors?.black};
    }
  }

  img {
    width: 100%;
    position: absolute;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-items: center;
  }
`
export const InfoMain = styled.div`
  width: 100%;
  height: 252px;
  background: ${(props) => props.theme.colors?.["beige-400"]};
  border-radius: 20px;

  h1 {
    font-size: 32px;
    color: ${(props) => props.theme.colors?.["gray-700"]};
    font-weight: normal;
    padding: 0 20px;
    margin-top: 20px;

    span {
      color: ${(props) => props.theme.colors?.primary};
    }
  }

  p {
    font-size: 18px;
    padding: 0 20px 20px 20px;
  }
  `
export const InfoSecondary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

export const ContentSecondary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
export const ImageStyleSecondary = styled.button`
  width: 100%;
  position: relative;
  height: 182px;
  border-radius: 20px;
  overflow: hidden;

  h3 {
    position: absolute;
    z-index: 10;
    color: ${(props) => props.theme.colors?.white};
    bottom: 0;
    margin-bottom: 20px;
    margin-left: 20px;
    font-weight: normal;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  
  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    position: absolute;
    transition: all .2s ease-in-out;
  }
`