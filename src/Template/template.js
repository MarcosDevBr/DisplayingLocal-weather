import React, { useState, useEffect, Fragment } from 'react'
import { GiIceCube, GiWaterDrop } from "react-icons/gi";
import ContainerNavIcons from '../Componetes/ContainerNavIcons/content'
import { WiFire, WiThermometerExterior,WiCelsius } from "react-icons/wi";
import { TemplateWrapper, NavContainer, SliderConteiner } from '../Template/styless'
import ContainerTemperaturaAtual from '../Componetes/TemperaturaAtual/temperaturaAtual';
import axios from 'axios';


export default function Tempalte() {

  const [itemDoMenuSelecionado, setItemDoMenuSelecionado] = useState('Temperatura Atual');
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }  
    });
    setWeather(res.data);
  }
  
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
     
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  function alterarItemAtual(navCirclePlusIcon) {
    console.log(itemDoMenuSelecionado)
      setItemDoMenuSelecionado(navCirclePlusIcon)
  }

  if(weather == false) {
    return (
      <Fragment>
        Você precisa habilitar a localização no browser o/
        
      </Fragment>
    )
} else {
  return(
    <TemplateWrapper>

      <SliderConteiner>

      { 
        itemDoMenuSelecionado === 'Temperatura Atual' &&
        
        <ContainerTemperaturaAtual

          text ={'Temperatura Atual'}
          temperatura = {weather['main']['temp']}
          simbolo={'°'}
          value={'atual'}

          />
            }

    {
        itemDoMenuSelecionado === 'Temperatura Máxima' &&
      
        <ContainerTemperaturaAtual

          text ={'Temperatura Máxima'}
          temperatura ={weather['main']['temp_max']}
          simbolo={'°'}
        
        />
        }

      { 
        itemDoMenuSelecionado === 'Temperatura Mínima' &&
        <ContainerTemperaturaAtual

          text ={'Temperatura Mínima'}
          temperatura ={weather['main']['temp_min']}
          simbolo={'°'}

        />
          }

        {
          itemDoMenuSelecionado === 'Pressão' &&
        
        <ContainerTemperaturaAtual

          text ={'Pressão'}
          temperatura = {weather['main']['pressure']}
          simbolo={'hpa'}
          
        />
          }


      { 
          itemDoMenuSelecionado === 'Humidade' &&
        <ContainerTemperaturaAtual
          text ={'Humidade'}
          temperatura =  {weather['main']['humidity'] }
          simbolo={'%'}
        
        />

          }

      </SliderConteiner> 
      

      <NavContainer>
        
        <ContainerNavIcons
          icon={  <WiCelsius className={'icon'}/>}
          text={'Temperatura Atual'}
          functionCallBack={alterarItemAtual}
          activeMenuItem={itemDoMenuSelecionado}
        />


        <ContainerNavIcons
          icon={  <WiFire className={'icon'}/>}
          text={'Temperatura Máxima'}
          functionCallBack={alterarItemAtual}
          activeMenuItem={itemDoMenuSelecionado}
        />

        <ContainerNavIcons
          icon={  <WiThermometerExterior className={'icon'}/>}
          text={'Temperatura Mínima'}
          functionCallBack={alterarItemAtual}
          activeMenuItem={itemDoMenuSelecionado}
        />

        <ContainerNavIcons
          icon={  <GiIceCube className={'icon'}/>}
          text={'Pressão'}
          functionCallBack={alterarItemAtual}
          activeMenuItem={itemDoMenuSelecionado}
        />

        <ContainerNavIcons
          icon={  <GiWaterDrop className={'icon'}/>}
          text={'Humidade'}
          functionCallBack={alterarItemAtual}
          activeMenuItem={itemDoMenuSelecionado}
        />

      </NavContainer>
    
    </TemplateWrapper>
  )
}
}


  