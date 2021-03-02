import styled from 'styled-components';

export const Container = styled.div`
margin: 10px;
width: 25vw;
padding: 10px;
border-radius: 10px;
display: flex;
word-break:break-all;
flex-direction: row !important;
right: 10px;
position: relative;
left: ${(props) => (props.user ? "40vw" : 0)};
`;

export const Image = styled.img`
width: 60px;
height: 60px;
border-radius: 50px;
position: relative;
top: 10px;
padding-right: 5px;
padding-left: 5px;
`

export const UserName = styled.p`
font-size: 20px;
position: relative;
font-weight: 700;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI'
, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
opacity: 0.8;
text-decoration: underline;
top: -10px;

`
export const ContainerWrapper = styled.div`
background-color: ${(props) => (props.user ? "#89f0ae" : "#8fc1f2")};
width: 100%;
border-radius: 10px;
text-align:left;
padding-left: 10px;
`
