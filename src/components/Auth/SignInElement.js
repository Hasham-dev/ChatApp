import styled from 'styled-components';

export const Button = styled.button`
width: 20vw;
height: 40px;
padding: 10px;
font-weight: bolder;
font-size: 15px;
border: none;
clear: both;
color: #fff;
-webkit-box-shadow: 5px 5px 15px 5px #fff; 
box-shadow: 5px 5px 15px 5px #fff;
outline: none;
transition: 0.5s ease-in-out;
background-image: linear-gradient(to left bottom, #3c6cf4, #3661f4,
 #3355f4, #3448f2, #3939f0);
 border-radius: 6px;
    margin-top: 50vh;
&:hover{
    background-color: #fff;
    color: black;
    transition: 0.5s ease-in-out;
}

`;

export const Title = styled.h1`
text-transform: uppercase;
font-size: 60px;
font-family: Arial, Helvetica, sans-serif;

`;
export const Container = styled.div`
width: 100vh;
height: 100vh;
margin: auto auto;
`;
