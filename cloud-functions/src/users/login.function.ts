// Imports
import * as functions from 'firebase-functions';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '..';

// Static values needed
const auth = getAuth(app);
const db = getFirestore(app);

// Function for signing in
const login = functions.https.onCall(
    (data, context) => {

        // Call the sign in request, passing in an email and password
        signInWithEmailAndPassword(auth, data.userEmail, data.userPassword)
            // On a success
            .then(async (userCredential) => {
                // Get the "users" document for the provided business code
                const docSnap = await getDoc(doc(db, String(data.businessName), 'users'));
                // If it doesn't exist (business code not valid), pass back appropriate error as json
                if (!docSnap.exists()) {
                    // Sign out of the user that just signed in
                    signOut(auth).then(() => {
                        return({ 'errorMessage': 'business code not valid' });
                    });
                // Otherwise
                } else {
                    // Get the data in the document and store as an array of strings
                    const docData: Array<String> = docSnap.data().users;
                    // Check if the user's UID is in the document
                    const userFound = docData.some(element => {
                        if (element === userCredential.user.uid) {
                            return true;
                        }

                        return false;
                    });

                    // If the user is found, return the business code and user object
                    if (userFound) {
                        return({ 
                            'businessName': data.businessName,
                            'sessionToken': userCredential.user
                        });
                    // Otherwise
                    } else {
                        // Sign out of the user that just signed in
                        signOut(auth)
                            .then(() => {
                                // Return an error message
                                return({ 'errorMessage': 'user not found in business' });
                            });
                    }
                }
            })
            // On an failure
            .catch((error) => {
                // Return the error code and message as json
                return({
                    'errorCode': error.code,
                    'errorMessage': error.message
                });
            });
    }
);

login