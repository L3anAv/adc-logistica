import Header from '../header/index'
import ContenidoCentral from '../contenido-central'
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
