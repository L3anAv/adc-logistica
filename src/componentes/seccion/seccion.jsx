import Menu from "../menu/menu" 
import styled from 'styled-components'

const FondoDeSeccion = styled.div`
  width:100%;
  height:700px;
  background: url("/public/images/imagen-principal-web-adc.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top:0;
  left:0;
  z-index:-1;

  :after {
    content: "";
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    opacity:80%;
    background: linear-gradient(0deg, rgba(4,11,40,1) 0%, rgba(78,112,239,1) 100%);
  }
`

const Titulo = styled.h1`
  color:#fff;
  padding-top:20px;
  padding-left:20px;
  margin-left:0.5%;
  margin-bottom:5px;
  font-size:32px;
  z-index:1;
`
const TituloCentral = styled(Titulo)`
  width:60%;
  margin-top:2%;
  margin-left:10%;
  padding:30px;
  text-aling:justify;
  z-index:1;
`
const seccion = () => {
  return (
    <>
    <FondoDeSeccion />
    <Titulo>ADC Logistica</Titulo>
    <Menu />
    <TituloCentral>SERVICIOS LOGISTICOS & ALQUILER DE MAQUINARIAS</TituloCentral>
    </>
 )
}

export default seccion
