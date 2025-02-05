import "./notfound.css"
import Navbar from "../Navbar/navbar";
 import {NavLink} from "react-router-dom";
const Notfound = ()=> {
    return (
        <div className="not-container">
             <Navbar/> 
           <div>
           <h1>Page Not Found</h1>
            <p>Sorry we couldn't find the page you were looking for. We suggest that you return to main sections</p>
            <NavLink  to = "/simplifiventure" className="nav-item"> <button>Go To Home</button></NavLink> 
           </div>
        </div>
        
    )
}
export default Notfound;