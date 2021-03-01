import React from 'react';
import { Container, Image } from './ChatMessagesElement';

function ChatMessage({ message }) {
    const {
        user,
        body,
        photoURL,
    } = message;
    return (
        <Container>
            <ContainerWrapper>
                <div>
                    <Image src={photoURL} alt="{user}'s pfp" />
                </div>
                <div>
                    <p>{user}</p>
                    <p>{body}</p>
                </div>
            </ContainerWrapper>
        </Container>
    );
}

export default ChatMessage;
