import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    
    const q = query(itemsCollectionRef);
    
    const querySnapshot = await getDocs(q);
    
    const items = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
};

export const addItem = async (userId, item) => {
  try {
    
    const itemsCollectionRef = collection(db, "users", userId, "items");
    
    const docRef = await addDoc(itemsCollectionRef, item);
    
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};