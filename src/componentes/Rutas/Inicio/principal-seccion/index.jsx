import ContenidoCentral from "./contenido-central/index";
import Header from "../../../componentes-de-uso-general/header/index";
import { FondoDeSeccion } from "../../../componentes-de-uso-general/fondo-inicio/fondo";

const principal = ({MenuOff}) => {
  return (
    <>
      <FondoDeSeccion urlFondo={'"/public/images/imagen-principal-web-adc.jpeg"'}/>
      <Header MenuOff={MenuOff}/>
      <ContenidoCentral />
    </>
  );
};

export default principal;
