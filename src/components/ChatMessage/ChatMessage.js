import React from 'react';

function ChatMessage({ message }) {
    const {
        user,
        body,
        photoURL,
    } = message;
    return (
        <div>
            <div>
                <img src={photoURL} alt="{user}'s pfp" />
            </div>
            <div>
                <p>{user}</p>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default ChatMessage;
