import { useEffect } from "react";

const Play = () => {
    
    useEffect(() => {
    //adding tensorflow-js
      const sptTf = document.createElement('script');
      sptTf.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1";

    //adding mobilenet - an image classification model
        const sptMn = document.createElement('script');
        sptMn.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"
        
    //adding the elements to the document
        document.body.appendChild(sptTf);
        document.body.appendChild(sptMn);
      return () => {
        document.body.removeChild(sptTf);
        document.body.removeChild(sptMn)
      }
    }, [])
    
    return ( 
        <div className="bg-black h-screen">
            <img src="{  }" alt="recognition question for children" className=""/>
            <input type="text" className="bg-cyan-200 rounded-md flex mx-auto w-150" />
        </div >

     );
}
 
export default Play;