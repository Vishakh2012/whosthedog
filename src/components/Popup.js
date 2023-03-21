const Popup = ({data, visibility}) => {
    return ( 
        <div className=" ">
        {data === 0 ? (
        <div className="w-72 flex align-middle justify-center text-white p-4 mx-auto">
          <p className = {visibility=== 1 ?"hidden": "bold"}>sorry you have answered incorrectly</p>
          
        </div>
      ) : (
        <div className = "w-72 flex align-middle justify-center text-white p-4 mx-auto align-items-center">
          <p className = {visibility=== 1 ?"hidden": "bold"}>congratulation you have answered the answer correctly</p>
          
        </div>
      )}
        </div>//this div will be centered on the sreen and will display, if the answer matches with that of the mode
        //initially the model will have visibility set as none then on submit the popup will pop
     );
}
 
export default Popup;