import Menu from "../menu/menu" 
import styled from 'styled-components'

const ContenedorSeccion = styled.section`
  width:100%;
  height:900px;
  background:#000000;
`

const seccion = () => {
  return (
    <ContenedorSeccion>
      <Menu />
    </ContenedorSeccion>
 )
}

export default seccion
