import styled from 'styled-components';

export const Button = styled.button`
width: 20vw;
height: 40px;
padding: 10px;
font-weight: bolder;
font-size: 15px;
border: none;
color: #fff;
-webkit-box-shadow: 5px 5px 15px 5px #fff; 
box-shadow: 5px 5px 15px 5px #fff;
outline: none;
position: fixed;
right: 10px;
bottom: 10px;
transition: 0.5s ease-in-out;
background-image: linear-gradient(to left bottom, #3c6cf4, #3661f4,
 #3355f4, #3448f2, #3939f0);
 border-radius: 6px;
&:hover{
    background-color: #fff;
    color: black;
    transition: 0.5s ease-in-out;
}

`;

export const wrapper = styled.div`

`
