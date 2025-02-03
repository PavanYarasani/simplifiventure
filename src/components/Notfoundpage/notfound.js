import "./notfound"
import Navbar from "../Navbar/navbar";
 import {NavLink} from "react-router-dom";
const Notfound = ()=> {
    return (
        <div className="container">
             <Navbar/> 
            <h1>Page Not Found</h1>
            <p>Sorry we couldn't find the page you were looking for. We suggest that you return to main sections</p>
            <li> <NavLink  to = "/simplifiventure" className="nav-item"> <button>Go To Home</button></NavLink></li> 
        </div>
        
    )
}
export default Notfound;