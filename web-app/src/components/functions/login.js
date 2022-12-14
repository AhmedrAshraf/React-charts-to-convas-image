import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// Sign In function
export const login = async (history, user, password, businessName) => {
    signInWithEmailAndPassword(auth, user, password)
        // On a success
        .then(async (userCredential) => {
            // Get the "users" document for the provided business code
            console.log("business name", businessName);
            const docSnap = await getDoc(doc(db, businessName, "users"));
            // If it doesn't exist (business code not valid), pass back appropriate error as json
            if (!docSnap.exists()) {
                // Sign out of the user that just signed in
                signOut(auth).then(() => {
                    alert("Invalid Business Code");
                    history.push("/login");
                });
                // Otherwise
            } else {
                // Get the data in the document and store as an array of strings
                const docData = docSnap.data().users;
                // Check if the user's UID is in the document
                const userFound = docData.some((element) => {
                    if (element === userCredential.user.uid) {
                        return true;
                    }

                    return false;
                });

                // If the user is found, return the business code and user object
                if (userFound) {
                    alert("user found");
                    console.log(auth.currentUser);
                    history.push("/");
                    // Otherwise
                } else {
                    // Sign out of the user that just signed in
                    signOut(auth).then(() => {
                        // Return an error message
                        history.push("/login");
                    });
                }
            }
        })
        // On an failure
        .catch((error) => {
            // Return the error code and message as json
            alert(error);
            history.push("/login");
        });
};