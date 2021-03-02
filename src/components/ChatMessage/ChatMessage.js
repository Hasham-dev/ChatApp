import React, { useEffect, useState } from 'react';
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
        uid,
        createdAt
    } = message;
    const [messageDate, setMessageDate] = useState()

    const fetchDate = async () => {
        if (createdAt !== null) {
            const date = await new Date(createdAt.seconds * 1000)
                .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            console.log(date);
            setMessageDate(date);
        }
    }

    useEffect(() => {
        fetchDate()
    }, [createdAt])
    if (uid === auth.currentUser.uid) {
        return (
            <Container user>
                <p>
                    {messageDate}
                </p>
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
            <p>
                {messageDate}
            </p>
        </Container>
    );
}

export default ChatMessage;
