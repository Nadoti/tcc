import { styled } from "styled-components";


export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 180px;
  border-radius: 10px;
  `
export const Img = styled.div`
  margin-top: 10px;
  text-align: center;
`

export const InfoContent = styled.div`
  padding-left: 18px;
  margin: 10px 0;
`

export const Title = styled.h4`
  font-size: 12px;
  color: ${(props) => props.theme.colors?.["gray-400"]};
  margin-bottom: 6px;
  font-weight: normal;
`


export const DetailNameStore = styled.p`
  font-size: 10px;
  color: ${(props) => props.theme.colors?.["gray-400"]};
  margin-bottom: 5px;
`

export const DetailsPrice = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.colors?.["gray-300"]};
  }

  p {
    font-size: 10px;
    color: ${(props) => props.theme.colors?.["gray-300"]};
  }
`

export const BtnCompare = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #7E8129 0%, #494A0E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  a {
    font-size: 1rem;
    color: ${(props) => props.theme.colors?.white};
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    overflow: hidden;
  }
`

