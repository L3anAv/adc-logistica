import GruaIcon from '../components/other-cmpnts/componentes-icons/grua'
import BobcatIcon from "../components/other-cmpnts/componentes-icons/bobcat"
import AcarreoIcon from "../components/other-cmpnts/componentes-icons/acarreo"
import VolqueteIcon from "../components/other-cmpnts/componentes-icons/volquete"
import DepositoIcon from "../components/other-cmpnts/componentes-icons/deposito"
import DesagoteIcon from "../components/other-cmpnts/componentes-icons/desagote"
import TransporteIcon from "../components/other-cmpnts/componentes-icons/transporte"
import BanoQuimicoIcon from "../components/other-cmpnts/componentes-icons/banoQuimico"
import AutoelevadorIcon from "../components/other-cmpnts/componentes-icons/autoelevador"
import DepositoCarroIcon from "../components/other-cmpnts/componentes-icons/depositoCarro"

// -> Retorna el componente de svg correspondiente
function svgManager(nombre){

  if(nombre == "Transporte"){
    return (<TransporteIcon />)
  }else if(nombre == "Acarreo"){
      return (<AcarreoIcon />)
  }else if(nombre == "Desagote"){
      return (<DesagoteIcon />)
  }else if(nombre == "Volquete"){
    return (<VolqueteIcon />)
  }else if(nombre == "Autoelevador"){
    return (< AutoelevadorIcon />)
  }else if(nombre == "banoQuimico"){
    return (<BanoQuimicoIcon />)
  }else if(nombre == "Grua"){
    return (<GruaIcon />)
  }else if(nombre == "Bobcat"){
    return (<BobcatIcon />)
  }else if(nombre == "Deposito"){
    return (<DepositoIcon />)
  }else if(nombre == "DepositoCarro"){
    return (<DepositoCarroIcon />)
  }
}

export { svgManager }