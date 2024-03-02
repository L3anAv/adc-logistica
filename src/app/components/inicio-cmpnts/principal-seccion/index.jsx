import Header from "../../other-cmpnts/header/index";
import ContenidoCentral from "./contenido-central/index";
import FondoDeSeccion  from "../../../components/other-cmpnts/fondo-inicio/fondo";
import rutaDeFondo from "../../../../assets/images/imagen-principal-web-adc.webp"

const principal = ({MenuOff, AlturaCambioColorMenu}) => {

  return (
    <>
      <FondoDeSeccion urlFondo={`${rutaDeFondo}`} height={'638px'}/>
      <Header MenuOff={MenuOff} AlturaCambioColorMenu={AlturaCambioColorMenu}/>
      <ContenidoCentral />
    </>
  );
};

export default principal;
