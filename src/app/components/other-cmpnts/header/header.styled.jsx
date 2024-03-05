import styled from "styled-components";
import { Svg } from "../../../styled-components-general/svg";

export const ContenedorPrincipal = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  aling-self: center;
  justify-content: space-around;
  z-index:2;
  top: ${(props) => props.ContactoTop || "0"};
  position: ${(props) => props.ContactoPosition || "none"};
  margin-top: ${(props) => props.ContactoMarginTop || "20px"};
`

export const ContenedorContacto = styled.div`
  padding:4px;
  display: flex;
  background: ${(props) => props.FondoColor};
  /*background:#fff;*/
  border-radius:20px;
  animation: Titulo 1s;

  @media (max-width: 500px) {
    margin-left: 2%;
    flex-direction: column;
  }
`

export const TextoContacto = styled.a`
  margin-top:4px;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
  padding-left: 10px;
  align-self: center;
  padding-right: 10px;
  font-family: FontMenu;
  color: ${(props) => props.TextoColor};

  visited,
  link {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 815px) {
    font-size: 0.7rem;
  }
`

export const IconoContacto = styled(Svg)`
  width: 18px;
  height: 18px;
  align-self: center;
  z-index: 2;
  position: relative;
  border-radius:${(props) => props.RadiusActivo === true ? '100%' : 'none'};
  background:${(props) => props.BackgroundActivo === true ? '#2AC670' : "none"};

  path {
    fill: ${(props) => props.IconoColor || "white"};
    fill-rule: evenodd;
  }

  @media (max-width: 815px) {
    width: 15px;
    height: 15px;
  }
`

export const Titulo = styled.h1`
  z-index: 1;
  color: #fff;
  margin-left: 2%;
  font-size: 1rem;
  animation: Titulo 1s;
  font-family: SubTituloPrincipal;
  visibility: ${(props) => props.TituloVisibility || "visible"};

  @media (max-width: 945px) {
    margin-top: 1%;
    font-size: 0.8rem;
  }

  @media (max-width: 815px) {
    display: none;
  }
`