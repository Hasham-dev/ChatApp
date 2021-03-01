import React from 'react';
import { auth } from '../../services/firebase';

function SignOut() {
    return auth.currentUser && (
        <div>
            <button
                type="button"
                onClick={() => auth.signOut()}
            >
                Sign Out
            </button>
        </div>
    )
}

export default SignOut;
