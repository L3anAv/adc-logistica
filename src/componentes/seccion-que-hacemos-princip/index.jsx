import styled from 'styled-components'
import {Titulo} from '../styled-components-general/titulo-central'

const ContenedorQueHacemos = styled.section`
  width:100%;
  display:grid;
  overflow:hidden;
  justify-content:center;
  grid-template-columns:10% 40% 40% 10%;
`

const TituloSeccion = styled(Titulo)`
  grid-column: 2/4;
  justify-self: center;
  aling-self:center;
`

const FichaServicio = styled.div`
  grid-row:${props => props.fichaRow};
  grid-column:${props => props.fichaColum};
  color:#000;
  justify-self: center;
`

const queHacemos = () => {
  return (
    <>
    <ContenedorQueHacemos>
      <TituloSeccion>¿QUE HACEMOS?</TituloSeccion>
       <FichaServicio fichaRow="2/3" fichaColum="2/3" >
         Servicio 1
      </FichaServicio>
      <FichaServicio fichaRow="2/3" fichaColum="3/4" >
         Servicio 2
      </FichaServicio>
      <FichaServicio fichaRow="3/4" fichaColum="2/3" >
         Servicio 3
      </FichaServicio>
      <FichaServicio fichaRow="3/4" fichaColum="3/4" >
         Servicio 3
      </FichaServicio>
    </ContenedorQueHacemos>
    
    </>
  )
}

export default queHacemos