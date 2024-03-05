import styled from "styled-components";
import { Link } from "react-router-dom";
import { Svg } from "../../../styled-components-general/svg";

export const Footer = styled.footer`
  background: linear-gradient(180deg, rgba(27,31,38,1) 23%, rgba(15,17,22,1) 100%);
`;

export const ContenedorPrincipalFooter = styled.div`
  display: grid;
  height: 350px;
  grid-template-column: repeat(6, 1fr);

  @media (max-width: 700px) {
    height: auto;
    grid-template-column: 1fr;
  }
`;

export const Img = styled.img`
  width: 300px;
  grid-row: 1/2;
  display: inline;
  margin-left: 5%;
  margin-top: 15%;
  grid-column: 1/2;
  justify-content: center;

  @media (max-width: 1160px) {
    width: 200px;
    display: inline;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  margin-top: 8%;
  grid-row: 1/2;
  grid-column: 2/3;
  aling-content: start;

  @media (max-width: 1160px) {
    aling-self: start;
    justify-self: center;
  }

  @media (max-width: 700px) {
    grid-row: 1/2;
    grid-column: 1/3;
  }
`;

export const UlMenu = styled.ul`
  padding: 20px;
`;

export const LiMenu = styled.li`
  padding: 4px;
  border-bottom: 1px solid #b1b2b5;
`;

export const LinkRef = styled(Link)`
  color: #b1b2b5;
  font-size: 0.8rem;
  font-family: FontMenu;

  :hover {
    color: #fff;
  }
`;

export const Iframe = styled.iframe`
  margin-top: 3%;
  grid-row: 1/2;
  grid-column: 3/4;
  justify-self: end;

  @media (max-width: 700px) {
    grid-row: 2/3;
    grid-column: 1/2;
    margin-right: 5%;
    margin-bottom: 5%;
  }
`;

export const RedesSociales = styled.div`
  display: flex;
  visibility:hidden;
  grid-row: 1/2;
  grid-column: 4/5;
  aling-content: start;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  path {
    fill: grey;
    fill-rule: evenodd;
  }
`;

export const SvgFoot = styled(Svg)`
  width: 32px;
  height: 32px;
  opacity: 45%;
  margin-top: -15px;
  margin-left: 15px;
  padding-top: 32px;
  padding-bottom: 32px;
  filter: blur(0.5px);

  @media (max-width: 700px) {
    width: 28px;
    height: 28px;
    margin-top: -15px;
  }

  :hover {
    opacity: 100%;
    filter: blur(0);
  }
`;

export const PieDePagina = styled.div`
  color: #fff;
  display: flex;
  font-size: 1rem;
  font-family: FontMenu;
  flex-direction: column;

  p {
    color: #fff;
    text-align: center;
  }

  p:nth-child(2) {
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 8px;
  }

  a {
    color: #fff;
    text-align: center;
    text-decoration-line: underline;
  }

  @media (max-width: 700px) {
    p {
      font-size: 0.6rem;
    }

    p:nth-child(2) {
      color: #fff;
      font-size: 0.5rem;
      text-align: center;
      margin-bottom: 8px;
    }
  }
`