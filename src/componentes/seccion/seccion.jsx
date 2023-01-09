import Menu from "../menu/menu" 
import styled from 'styled-components'

const ContenedorSeccion = styled.div`
  width:100%;
  height:900px;
  background:#000000;
`

const Titulo = styled.h1`
  color:#fff;
  padding-top:20px;
  padding-left:20px;
  margin-left:0.5%;
  margin-bottom:5px;
  font-size:32px;
`
const TituloCentral = styled(Titulo)`
  width:75px;
  margin-left:5%;
`
const seccion = () => {
  return (
    <>
    <ContenedorSeccion>
      <Titulo>ADC Logistica</Titulo>
      <Menu />
      <TituloCentral>SERVICIOS LOGISTICOS & ALQUILER DE MAQUINARIAS</TituloCentral>
    </ContenedorSeccion>
    </>
 )
}

export default seccion
