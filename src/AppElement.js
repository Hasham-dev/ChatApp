import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    flex: 1;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const ContainerWrapper = styled.div`
width: 100vw;
flex: 1;
text-align: center;
background-image: linear-gradient(to left bottom, #8c99f4, #9fa7f2,
 #b1b4f0, #c1c3ee, #d1d1eb);
`;

export const GlobalStyles = createGlobalStyle`
background-image: linear-gradient(to left bottom, #8c99f4, #9fa7f2,
 #b1b4f0, #c1c3ee, #d1d1eb);
 background-color: black;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
  'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  overflow: hidden;
  
  button{
      cursor: pointer;

  }


`
