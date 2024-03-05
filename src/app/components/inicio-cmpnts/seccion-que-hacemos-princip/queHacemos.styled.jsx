import styled from "styled-components";
import { Link } from "react-router-dom"
import { Titulo } from "../../../styled-components-general/titulo-central";

export const ContenedorQueHacemos = styled.section`
  width: 100%;
  display: grid;
  overflow: hidden;
  margin-bottom: 6%;
  background:#fdfdfd;
  justify-content: center;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-rows: auto auto auto auto;
  margin-top: calc(7% + ${(props) => props.QueHacemosMenuEstaFixed || "0"});

  @media (max-width: 945px) {
    grid-template-rows: auto;
    grid-template-columns: reapeat(4, 1fr);
  }
`;

export const TituloSeccion = styled(Titulo)`
  grid-row: 1/2;
  font-size:3rem;
  margin-top: 11%;
  grid-column: 2/4;
  aling-self: center;
  justify-self: center;

  ::selection {
    color: #fff;
  }
`;

export const MenuServicios = styled.nav`
  height: 50px;
  grid-row: 2/3;
  grid-column: 2/4;
  user-select: none;
  margin-bottom:20px;
  justify-self: center;
`;

export const UlMenuServ = styled.ul`
  display: flex;
  padding: 20px;
  font-size: 18px;
  font-family: FontMenu;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const LiMenuServ = styled.li`
  color: #000;
  cursor: pointer;
  border-radius:15px;
  margin:4px 8px 4px 8px;
  border:1px solid #000;
  padding:2px 12px 2px 12px;

  :hover {
    color:#fff;
    background:#0F8DF5;
    border: 1px solid #0F8DF5;
  }

  @media (max-width: 700px) {
    color:#fff;
    background:#0F8DF5;
    border: 1px solid transparent;

    :hover {
      color:#fff;
      background:#0F8DF5;
      border: 1px solid none;
    }
  }

`;

export const FichaServicio = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 60%;
  grid:
    "icono lista lista"
    "vacio vacio boton";
  color: #000;
  padding: 20px;
  margin-top: 4%;
  margin-left: 8%;
  margin-right: 8%;
  border: 1px solid;
  margin-bottom: 4%;
  border-radius: 10px;
  grid-row: ${props => props.fichaRow};
  grid-column: ${props => props.fichaColum};

  @media (max-width: 640px) {
    grid:
      "icono icono icono"
      "lista lista lista"
      "boton boton boton";
  }
`

export const UlFicha = styled.ul`
  width: 80%;
  margin-top: 5px;
  grid-area: lista;
`;

export const LiFicha = styled.li`
  padding: 8px;
  font-weight500;
  margin-left: 22%;
  font-family: FontMenu;
  list-style-type: circle;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }

  ::selection {
    color: #fff;
    background: rgba(78, 112, 239, 1);
  }
`

export const BotonServicio = styled.button`
  color: #fff;
  height: 40px;
  padding: 6px;
  width: 180px;
  cursor: pointer;
  font-size: 15px;
  grid-area: boton;
  background: #3d5bcc;
  border-radius:8px;
  justify-self: end;
  text-align: center;
  font-family: FontMenu;

  @media (max-width: 640px) {
    font-size: 0.8rem;
    height: 30px;
    width: 150px;
  }
`

export const Boton = styled(Link)`
  margin-left:150px;
  margin-right:150px;
  height:40px;
  color: #fff;
  margin-top:46px;
  cursor: pointer;
  font-size:0.8rem;
  line-height: 40px;
  border-radius: 5px;
  background: #220FF5;
  font-family: FontMenu;
  text-align-last: center;
  grid-row: ${props => props.botonrow};
  grid-column: ${props => props.botoncolum};

    :hover {
    background:#223BF5;
    }

    @media (max-width: 1270px) {
      font-size:0.5rem;
    }

    @media (max-width: 600px) {
      margin-top: 6%;
      margin-left:10px;
      margin-right:10px;
    }
`