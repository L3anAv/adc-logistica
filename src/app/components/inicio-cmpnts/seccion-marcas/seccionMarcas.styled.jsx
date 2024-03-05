import styled from 'styled-components'

export const ContenedorImagenes = styled.div`
  display:flex;
  overflow:hidden;
  margin-top: 2%;
  margin-bottom: 10%;
  justify-content:space-around;

  @media (max-width: 1100px) {
    align-items: center;
    flex-direction:column;
  }

`

export const CotenedorTitulo = styled.div`
  display:flex;
  overflow:hidden;
  justify-content:center;
  animation:${props => props.animation};
`

export const TituloPrincipal = styled.h2`
  z-index:-1;
  font-size:3rem;
  jusitfy-self:center;
  font-family:TituloPrincipal;
  animation:1s Aparicion linear;

  @media (max-width: 800px) {
    font-size:3rem;
  }

  @media (max-width: 500px) {
    font-size:2rem;
  }

`

export const Img = styled.img`
  /*z-index:-1;*/
  width:350px;
  cursor:pointer;
  transform:scale(0.5);
  filter: grayscale(100%);
  transition:all 0.5s ease-in;

  :hover{
    filter: grayscale(0);
    transform:scale(0.55);
  }

  @media (max-width: 1000px) {
    transform:scale(0.5);
    filter: grayscale(0);
  }

  @media (max-width: 500px) {
    margin-left:-25px;
    filter: grayscale(0);
  }
`