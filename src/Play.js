import { useEffect, useState , useCallback} from "react";
import gd from "../src/assets/gd.jpeg"
import gs from "../src/assets/gs.jpeg"
import sh from "../src/assets/Siberian_Husky.jpeg"
import Popup from "./components/Popup";
const Play =  () => {
  
  const [Model, setModel] = useState(null);
  const [Guess, setGuess] = useState("A");
  //const [ans, setAns] = useState("");
  const [data, setData] = useState();
  const [visible, setVisible] = useState(0);


  

  const  checkImage =  useCallback( async (guess) => {
      const imag = document.getElementsByTagName('img');
      const pred = await Model.classify(imag[0])
      const arrAns = pred[0].className.split(",")
      if (arrAns[0].toUpperCase() === guess.toUpperCase())
      {
        console.log("correct answer");
        //console.log(arrAns[0]);
        setData(1)

      }
      else
      {
        console.log("wrong answer");
        //console.log(arrAns[0]);
        setData(0)

      }
      setVisible(0)
    }, [Model]
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
    console.log(data);

    }, [data])

    

    
    const handleSubmit = async (e,guess) => 
    {
      e.preventDefault();
      checkImage(guess);
      
      

    }

    const setimg = async () => {
      const arr = [gd,gs,sh]
      setVisible(1)
      const randomIndex = Math.floor(Math.random() * arr.length);
      const selectedPicture = arr[randomIndex];
      const img = document.getElementById("image")
      img.src = selectedPicture
    }

    // useEffect(() => {
    //   if (ans) {
    //     checkImage();
    //   }
    // }, [ans, checkImage]);

    
    return ( 
        <div className="bg-black h-screen flex justify-evenly  items-center flex-col">
          <div className="flex flex-col w-screen">
            <img id = "image" src= { gs }   alt="recognition question " className="mx-auto h-72 w-72"/>
            <Popup data = { data } visibility = {visible}/>
            <button  className = "justify-center bg-cyan-700 hover:bg-cyan-500 hover:text-white align-middle p-4 rounded-full w-56 mx-auto" onClick={() => setimg()} >change image</button>
           e </div>
              <form className="w-screen flex justify-center flex-col" onSubmit={ async (e) => {await handleSubmit(e,Guess); 
      } }>
            <input type="text" className="bg-cyan-200 rounded-full flex mx-auto w-1/2 py-2 px-4" placeholder="enter the breed" value = { Guess } onChange = {(e) => {setGuess(e.target.value); }}/>
            <button  className = "bg-cyan-700 hover:bg-cyan-500 hover:text-white mt-4 mx-auto p-4 rounded-full w-56" >submit</button>
            
            </form>
            
            
        </div >

     );
}
 
export default Play;