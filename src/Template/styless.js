import styled from 'styled-components'

const TemplateWrapper = styled.div`
  
  background-color: #fff; 
    height: 100vh;
    width: 100vw;
    overflow: hidden;
   

`


const SliderConteiner = styled.div`
    display: flex;
     width: 100%;
     height: 70%;
    background-image: url("https://media1.giphy.com/media/3o7btWO4T2Wp97lbgc/giphy.gif?cid=790b7611421263be6b40f68dcd98bd288400bb2c93a93c60&rid=giphy.gif");
    background-size: cover;
    background-repeat: bottom;
    justify-content: center;
    align-items: center;
    `

    
const NavContainer = styled.div`
    
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #fff; 
    height: 30%;
    width: 100%;
`



export {
    TemplateWrapper,
    NavContainer,
    SliderConteiner
   
 
}