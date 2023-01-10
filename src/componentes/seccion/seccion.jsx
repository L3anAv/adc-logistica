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
  font-family: SubTituloPrincipal;
  padding-top:20px;
  padding-left:20px;
  margin-left:2%;
  margin-bottom:5px;
  font-size:28px;
  z-index:1;
`
const TituloCentral = styled(Titulo)`
  width:75%;
  opacity:88%;
  margin-top:4%;
  margin-bottom:0;
  font-size:60px;
  font-family: TituloPrincipal;
  margin-left:10%;
  text-aling:justify;
  z-index:1;

  ::selection {
    color: #000;
    background:rgba(78,112,239,1);
  }
`

const Subtitulo = styled(TituloCentral)`
  font-size:20px;
  margin-top:0;
  font-weight:100;
  font-family: SubTituloPrincipal;
`
const BotonNuestrosServicios = styled.button`
  display:flex;
  color:#fff;
  width:225px;
  height:40px;
  margin-top:2%;
  cursor:pointer;
  margin-left:11.5%;
  background:#3d5bcc;
  font-family: TituloPrincipal;
  align-items: center;
  justify-content:center;
  border-radius:5px;
  transition: background 0.8s ease;

  :hover{
    background:#294198;
  }
`

const LinkContenido = styled.a`
  color:#fff;
  font-size:15px;
  font-family:TituloPrincipal;
  transition:font-size 0.5s;

  :hover{
    font-size:16px;
  }

`


const seccion = () => {
  return (
    <>
    <FondoDeSeccion />
    { /* 
      Esto va dentro del header
     */}
    <Titulo>ADC Logistica</Titulo>
    <Menu />

    { /* 
      Esto es una section del centro
     */}
    <TituloCentral>SERVICIOS LOGISTICOS & ALQUILER DE MAQUINARIAS</TituloCentral>
    <Subtitulo>Prestamos servicio a empresas y particulares.</Subtitulo>
    <BotonNuestrosServicios>
      <LinkContenido href="/que-hacemos">CONOCER MÁS...</LinkContenido>
    </BotonNuestrosServicios>

    </>
 )
}

export default seccion
