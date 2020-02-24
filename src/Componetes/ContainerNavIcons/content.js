import React from 'react'
import styled from 'styled-components';

export default function ContainerNavIcons({
  icon = 'Inseira um incone',
  text = 'Insira um texto',
  activeMenuItem,
  functionCallBack
}) {
  
  function onClickIconPlusText() {
    if(!functionCallBack) return
    functionCallBack(text) 
  }

  return (

    <NavWeather 
      onClick={onClickIconPlusText}
      isActive={ activeMenuItem === text}
      className={activeMenuItem === text && 'cebolinha'}
    >

      <ContainerIcon >  
        {icon}
      </ContainerIcon>
    </NavWeather>
    )
}

  
const ContainerIcon = styled.div`
    font-size: 55px;
    padding-top: 10px;
    color: #fff;
      
      :hover{
        color: yellow;
      }
  `

const NavWeather = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #87D0AF;
  margin-left: 20px;
  border-radius: 50%;

    &.cebolinha {
      box-shadow: 0px 6px 15px 0px #000;
    }
        :hover  {
        box-shadow: 0px 6px 15px 0px #000;
    }
`