// Imports
import * as functions from 'firebase-functions';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import * as admin from 'firebase-admin';
import { getFirestore, doc, setDoc, arrayUnion } from 'firebase/firestore';
import { app } from '..';

// Static values needed
const auth = getAuth(app);
const db = getFirestore(app);

// Function for creating an account
export default functions.https.onCall(
    (data, context) => {
        if(!context.auth?.token.admin){
            return {error: "you need to be an admin"}
        }
        // Call the function for creating an account, passing in the email and password
        createUserWithEmailAndPassword(auth, data.email, data.password)
            // On a success
            .then((userCredential) => {
                const userDetails = userCredential.user;
                // Sign out of the new user
                signOut(auth).then(() => {
                    // Sign in as the admin user
                    signInWithEmailAndPassword(auth, 'admin@e2s.com', 'Admin123').then(async () => {
                        // Add the user's UserId to the database in the "users" document for the passed in business code
                        await setDoc(
                            doc(db, String(data.businessName), 'users'),
                            { users: arrayUnion(userDetails.uid) },
                            { merge: true }
                        );

                        await setDoc(
                            doc(db, String(data.businessName), 'data'),
                            {},
                            { merge: true }
                        );

                        if (data.newAdmin) {
                            admin.auth().getUserByEmail(data.email).then(
                                (userRecord) => {
                                    admin.auth().setCustomUserClaims(userRecord.uid, { admin: true, businessName: data.businessName });
                                }
                            );
                        } else {
                            admin.auth().getUserByEmail(data.email).then(
                                (userRecord) => {
                                    admin.auth().setCustomUserClaims(userRecord.uid, { admin: false, businessName: data.businessName });
                                }
                            );
                        }

                        // Return the business code and user data
                        return ({ 'message': 'account created' });
                    })
                })
            })
            // On an failure
            .catch((error) => {
                // Return the error code and message as json
                return ({
                    'errorCode': error.code,
                    'errorMessage': error.message
                });
            });
    }
);