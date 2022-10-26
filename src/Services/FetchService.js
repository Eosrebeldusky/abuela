import {db,app,firestore} from '../Services/Config'
import { collection, getDocs} from "firebase/firestore";



   async function readDocument(){      
        const colref = collection(db, 'velas')
        const querySnapshot = await getDocs(colref);
        querySnapshot.forEach(doc=>{ console.log(doc.data())})
        //return querySnapshot.forEach(doc => { doc.data()})
        }
        /*
        export const documento = async function readDocument(){      
            const colref = collection(db, 'velas')
            const querySnapshot = await getDocs(colref);
            console.log(querySnapshot)
            //return querySnapshot.forEach(doc => { doc.data()})
            }
        */

export default readDocument;

