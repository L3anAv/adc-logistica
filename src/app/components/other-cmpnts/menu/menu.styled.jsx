import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWeb = styled.nav`
  height: 28px;
  display: flex;
  opacity: 100%;
  list-style-type: none;
  animation: 0.7s MenuAparicion;
  justify-content: space-between;
  top: ${(props) => props.navWebTop};
  width: ${(props) => props.navWebWidth};
  position: ${(props) => props.navWebPosition};
  margin-top: ${(props) => props.navWebMarginTop};

  @media (max-width: 945px) {
    top: 0;
    left: 0px;
    z-index: 2;
    width: 30%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    position: fixed;
    background-color: #4a6bd9;
    transform: translate(${(props) => props.navToggle});
  }

  @media (max-width: 500px) {
    animation:none;
  }
`

export const UlMenu = styled.ul`

  display: flex;
  margin-left: 2.5%;

  @media (max-width: 945px) {
    top: 20px;
    margin-top: 12%;
    margin-left: 2%;
    position: fixed;
    flex-direction: column;
  }
`

export const ItemMenu = styled.li`
  color: #fff;
  user-select: none;  
  text-decoration: none;
  margin:0px 8px 0px 8px;
  padding:0px 12px 12px 12px;

  :hover {
    border-bottom: ${(props) => props.ItemMenuBorder || "1px solid white"};
  }

  @media (max-width: 945px) {
    width: 60%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const BotonItem = styled(Link)`
  margin-top:5px;
  font-size: 0.9rem;
  font-family: FontMenu;
  text-decoration: none;
  color: ${(props) => props.botonitemcolor};
  font-weight: ${(props) => props.botonweight || ""};

  @media (max-width: 945px) {
    font-size: 1rem;
  }

  @media (max-width: 815px) {
    font-size: 0.8rem;
  }
`

export const SvgContainer = styled.div`
  margin-right: 3%;

  @media (max-width: 945px) {
    margin-top: 5%;
    margin-left: 20%;
  }

  @media (max-width: 500px) {
    width: 15px;
    height: 15px;
    margin-right: 15%;
  }

`

export const Svg = styled.svg`
  z-index: 1;
  width: 25px;
  opacity: 40%;
  padding: 3px;
  height: 35px;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
  filter: blur(0.5px);
  transition: all 0.5s;

  path {
    fill: ${(props) => props.SvgFill || "white"};
    fill-rule: evenodd;
  }

  :hover {
    opacity: 120%;
  }
`

export const RedSocial = styled(Svg)`
  @media (max-width: 815px) {
    width: 22px; /* Revisar tamaño cuando se agreguen más redes sociales */
    height: 22px;
    margin-left: 2px;
    margin-right: 2px;
  }

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  :nth-child(2) {
    visibility: hidden;
  }

  :nth-child(3) {
    visibility: hidden;
  }

`

export const CloseMenu = styled(Svg)`
  display: none;

  @media (max-width: 945px) {
    margin-top: 5%;
    display: inline;
    font-size: 1.2rem;

    path {
      fill: ${(props) => props.colorMenu || "white"};
      fill-rule: evenodd;
    }
  }
`

export const OpenMenu = styled(Svg)`
  display: none;

  @media (max-width: 945px) {
    top: 15px;
    rigth: 10px;
    margin-top: 5%;
    position: fixed;
    display: inline;
    font-size: 1.2rem;

    path {
      fill: ${(props) => props.colorMenu || "white"};
      fill-rule: evenodd;
      border:1px solid black;
    }
  }

  @media (max-width: 815px) {
    top: 30px;
  }

  @media (max-width: 500px) {
    top: 50px;
  }
`