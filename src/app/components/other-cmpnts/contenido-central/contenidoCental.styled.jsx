import styled from "styled-components";
import { Link } from "react-router-dom"

export const SeccionPrincipal = styled.section`
  widht: 100%;
  margin-bottom: 6%;

  @media (max-width: 945px) {
    margin-top: 18%;
    margin-bottom: 20%;
  }

  @media (max-width: 500px) {
    margin-top: 30%;
    margin-bottom: 70%;
  }
`;

export const TituloCentral = styled.h2`
  width: 72%;
  z-index: 1;
  color: #fff;
  opacity: 88%;
  opacity: 100%;
  margin-top: 6%;
  margin-left: 2%;
  overflow: hidden;
  margin-left: 10%;
  margin-bottom: 0;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 3.70rem;
  text-aling: justify;
  font-family: TituloPrincipal;
  animation: 1.5s TituloAnimacion;

  ::selection {
    color: #000;
    background: rgba(78, 112, 239, 1);
  }

  @media (max-width: 945px) {
    width: 85%;
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    width: 83%;
    font-size: 2rem;
  }
`;

export const Subtitulo = styled(TituloCentral)`
  margin-top: 0;
  font-weight: 100;
  font-size: 1.25rem;
  font-family: SubTituloPrincipal;

  @media (max-width: 945px) {
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

export const BotonNuestrosServicios = styled.button`
  color: #fff;
  width: 250px;
  height: 40px;
  margin-top: 2%;
  cursor: pointer;
  margin-left: 11.5%;
  line-height: 40px;
  border-radius: 5px;
  background: #223BF5;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  animation: 2s BotonAnimacion;
  font-family: TituloPrincipal;

  :hover {
    background: #1930c4;

    span {
      background: #15279b;
      font-size: 1.37rem;
    }
  }

  @media (max-width: 815px) {
    margin-left: 12%;
  }

  @media (max-width: 600px) {
    margin-top: 6%;
    margin-left: 14%;
  }
`;

export const LinkContenido = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 1.125rem;
  padding-left: 10%;
  justify-content: space-between;
  font-family: TituloPrincipal;
`;

export const Span = styled.span`
  width: 50px;
  height: 40px;
  line-height: 40px;
  background: #102ef2;
  transition: font-size 0.5s;
  border-radius: 0% 5px 5px 0%;
`;