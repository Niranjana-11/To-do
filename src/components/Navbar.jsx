import {Link} from "react-router-dom";
const Navbar=()=>{
    return(
    
        <header>
            <h1><u>MY TO-DO LIST(●'◡'●)</u></h1>
            <nav className="navbar">
            
            <Link to="/" style={{ marginRight: '50px' }}>Home</Link>
           <Link to="/about">About</Link>
            </nav>
        </header>
       
    );
};
export default Navbar;