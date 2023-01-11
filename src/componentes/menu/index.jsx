import styled from 'styled-components'

/* Opciones de menu -> */
const opcionesMenu = 
[
  {"nombre": "INICIO", "href": "/"},
  {"nombre": "QUIENES SOMOS","href": "/quienes-somos"},
  {"nombre": "QUIENES HACEMOS","href": "/que-hacemos"},
  {"nombre": "CONTACTO","href": null},
  {"nombre": "PREGUNTAS FRECUENTES","href": "/preguntas-frecuentes"}
]

/* Styled Components de menu -> */
const NavWeb = styled.nav`
  height:30px;
  margin-top:3%;
  margin-left:2.5%;
  list-style-type:none;
  opacity: 100%;
  animation: 0.7s MenuAparicion;
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
      {opcionesMenu.map(item => 
      <ItemMenu key={item.nombre}><BotonItem href={item.href}>{item.nombre}</BotonItem></ItemMenu>  
      )}
      </UlMenu>
     </NavWeb>
    </>
  )
}

export default Menu
