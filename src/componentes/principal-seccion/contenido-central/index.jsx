import styled from 'styled-components'

const SeccionPrincipal = styled.section`
    widht:100%;
    margin-bottom:11%;
`

const TituloCentral = styled.h2`
  width:75%;
  z-index:1;
  color:#fff;
  opacity:88%;
  opacity:100%;
  margin-top:4%;
  margin-left:2%;
  overflow:hidden;
  margin-left:10%;
  margin-bottom:0;
  padding-top:20px;
  padding-left:20px;
  font-size:3.75rem;
  text-aling:justify;
  font-family: TituloPrincipal;
  animation: 1.5s TituloAnimacion;
  
  ::selection {
    color: #000;
    background:rgba(78,112,239,1);
  }
`

const Subtitulo = styled(TituloCentral)`
  margin-top:0;
  font-weight:100;
  font-size:1.25rem;
  font-family: SubTituloPrincipal;
`

const BotonNuestrosServicios = styled.button`
  color:#fff;
  width:250px;
  height:40px;
  margin-top:2%;
  cursor:pointer;
  margin-left:11.5%;
  line-height: 40px;
  border-radius:5px;
  background:#3d5bcc;
  align-items: center;
  justify-content:center;
  transition: all 0.8s ease;
  animation:2s BotonAnimacion;
  font-family: TituloPrincipal;

  :hover{
    background:#294198;

    span {
      background:#3d5bcc;
      font-size:1.375rem;
    }
  }
`

const LinkContenido = styled.a`
  color:#fff;
  display:flex;
  font-size:1.125rem;
  padding-left:10%;
  justify-content:space-between;
  font-family:TituloPrincipal;

`

const Span = styled.span`
  width:50px;
  height:40px;
  line-height: 40px;
  background:#294198;
  transition: font-size 0.5s;
  border-radius: 0% 5px 5px 0%;
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