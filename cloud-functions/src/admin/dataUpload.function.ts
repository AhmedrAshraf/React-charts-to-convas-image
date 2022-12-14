// Imports
import * as functions from 'firebase-functions';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '..';

// Static Values
const db = getFirestore(app);

// Function for uploading data to Firestore
export default functions.https.onCall(
    async (data, context) => {
        if (context.auth?.token.admin !== true) {
            return({ "error": "Only admins can upload data" });
        }

        const organizedData = data.dataToUpload;
        
        Object.keys(organizedData).forEach(year => { // For each year within "organizedData"
            Object.keys(organizedData[year]).forEach(month => { // for each mont within "organizedData[year]"

                if(year == ""){
                    return ({"Success": "Data was uploaded"});
                }
                
                setDoc( // Call setDoc
                    doc(db, `${context.auth?.token.businessName}/data/${year}/${month}`), // Pass in the Document Reference
                    organizedData[year][month], // Pass into the data for the current month
                    { merge: true } // Set merge to true so it doesn't overwrite the document
                );
            });
        });
    }
);
