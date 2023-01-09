import styled from 'styled-components'

const NavWeb = styled.nav`
  margin-top:3%;
  margin-left:3%;
  list-style-type:none;
`

const UlMenu = styled.ul`
  display:flex;
`

const ItemMenu = styled.li`
  color:#fff;
  padding-left:5px;
  padding-right:5px;
  text-decoration:none;
`

const BotonItem = styled.a`
  color:#fff;
  text-decoration:none;
`

const Menu = () => {
  return (
    <>
     <NavWeb>
      <UlMenu>
      <ItemMenu><BotonItem href='/'>Inicio</BotonItem></ItemMenu>
      <ItemMenu><BotonItem  href='/quienes-somos'>Quienes somos</BotonItem></ItemMenu>
      <ItemMenu><BotonItem href='/que-hacemos'>Que hacemos</BotonItem></ItemMenu>
      <ItemMenu><BotonItem>Contacto</BotonItem></ItemMenu>
      <ItemMenu><BotonItem href='/preguntas-frecuentes'>Preguntas Frecuentes</BotonItem></ItemMenu>
      </UlMenu>
      </NavWeb>
    </>
  )
}

export default Menu
