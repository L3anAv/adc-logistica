import GruaIcon from "./componentes-icons/grua"
import BobcatIcon from "./componentes-icons/bobcat"
import AcarreoIcon from "./componentes-icons/acarreo"
import VolqueteIcon from "./componentes-icons/volquete"
import DepositoIcon from "./componentes-icons/deposito"
import DesagoteIcon from "./componentes-icons/desagote"
import TransporteIcon from "./componentes-icons/transporte"
import BanoQuimicoIcon from "./componentes-icons/banoQuimico"
import AutoelevadorIcon from "./componentes-icons/autoelevador"
import DepositoCarroIcon from "./componentes-icons/depositoCarro"

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