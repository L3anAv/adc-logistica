import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = styled.footer`
    height:320px;
    background:#23262b;
`

const Menu = styled.nav`

`
const UlMenu = styled.ul`

`

const LiMenu = styled.li`

`

function footer() {
  return (
    <>
        <Footer>
            <Menu>
                <UlMenu>
                    <LiMenu><Link to={'/'}>Inicio</Link></LiMenu>
                    <LiMenu><Link ></Link></LiMenu>
                    <LiMenu><Link ></Link></LiMenu>
                    <LiMenu><Link ></Link></LiMenu>
                </UlMenu>
            </Menu>
        </Footer>
    </>
  )
}

export default footer