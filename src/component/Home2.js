import React ,{useState ,useEffect } from "react";
import { collection,getDocs } from "firebase/firestore";
import db from './../Firebase';
import './Home.css';
 
 
const Home1 = ( ) => {
     
    const [data, setData] = useState([]);

   useEffect(()=>{
     console.log("hii hero")
})  
const colRef = collection(db, "cities");
try {
    const docsSnap =async()=> await getDocs(colRef);
    docsSnap.map(doc => {
        const data= doc.data();
        setData(arr => [...arr , data]);
    })
} catch (error) {
    console.log(error);
}
    return (
        <div className="bg">
        <main className="layout">
    
        <section className="Example">
        
            <div className="title">
                <h2>Get Product</h2>
                {/* <h1>{props.name}</h1> */}
            </div>
            <div id="APIcards">
            {
                data.map((user, index) => {
                  if(index<12) { 
            return(
                <div className="cards" >
        <div className="Images" >
         <img src= { user.user.url} alt="img" key={index}/>
        </div>
        <div className="Name-Price" key={index}  >
            <h5> {user.user.title} </h5>
            <p>${user.user.price}</p>
        </div>
        <div className=" AddCart">
        <button>Buy Now</button>
        </div>
    </div>
    )
            }} )
            }
            </div>
        </section>
    </main>
    </div>
    );
}
export default Home1;