import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <nav className = "bg-black flex">
            
            <div className = "text-cyan-200 flex-1 text-center">
                <Link to = "/">
                    Play again
                </Link>
            </div >
            <div className = "text-cyan-200 flex-1 text-center">
                <Link to = "result">
                    Results
                </Link>
            </div>
            <div className = "text-cyan-200 flex-1 text-center">
                <Link to = "#">
                    Settings
                </Link>
            </div>
        
        
        </nav>
     );
}


export default Nav;