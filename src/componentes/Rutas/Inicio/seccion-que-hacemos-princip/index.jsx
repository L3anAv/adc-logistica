import styled from "styled-components";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { svgManager } from "./svgs-icons/indexSvg"
import fichas from "../../../../../public/auxiliares/infoFichas"
import { Titulo } from "../../../styled-components-general/titulo-central";

const ContenedorQueHacemos = styled.section`
  width: 100%;
  display: grid;
  overflow: hidden;
  margin-bottom: 12%;
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

const TituloSeccion = styled(Titulo)`
  grid-row: 1/2;
  margin-top: 11%;
  grid-column: 2/4;
  aling-self: center;
  justify-self: center;

  ::selection {
    color: #fff;
  }
`;

const MenuServicios = styled.nav`
  height: 50px;
  grid-row: 2/3;
  grid-column: 2/4;
  user-select: none;
  justify-self: center;
`;

const UlMenuServ = styled.ul`
  display: flex;
  padding: 20px;
  font-size: 18px;
  font-family: FontMenu;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const LiMenuServ = styled.li`
  color: #1b3281;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;

  :hover {
    border-bottom: 4px solid #3d5bcc;
  }
`;

const FichaServicio = styled.div`
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

  :hover {
    transform: scale(1.05);
  }
`;

const UlFicha = styled.ul`
  width: 80%;
  grid-area: lista;
  margin-top: 5px;
`;

const LiFicha = styled.li`
  padding: 8px;
  margin-left: 8%;
  text-align: start;
  font-family: FontMenu;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }

  ::selection {
    color: #fff;
    background: rgba(78, 112, 239, 1);
  }
`;

const BotonServicio = styled.button`
  color: #000;
  padding: 6px;
  font-size: 15px;
  cursor: pointer;
  grid-area: boton;
  background: none;
  border-radius: 5px;
  font-family: FontMenu;
`;

const Boton = styled(Link)`
  margin-left:150px;
  margin-right:150px;
  height:40px;
  color: #fff;
  margin-top:46px;
  cursor: pointer;
  font-size:0.8rem;
  line-height: 40px;
  border-radius: 5px;
  background: #3d5bcc;
  font-family: FontMenu;
  text-align-last: center;
  grid-row: ${props => props.botonRow};
  grid-column: ${props => props.botonColum};

    :hover {
    background: #294198;
    }

    @media (max-width: 1270px) {
      font-size:0.5rem;
    }

    @media (max-width: 600px) {
      margin-top: 6%;
    }
`

const queHacemos = () => {

  // -> Estados
  const [indexData, setindexData] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const [scrollPosicion, setscrollPosicion] = useState(0);
  const [MenuEstaFixed, setMenuEstaFixed] = useState(false);
  const [windowSizeRespon, setWindowSizeRespon] = useState(false);

  // -> Funcion que toma del data del elemento clikeado
  function darDataOpcionClikeada(e){
    let valor = e.target.getAttribute('data-opcion-ficha')
    setindexData(valor)
  }

  // -> Funcion que controla la altura del scroll
  function darPosicionDeScroll() {
    window.addEventListener("scroll", () => {
      setscrollPosicion(window.scrollY);
    });
  }

  // -> Funcion que settea el cambio de width de la ventana
  function darWidthPantalla() {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  }

  function moverAlTopAlHacerClick(){
    window.scrollTo(0,0)
  }

  // -> Encargado de dar el width del inicio cuando carga la página
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [])

  useEffect(() => {
    darPosicionDeScroll();

    // -> Condicional que pone el menu en fixed
    if (scrollPosicion >= 77) {
      setMenuEstaFixed(true);
    } else {
      setMenuEstaFixed(false);
    }
  }, [scrollPosicion]);

  useEffect(() => {
    darWidthPantalla();

    if (windowSize <= 1260 && windowSize != 0) {
      setWindowSizeRespon(true);
    } else {
      setWindowSizeRespon(false);
    }
  }, [windowSize]);

  return (
    <>
      <ContenedorQueHacemos
        QueHacemosMenuEstaFixed={MenuEstaFixed == true ? "125px" : "0"}
      >
        <TituloSeccion>¿QUE HACEMOS?</TituloSeccion>

        <MenuServicios>
          <UlMenuServ>
            <LiMenuServ data-opcion-ficha="0" onClick={darDataOpcionClikeada}>Servicios</LiMenuServ>
            <LiMenuServ data-opcion-ficha="1" onClick={darDataOpcionClikeada}>Alquieres</LiMenuServ>
            <LiMenuServ data-opcion-ficha="2" onClick={darDataOpcionClikeada}>Almacenamiento/Deposito</LiMenuServ>
          </UlMenuServ>
        </MenuServicios>

        {
          fichas[indexData].map((info, index) => (
          <FichaServicio fichaColum={windowSizeRespon == true ? `${info.ColumnResponsive}` : `${info.Colum}`}
                         fichaRow={windowSizeRespon == true ? `${info.RowResponsive}` : `${info.Row}`}
                         key={index} >
            
            {svgManager(info.Svg)}

            <UlFicha>
              {info.LiContenido.map((infor, index) => (
                <LiFicha key={infor + index}>{infor}</LiFicha>
              ))}
            </UlFicha>

            <BotonServicio>Solicitar servicio &#62;&#62;</BotonServicio>
          </FichaServicio>
          ))
        }
         <Boton botonRow={windowSizeRespon == true ? '8/9': '5/6'} botonColum={windowSizeRespon == true ? '2/4': '2/4'} to="/servicios" onClick={moverAlTopAlHacerClick}>VER TODOS NUESTROS SERVICIOS</Boton>
      </ContenedorQueHacemos>
    </>
  );
};

export default queHacemos;
