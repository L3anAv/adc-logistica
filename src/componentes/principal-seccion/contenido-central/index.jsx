import styled from 'styled-components'

const SeccionPrincipal = styled.section`
    widht:100%;
    margin-bottom:11%;
`

const TituloCentral = styled.h1`
  color:#fff;
  width:75%;
  margin-left:2%;
  padding-top:20px;
  padding-left:20px;
  opacity:88%;
  margin-top:4%;
  margin-bottom:0;
  font-size:60px;
  font-family: TituloPrincipal;
  text-aling:justify;
  margin-left:10%;
  opacity:100%;
  overflow:hidden;
  z-index:1;
  animation: 1.5s TituloAnimacion;
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
  color:#fff;
  width:250px;
  height:40px;
  margin-top:2%;
  cursor:pointer;
  margin-left:11.5%;
  background:#3d5bcc;
  font-family: TituloPrincipal;
  align-items: center;
  justify-content:center;
  line-height: 40px;
  border-radius:5px;
  transition: all 0.8s ease;
  animation:2s BotonAnimacion;

  :hover{
    background:#294198;

    span {
      background:#3d5bcc;
      font-size:22px;
    }
  }
`

const LinkContenido = styled.a`
  color:#fff;
  display:flex;
  padding-left:10%;
  justify-content:space-between;
  font-size:18px;
  font-family:TituloPrincipal;

`

const Span = styled.span`
  width:50px;
  height:40px;
  line-height: 40px;
  background:#294198;
  border-radius: 0% 5px 5px 0%;
  transition: font-size 0.5s;
`

const contenidoCentral = () => {
  return (
    <>
    <SeccionPrincipal>
    <TituloCentral>SERVICIOS LOGISTICOS & ALQUILER DE MAQUINARIAS</TituloCentral>
    <Subtitulo>Prestamos servicio a empresas y particulares.</Subtitulo>
    <BotonNuestrosServicios>
      <LinkContenido href="/que-hacemos">CONOCER MÁS... <Span>&#62;</Span></LinkContenido>
    </BotonNuestrosServicios>
    </SeccionPrincipal>
    </>
  )
}

export default contenidoCentral