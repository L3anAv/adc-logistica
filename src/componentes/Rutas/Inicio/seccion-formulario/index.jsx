import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ImagenFormulario from "../../../images/logistica-camion-adc.jpeg"

const SeccionFormulario = styled.div`
    display:grid;
    grid-template-row:1fr;
    justify-content:space-around;
    grid-template-column:repeat(3, 1fr);
    background: linear-gradient(180deg, rgba(35,26,219,1) 0%, rgba(27,31,38,1) 47%);

    @media (max-width: 500px) {
        margin-top:15%;
    }

`

const Img = styled.img`
    width:400px;
    height:400px;
    grid-row:1/2;
    grid-column:1/2;
    align-self:center;
    object-fit: cover;
    justify-self:center;

    @media (max-width: 750px) {
        grid-row:1/2;
        margin-top:5%;
        grid-column:1/3;
    }

    @media (max-width: 490px) {
        display:none;
    }
    
`

const Formulario = styled(Form)`
    width:100%;
    display:flex;
    grid-row:1/2;
    grid-column:2/4;
    align-self:center;
    justify-self:center;
    flex-direction:column;

    @media (max-width: 750px) {
        width:85%;
        grid-row:2/3;
        grid-column:1/3;
    }
`

const Input = styled(Field)`
    padding:10px;
    font-size:1rem;
    margin-left:15px;
    margin-right:15px;
    margin-bottom:8px;
    border-radius:5px;
    font-family:FontMenu;

    @media (max-width: 500px) {
        font-size:0.7rem;
    }
`

const TextArea = styled(Input)`
    height:150px;
    resize: none;
`

const Opciones = styled(Input)`
    color: #000;
    background-color: #eee;

    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

const ContenedorInputLabel = styled.div`
   display:flex;
   flex-direction:column;
`

const Error = styled.p`
    color:#cc0000;
    margin-left:4%;
    font-size:0.8rem;
    font-family:FontMenu;
    display:${props => props.display};
`

const Label = styled.label`
    color:#fff;
    margin-top:20px;
    margin-left:20px;
    margin-bottom:10px;
    font-family: FontMenu;

    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

const EnviadoMensaje = styled(Label)`
    color:#fff;
    margin-left:0;
    margin-top:8px;
    padding-top:3px;
    font-size:1.2rem;
    border-radius:6px;
    margin-bottom:12%;
    padding-left:175px;
    background:${props => props.background};
    font-family:FontMenu;
`

const LabelInfo = styled(Label)`
    margin-left:4%;
    font-size:0.8rem;
`

const LabelRetiro = styled(Label)`
    display:${props => props.display};
`

const FieldRetiro = styled(Input)`
    display:${props => props.display};
`

const Boton = styled.button`
    
    height:40px;
    color: #fff;
    margin-top:20px;
    cursor: pointer;
    font-size:0.8rem;
    margin-bottom:4%;
    border-radius: 5px;
    background: #220FF5;
    font-family: FontMenu;
    text-align-last: center;
    
    :hover {
    background: #223BF5;
    }

    @media (max-width: 1270px) {
      font-size:0.5rem;
    }

    @media (max-width: 600px) {
      margin-top: 6%;
    }
`

