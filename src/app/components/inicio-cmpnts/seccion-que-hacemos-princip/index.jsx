import { useEffect, useState } from "react";
import {
  Boton,
  UlFicha,
  LiFicha,
  UlMenuServ,
  LiMenuServ,
  TituloSeccion,
  MenuServicios,
  FichaServicio,
  BotonServicio,
  ContenedorQueHacemos } from './queHacemos.styled'
  import { svgManager } from '../../../utils/indexSvg'
import fichas from "../../../../../public/auxiliares/infoFichas"


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

  function IrhastaFormulario(){

      let alturaDeDocumento = document.body.scrollHeight
      let movimiento = alturaDeDocumento-1370
      
      if(window.location.pathname == '/adc-logistica/' || window.location.pathname == '/' || window.location.pathname == '/adc-logistica'){
        
        window.scrollTo(0, movimiento)
      }
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
    }else {
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
        <TituloSeccion>¿QUÉ HACEMOS?</TituloSeccion>

        <MenuServicios>
          <UlMenuServ>
            <LiMenuServ data-opcion-ficha="0" onClick={darDataOpcionClikeada}>Servicios</LiMenuServ>
            <LiMenuServ data-opcion-ficha="1" onClick={darDataOpcionClikeada}>Alquieres</LiMenuServ>
            <LiMenuServ data-opcion-ficha="2" onClick={darDataOpcionClikeada}>Almacenamiento/Depósito</LiMenuServ>
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
            
            <BotonServicio onClick={IrhastaFormulario}>Solicitar servicio</BotonServicio>
          </FichaServicio>
          ))
        }
         <Boton botonrow={windowSizeRespon == true ? '8/9': '5/6'} botoncolum={windowSizeRespon == true ? '2/4': '2/4'} to="/servicios" onClick={moverAlTopAlHacerClick}>VER TODOS NUESTROS SERVICIOS</Boton>
      </ContenedorQueHacemos>
    </>
  );
};

export default queHacemos;