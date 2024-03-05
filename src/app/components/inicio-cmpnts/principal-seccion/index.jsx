import Header from '../../other-cmpnts/header/index'
import FondoDeSeccion  from "../../../styled-components-general/fondo"
import ContenidoCentral from '../../other-cmpnts/contenido-central/index'
import rutaDeFondo from "../../../assets/images/imagen-principal-web-adc.webp"

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