function formulario() {

    const [OcultarField,setocultarField] = useState(false)
    const [mensajeEnviado, setmensajeEnviado] = useState(false)
    const [currentDay, setcurrentDay] = useState('00/00/0000')

    function obtenerDiaActual(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    setcurrentDay(today)
    }

    const postData = async(values)=>{
        let res = await fetch("https://formsubmit.co/ajax/797a413ef96dbb6354aa48617a6043cd",{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({ 
            correo: values.correo,
            fecha:  values.fecha,
            retiro: values.retiro,
            entrega: values.entrega,
            telefono: values.telefono,
            mensaje: values.mensaje,
            opciones: values.opciones
        })
        })

        if(res.status == 200){
            setmensajeEnviado(true)
        }else{
            setmensajeEnviado(false)
        }
        let data = await res.json()
        console.log(data)
    }

    function hadleSubmit(values){
        let opciones = document.getElementById('opciones')
        let mensaje = document.getElementById('mensaje')
        values.opciones = opciones.value
        values.mensaje = mensaje.value
        postData(values)
        //console.log(values)
    }

    function validadorDeCampos(values){
        
        const err = {}
        const fechaActual = new Date()
        const fecha = new Date(currentDay)
        const mensajeErr = 'Por favor ingrese una direccion.'
        const fechaUsuarioIngresada = new Date(values.fecha)
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(values.telefono.length < 10){
            err.telefono = 'El telefono debe contener 10 dígitos. (Celular con Whastapp)'
        }

        if(!pattern.test(values.correo) && values.correo.length != 0){
            err.correo = 'Ingrese un correo valido: correo@host.com'
        }

        if(fechaUsuarioIngresada <= fechaActual || fechaUsuarioIngresada === fecha){
            err.fecha = 'Por Favor, ingrese una fecha valida.'
        }

        if(values.retiro.length <= 0 && !OcultarField){
            err.retiro = mensajeErr
        }

        if(values.entrega.length <= 0){
            err.entrega = mensajeErr
        }

        return err;
}

    function obtenerValorSelect(e){

        const origenDestino = ["Flete", "Acarreo", "Transporte"]

        if(!origenDestino.includes(e.target.value)){
            setocultarField(true)
        }else{
            setocultarField(false)
        }
    }

    useEffect(() => {
        obtenerDiaActual()
    }, [])

  return (
    <>
        <SeccionFormulario id="formulario">
            <Img src={ImagenFormulario}/>
            <Formik
                initialValues={{
                    correo: '',
                    fecha:`${currentDay}`,
                    retiro:'',
                    entrega:'',
                    telefono:'',
                    mensaje: '',
                    opciones: ``
                }}
                onSubmit={(values, {resetForm}) => {
                    hadleSubmit(values)
                    resetForm({ values: '' })
                }}
                validate={validadorDeCampos}
            >
                <Formulario>
                    <LabelInfo htmlFor="opcionales">(*) Opcionales</LabelInfo>
                    <ContenedorInputLabel>
                        <Label htmlFor="correo">Correo (*)</Label>
                        <Input placeholder="correo@email.com" name="correo" type="text" />
                        <Error><ErrorMessage name="correo"/></Error>
                        <Label htmlFor="Telefono">Número de teléfono (Whatsapp)</Label>
                        <Input placeholder="11-xxxx-xxxx" name="telefono" type="text" />
                        <Error><ErrorMessage name="telefono"/></Error>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="motivo">Motivo de contacto</Label>
                        <Opciones id="opciones" onChange={obtenerValorSelect} as="select" name="opciones">
                            <option value="Flete">Flete</option>
                            <option value="Acarreo">Acarreo</option>
                            <option value="Desagote">Desagote</option>
                            <option value="Volquete">Volquete</option>
                            <option value="Acarreo">Acarreo de maquinaria</option>
                            <option value="Transporte">Transporte de cargas generales</option>
                            <option value="Transporte">Transporte de cargas peligrosas</option>
                            <option value="Bobcat">Bobcat</option>
                            <option value="Baños químicos">Baños químicos</option>
                            <option value="Autoelevadores">Autoelevadores</option>
                            <option value="Gruas Hidraulicas">Gruas Hidráulicas</option>
                            <option value="Almacenamiento">Almacenamiento en depósito</option>
                            <option value="Otro">Otros motivos de contacto</option>
                        </Opciones>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="mensaje">Fecha para servicio</Label>
                        <Input type="date" name="fecha" />
                        <Error><ErrorMessage name="fecha"/></Error>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="entrega">Lugar de Entrega</Label>
                        <Input placeholder="Dirección, Ciudad, Partido" name="entrega" type="text" />
                        <Error><ErrorMessage name="entrega"/></Error>
                        <LabelRetiro  display={OcultarField == true ? 'none' : 'inline'} htmlFor="retiro">Lugar de Retiro (Destino de búsqueda)</LabelRetiro>
                        <FieldRetiro display={OcultarField == true ? 'none' : 'inline'} placeholder="Dirección, Ciudad, Partido" name="retiro" type="text" />
                        <Error display={OcultarField == true ? 'none' : 'inline'}><ErrorMessage  name="retiro"/></Error>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="mensaje">Mensaje (*)</Label>
                        <TextArea id="mensaje" placeholder="Mensaje complementario" as="textarea" name="mensaje" type="text" />
            </ContenedorInputLabel>
                    <Boton type="submit" >Enviar</Boton>
                    {mensajeEnviado === true ? <EnviadoMensaje background={'#449d44'} >Mensaje Enviado ✓</EnviadoMensaje> : ''}
                </Formulario>
            </Formik>
        </SeccionFormulario>
    </>
  )
}


export default formulario