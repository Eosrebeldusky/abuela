import {db,app,firestore} from '../Services/Config'
import { collection, getDocs, } from "firebase/firestore";


export const getAllConsole = () =>{
    async function readDocument(){      
        const querySnapshot = await getDocs(collection(db, 'velas'));
          querySnapshot.forEach((doc) => {  
          console.log(`read document, ${doc.id} => ${doc.titulo}`);
         });
        }
        readDocument()
    }
