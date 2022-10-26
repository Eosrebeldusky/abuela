import {db,app,firestore} from '../Services/Config'
import { collection,doc, getDocs} from "firebase/firestore";


/*

   async function readDocument(){      
        const colref = collection(db, 'velas')
        const querySnapshot = await getDocs(colref);
        console.log(querySnapshot)
        querySnapshot.forEach(doc=>{ console.log(doc.data())})
        //return querySnapshot.forEach(doc => { doc.data()})
        }
        
        export const documento = async function readDocument(){      
            const colref = collection(db, 'velas')
            const querySnapshot = await getDocs(colref);
            console.log(querySnapshot)
            //return querySnapshot.forEach(doc => { doc.data()})
            }
        

export default readDocument;
*/


async function velasRancias(){
    const velasCollectionRef = collection(db,"velas")
    await getDocs(velasCollectionRef)
    .then(res=>{
        const velaL = res.docs.map(doc=>({data:doc.data(), id:doc.id}))
        console.log(velaL)    
    })

}

export default velasRancias;