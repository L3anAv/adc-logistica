import styled from 'styled-components'

const NavWeb = styled.ul`
  display:flex;
  margin-top:5%;
  list-style-type:none;
  top:0;
`

const ItemMenu = styled.li`
  padding-right:5px;
  padding-left:5px;
  color:#fff;
  text-decoration:none;
`

const BotonItem = styled.a`
  color:#000;
  text-decoration:none;
`

const Menu = () => {
  return (
    <>
     <NavWeb>
      <ItemMenu><BotonItem href='/'>Inicio</BotonItem></ItemMenu>
      <ItemMenu><BotonItem  href='/quienes-somos'>Quienes somos</BotonItem></ItemMenu>
      <ItemMenu><BotonItem href='/que-hacemos'>Que hacemos</BotonItem></ItemMenu>
      <ItemMenu><BotonItem>Contacto</BotonItem></ItemMenu>
      <ItemMenu><BotonItem href='/preguntas-frecuentes'>Preguntas Frecuentes</BotonItem></ItemMenu>
      </NavWeb>
    </>
  )
}

export default Menu
