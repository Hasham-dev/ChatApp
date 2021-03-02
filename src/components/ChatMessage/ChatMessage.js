import React, { useEffect } from 'react';
import {
    Container,
    Image,
    UserName,
    ContainerWrapper
} from './ChatMessagesElement';
import { auth } from '../../services/firebase';

function ChatMessage({ message }) {
    const {
        user,
        body,
        photoURL,
        uid
    } = message;

    if (uid === auth.currentUser.uid) {
        return (
            <Container user>
                <ContainerWrapper user>
                    <UserName>{user}</UserName>
                    <p>{body}</p>
                </ContainerWrapper>
                <div>
                    <Image src={photoURL} alt="{user}'s pfp" />
                </div>
            </Container>
        )
    }
    return (
        <Container>
            <div>
                <Image src={photoURL} alt="{user}'s pfp" />
            </div>
            <ContainerWrapper>
                <UserName>{user}</UserName>
                <p>{body}</p>
            </ContainerWrapper>
        </Container>
    );
}

export default ChatMessage;
