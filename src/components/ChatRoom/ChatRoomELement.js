import styled from 'styled-components';

export const ChatRoomContainer = styled.div`
margin-top: 20px;
`;

export const Title = styled.h4`
text-transform: uppercase;
font-size: 30px;
font-family: Arial, Helvetica, sans-serif;

`
export const ChatMessagesContainer = styled.div`
background-color: #fff;
width: 70vw;
margin: 10px auto;
padding: 20px;
padding-top: 60px;
border: 1px solid black;
border-radius: 10px;
`

export const InputWrapper = styled.div`
width: 100vw;
text-align: left;
position: fixed;
bottom: -10px;
text-align: center;
height: 70px;
`;

export const ChatInput = styled.textarea`
width: 72vw;
border: 1px solid black;
padding: 10px;
border-radius: 10px;
font-size: 16px;
outline: none;
word-break: break-all;
font-family: Arial, Helvetica, sans-serif;
`;

export const SendButton = styled.button`
width: 8vw;
height: 40px;
margin: 10px;
font-weight: bolder;
font-size: 15px;
border: none;
color: #fff;
-webkit-box-shadow: 5px 5px 15px 5px #fff; 
box-shadow: 5px 5px 15px 5px #fff;
outline: none;
transition: 0.5s ease-in-out;
background-image: linear-gradient(to left bottom, #3c6cf4, #3661f4,
 #3355f4, #3448f2, #3939f0);
 border-radius: 6px;
&:hover{
    background-color: #fff;
    color: black;
    transition: 0.5s ease-in-out;
}
position: fixed;
z-index: 999;
bottom: 1px;
right: 210px;
`
