import React from 'react'
import styled from 'styled-components'

export default function ContainerTemperaturaAtual({
  text = 'Inseira Um texto',
  temperatura,
  link = 'LinkOfImage',
  simbolo
  
}){


 

  return(
    <TemperaturaAtual  link={link}>
      
    <div className={'textPlusNumber'}>
      <h1>{text}</h1>
      <h2>
       {temperatura} {simbolo}
      </h2>
    </div>
   

    </TemperaturaAtual>
  )
}

const TemperaturaAtual = styled.div`
    display: flex;
    height: 23em;
    width: 23em;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    background-color: white;
    border-radius: 20px;
     

  .textPlusNumber {

    h1{
     
        color: #87D0AF;
        opacity: 1;
        font-size: 50px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      
     
      }

      h2{
        border-radius: 20px;
        opacity: 1;
        color: #87D0AF;
        font-size: 50px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
  }
` 