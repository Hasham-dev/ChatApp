import React, { useState, useRef, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, firebas } from './services/firebase';
import SignIn from './components/Auth/SignIn';
import SignOut from './components/Auth/SignOut';
import ChatRoom from './components/ChatRoom/ChatRoom';
import { Container, ContainerWrapper, GlobalStyles } from './AppElement'

function App() {
  const [user] = useAuthState(auth);

  return (
    <ContainerWrapper>
      <GlobalStyles />
      <Container>
        <SignOut />
        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </Container>
    </ContainerWrapper>
  );
}

export default App;
