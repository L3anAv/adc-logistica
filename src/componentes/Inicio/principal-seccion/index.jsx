import { FondoDeSeccion } from "./fondo-inicio/fondo";
import ContenidoCentral from "./contenido-central/index";
import Header from "../../componentes-de-uso-general/header/index";

const principal = ({MenuOff}) => {
  return (
    <>
      <FondoDeSeccion />
      <Header MenuOff={MenuOff}/>
      <ContenidoCentral />
    </>
  );
};

export default principal;
