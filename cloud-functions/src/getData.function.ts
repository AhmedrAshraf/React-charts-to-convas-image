import { getFirestore, collection, doc, query, getDocs, DocumentData } from "firebase/firestore";
import * as functions from "firebase-functions"
import { app } from ".";

// Static Values
const db = getFirestore(app);

export default functions.https.onCall(
    async (data, context) => {
        const returnData: { [x: string]: DocumentData; } = {};

        const querySnapshot = await getDocs(query(collection(doc(collection(db, context.auth?.token.businessName), "data"), data.year)));
        querySnapshot.forEach(
            (doc) => {
                returnData[doc.id] = doc.data();
            }
        );

        return returnData;
    }
);
