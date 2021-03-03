import React, { useRef, useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebas, firestore, auth } from '../../services/firebase';
import ChatMessage from '../ChatMessage/ChatMessage';
import {
    ChatRoomContainer,
    Title,
    ChatMessagesContainer,
    ChatInput,
    InputWrapper,
    SendButton
} from './ChatRoomELement';

function ChatRoom() {
    const dummy = useRef();
    const scrollToBottom = () => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);

    const [messages] = useCollectionData(query, { idField: 'id' })
    const [formValue, setFormValue] = useState('');

    useEffect(scrollToBottom, [messages]);

    const sendMessage = (e) => {
        console.log(messages);

        const { displayName, uid, photoURL } = auth.currentUser;
        try {
            messagesRef.add({
                user: displayName,
                body: formValue,
                createdAt: firebas.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL,
            })
            console.log('Sended Success');
        } catch (err) {
            console.log(err);
        }
        console.log(e);
        setFormValue('')
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <ChatRoomContainer>
                <Title>
                    Chit Chat App
                </Title>
                <ChatMessagesContainer>
                    {
                        messages
                        && messages.map((msg) => (
                            <ChatMessage
                                key={msg.id}
                                message={msg} />
                        ))
                    }
                </ChatMessagesContainer>
                <span ref={dummy} />
            </ChatRoomContainer>
            <InputWrapper>
                <ChatInput
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Say Something!"
                />
                <SendButton
                    type="submit"
                    disabled={!formValue}
                    onClick={sendMessage}
                >
                    Send
                </SendButton>
            </InputWrapper>
        </div>
    )
}

export default ChatRoom;
