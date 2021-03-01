import React, { useRef, useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebas, firestore, auth } from '../../services/firebase';
import ChatMessage from '../ChatMessage/ChatMessage';

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
        } catch (err) {
            console.log(err);
        }
        console.log(e);
        setFormValue('')
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div>
                {
                    messages
                    && messages.map((msg) => (
                    <ChatMessage
                        key={msg.id}
                        message={msg} />
                    ))
                }
                <span ref={dummy} />
            </div>
            <div>
                <input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Say Something!"
                />
                <button
                    type="submit"
                    disabled={!formValue}
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatRoom;
