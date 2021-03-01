import React from 'react';
import { auth } from '../../services/firebase';
import { Button } from './SignOutElement';

function SignOut() {
    return auth.currentUser && (
        <div>
            <Button
                type="button"
                onClick={() => auth.signOut()}
            >
                Sign Out
            </Button>
        </div>
    )
}

export default SignOut;
