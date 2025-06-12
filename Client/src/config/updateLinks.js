import { db } from "./firebaseConfig";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

// Function to convert Google Drive link to direct download URL
const convertToDirectLink = (url) => {
    const match = url.match(/id=([^&]+)/);
    return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : url;
};


const updateFirestoreLinks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "media"));

        querySnapshot.forEach(async (document) => {
            const data = document.data();
            const updates = {};

           
            if (data.audioURL) {
                updates.audioURL = convertToDirectLink(data.audioURL);
            }

           

           
            if (Object.keys(updates).length > 0) {
                await updateDoc(doc(db, "media", document.id), updates);
                console.log(`Updated document ${document.id} with:`, updates);
            }
        });

        console.log("All URLs updated successfully!");
    } catch (error) {
        console.error("Error updating URLs:", error);
    }
};

updateFirestoreLinks();
