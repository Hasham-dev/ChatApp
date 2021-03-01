import React from 'react';
import { firebas, auth } from '../../services/firebase'

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

export default SignIn;
