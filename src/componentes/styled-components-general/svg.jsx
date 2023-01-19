import styled from 'styled-components'

export const Svg = styled.svg`
  width:80px;
  height:80px;
  padding:3px;
  cursor:pointer;
  grid-area:icono;
  transition: all 0.5s;
  
  :hover{
  opacity:120%;
  }

  path {
    fill:black;
    fill-rule: evenodd;
  }

`