import { useEffect, useState } from "react";
import dogImg from "../src/assets/gd.jpeg"
const Play =  () => {
  const [Model, setModel] = useState(null);
    useEffect(() => {
      
      const fetchTfnMn = async () => {
    //adding tensorflow-js
      const sptTf = document.createElement('script');
      sptTf.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1";
      sptTf.onload = async () => {
          //adding mobilenet - an image classification model
        
        const sptMn = document.createElement('script');
        sptMn.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"
        sptMn.onload = async () => 
        {
          const model = await window.mobilenet.load()
          await setModel(model);
        }
        document.body.appendChild(sptMn);
      }
    
        
    //adding the elements to the document
        document.body.appendChild(sptTf);
        
      }
    fetchTfnMn();
    }, [])

    const  checkImage =  async () => {
      const imag = document.getElementsByTagName('img');
      const pred = await Model.classify(imag[0])
      console.log(pred);
      
    }

    
    return ( 
        <div className="bg-black h-screen flex justify-center  items-center flex-col">

            <img id = "image" src={ dogImg } alt="recognition question " className="mx-auto my-auto"/>
            <div className="mb-56 w-screen mx-2 flex justify-center flex-col">
            <input type="text" className="bg-cyan-200 rounded-md flex mx-auto w-1/2 p-2" placeholder="enter the breed" />
            <button onClick = {() => {checkImage();}} className = "bg-cyan-700 hover:bg-cyan-500 hover:text-white mt-4 mx-auto p-4 rounded-full w-56" >submit</button>
            </div>
        </div >

     );
}
 
export default Play;