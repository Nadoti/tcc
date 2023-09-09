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
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-items: center;
  }
`
// export const ContainerContent = styled.div``
// export const ContainerContent = styled.div``