import React, { useState, useRef, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, firebas } from './services/firebase';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebas.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <button type="button" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  )
}

function SignOut() {
  return auth.currentUser && (
    <div>
      <button type="button" onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

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
          && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)
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

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <SignOut />
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
