import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors?.secondary};
`

export const AreaLogin = styled.div`
  width: 100%;
  max-width: 30rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme.colors?.white};
  border: 2px solid ${(props) => props.theme.colors?.primary};
  border-radius: 10px;

  input {
    padding: 8px;
    border-radius: 10px;
    outline: none;
    border: 2px solid ${(props) => props.theme.colors?.primary};

    &:focus {
    }
  }

  button {
    display: inline-block;
    width: 100%;
    padding: 8px 0;
    font-size: 1.125rem;
    font-weight: bold;
    border: 2px solid ${(props) => props.theme.colors?.primary};
    background: ${(props) => props.theme.colors?.primary};
    color: ${(props) => props.theme.colors?.white};
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border-radius: 10px;
    transition: all .2s ease-in-out;

    &:hover {
      background: ${(props) => props.theme.colors?.white};
      color: ${(props) => props.theme.colors?.primary};
    }
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    color: ${(props) => props.theme.colors?.["gray-200"]};
  }
`