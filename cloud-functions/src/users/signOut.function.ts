// Imports
import * as functions from 'firebase-functions';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '..';

// Static values needed
const auth = getAuth(app);

// Function for signing out of an account
export default functions.https.onCall(
    (data, context) => {
        // Call the sign out function
        signOut(auth)
            // On a success
            .then(() => {
                // Return an appropriate message as json
                return({'message': 'Success'});
            })
            // On a failure
            .catch((error) => {
                // Return the error code and message as json
                return({
                    'errorCode': error.code,
                    'errorMessage': error.message
                });
            });
    }
);
