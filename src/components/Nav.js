import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <nav className = "bg-black h-10 flex">
            
            <div className = "text-cyan-200 flex-1 text-center">
                <Link to = "/">
                    Play
                </Link>
            </div >
            <div className = "text-cyan-200 flex-1 text-center">
                <Link to = "result">
                    Results
                </Link>
            </div>
            <div className = "text-cyan-200 flex-1 text-center">
                <Link to = "settings">
                    Settings
                </Link>
            </div>
        
        
        </nav>
     );
}


export default Nav;