import styled from 'styled-components'

const NavWeb = styled.nav`
  height:30px;
  margin-top:3%;
  margin-left:2.5%;
  list-style-type:none;
`

const UlMenu = styled.ul`
  display:flex;
`

const ItemMenu = styled.li`
  color:#fff;
  padding-left:12px;
  padding-right:12px;
  padding-bottom:10px;
  text-decoration:none;
  user-select:none;

  :hover{
    border-bottom: 2px solid white;
  }
`

const BotonItem = styled.a`
  font-family:FontMenu;
  color:#fff;
  text-decoration:none;
`

const Menu = () => {
  return (
    <>
     <NavWeb>
      <UlMenu>
      <ItemMenu><BotonItem href='/'>INICIO</BotonItem></ItemMenu>
      <ItemMenu><BotonItem  href='/quienes-somos'>QUIENES SOMOS</BotonItem></ItemMenu>
      <ItemMenu><BotonItem href='/que-hacemos'>QUE HACEMOS</BotonItem></ItemMenu>
      <ItemMenu><BotonItem>CONTACTO</BotonItem></ItemMenu>
      <ItemMenu><BotonItem href='/preguntas-frecuentes'>PREGUNTAS FRECUENTES</BotonItem></ItemMenu>
      </UlMenu>
      </NavWeb>
    </>
  )
}

export default Menu
