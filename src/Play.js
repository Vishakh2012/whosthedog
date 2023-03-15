import { useEffect, useState , useCallback} from "react";
import gd from "../src/assets/gd.jpeg"
import gs from "../src/assets/gs.jpeg"
import sh from "../src/assets/Siberian_Husky.jpeg"
const Play =  () => {
  
  const [Model, setModel] = useState(null);
  const [Guess, setGuess] = useState("");
  const [ans, setAns] = useState("");


  

  const  checkImage =  useCallback( async () => {
      const imag = document.getElementsByTagName('img');
      const pred = await Model.classify(imag[0])
      const arrAns = pred[0].className.split(",")
      if (arrAns[0].toUpperCase() === ans.toUpperCase())
      {
        //console.log( ans +" is correct")
      }
      else
      {
        //console.log( ans + " is incorrect");
      }
      
    }, [Model,ans]
  )
    useEffect(() => {
      
      //console.log(img.src);
      
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

    useEffect(() => {
      checkImage();
    }, [Guess,checkImage]);

    
    const handleSubmit = async (e) => 
    {
      e.preventDefault();
      setAns(Guess);
      

    }

    const setimg = async () => {
      const arr = [gd,gs,sh]
      const randomIndex = Math.floor(Math.random() * arr.length);
      const selectedPicture = arr[randomIndex];
      const img = document.getElementById("image")
      img.src = selectedPicture
    }

    
    return ( 
        <div className="bg-black h-screen flex justify-center  items-center flex-col">

            <img id = "image" src= { gs }   alt="recognition question " className="mx-auto my-auto"/>
              <form className="w-screen mb-56 mx-2 flex justify-center flex-col" onSubmit={ async (e) => {await handleSubmit(e); checkImage() ; setimg()
      } }>
            <input type="text" className="bg-cyan-200 rounded-full flex mx-auto w-1/2 py-2 px-4" placeholder="enter the breed" value = { Guess } onChange = {(e) => {setGuess(e.target.value); }}/>
            <button  className = "bg-cyan-700 hover:bg-cyan-500 hover:text-white mt-4 mx-auto p-4 rounded-full w-56" >submit</button>
            </form>
            
        </div >

     );
}
 
export default Play;