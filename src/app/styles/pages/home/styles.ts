import { styled } from "styled-components";



export const Container = styled.section`
  width: 100%;
  background: ${(props) => props.theme.colors?.secondary};
  padding-top: 80px;
`


export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.25rem;
  
  h2 {
    margin-bottom: 40px;
  }
`

export const CardContent = styled.div``
// export const ContainerContent = styled.div``