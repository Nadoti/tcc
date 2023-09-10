import { styled } from "styled-components";



export const Container = styled.div`
  width: 100%;
  background: #F9F9E6;
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
  background: #D1D2A7;
  border-radius: 20px;

  h1 {
    font-size: 32px;
    color: #484545;
    font-weight: normal;
    padding: 0 20px;

    span {
      color: #7E8129;
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
// export const ContainerContent = styled.div``