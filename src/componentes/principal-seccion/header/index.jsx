import Menu from "./menu/index" 
import styled from 'styled-components'

const Titulo = styled.h1`
  color:#fff;
  font-family: SubTituloPrincipal;
  padding-top:20px;
  padding-left:20px;
  margin-left:2%;
  margin-bottom:5px;
  font-size:28px;
  z-index:1;
  animation:Titulo 1s;
`

const header = () => {
  return (
   <>
      {/* Falta un componente que contenga el titulo y los numeros de contacto que 
        desaparezca tambien cuando el scroll sea mayor a >
      */}
       <Titulo>ADC ARGENTINA UNIENDO EMPRESAS</Titulo>
       <Menu />
   </>
  )
}

export default header