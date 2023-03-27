import ContenidoCentral from "./contenido-central/index";
import Header from "../../../componentes-de-uso-general/header/index";
import FondoDeSeccion  from "../../../componentes-de-uso-general/fondo-inicio/fondo";
import rutaDeFondo from "../../../images/imagen-principal-web-adc.jpeg"

const principal = ({MenuOff}) => {

  return (
    <>
      <FondoDeSeccion urlFondo={`${rutaDeFondo}`} height={'638px'}/>
      <Header MenuOff={MenuOff}/>
      <ContenidoCentral />
    </>
  );
};

export default principal;
