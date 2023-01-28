import Header from "./header/index";
import ContenidoCentral from "./contenido-central/index";
import { FondoDeSeccion } from "./fondo-inicio/fondo";

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
