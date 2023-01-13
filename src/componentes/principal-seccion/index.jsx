import Header from './header/index'
import ContenidoCentral from './contenido-central/index'
import { FondoDeSeccion } from './fondo-inicio/fondo'

const principal = () => {
  return (
    <>
    <FondoDeSeccion />
    <Header />
    <ContenidoCentral />
    </>
 )
}

export default principal
