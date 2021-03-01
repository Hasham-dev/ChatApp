import React from 'react';
import { firebas, auth } from '../../services/firebase'
import { Button, Container, Title } from './SignInElement';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebas.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <Container>
    <Title>Chit Chat App</Title>
    <Button type="button" onClick={signInWithGoogle}>
            Sign In With Google
    </Button>
    </Container>
    )
}

export default SignIn;
