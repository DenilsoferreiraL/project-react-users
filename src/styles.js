import styled from "styled-components"
import Background from "./assets/background1.svg"


export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100vh;
`
export const ContainerItens = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg,
      rgba(255, 255, 255, 0.60) 0.84%,
      rgba(255, 255, 255, 0.60) 0.85%,
      rgba(255, 255, 255, 0.15) 100%);
padding: 50px 36px;
`
export const Image = styled.img`
margin-top: 30px;
`
export const H1 = styled.h1`
color: #FFF;
text-align: center;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 80px;
`
export const InputLabel = styled.p`
color: #eeeeee;
font-weight: bold;
font-size: 18px;
font-style: normal;
line-height: 22px; 
letter-spacing: -0.408px;
margin-left: 25px;
`
export const Input = styled.input`
width: 342px;
height: 58px;
border: none;
outline: none;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding-left: 25px;
font-size: 24px;
font-style: normal;
font-weight:normal;
line-height: 28px;
color: #ffffff;
margin-bottom: 34px;
`

export const Button = styled.button`
width: 342px;
height: 74px;
gap: 20px;
margin-top: 132px;
border-radius: 14px;
background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
font-size: 17px;
font-style: normal;
font-weight: bold;
line-height: 28px;
color: #FFF;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    opacity:0.8;
}

&:active{
    opacity: 0.5;
}
`