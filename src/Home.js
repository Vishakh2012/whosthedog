import Child from "./components/Child";
import User from "./components/User";

const Home = () => {
    return ( 
        <div className = "bg-black h-screen flex">
            <Child/>
            <User/>
        </div>
     );
}
 
export default Home;