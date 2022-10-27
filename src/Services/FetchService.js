import {db,app,firestore} from '../Services/Config'
import { collection,doc, getDocs} from "firebase/firestore";


async function velasRancias(){
    const velasCollectionRef = collection(db,"velas")
    await getDocs(velasCollectionRef)
    .then(res=>{
        const velaL = res.docs.map(doc=>({data:doc.data(), id:doc.id}))
        console.log(velaL)    
    })

}

export default velasRancias;