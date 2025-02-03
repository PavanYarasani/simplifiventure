
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.js"
import Team from "./components/Team/team.js"
import Studio from "./components/Studio/studio.js"
import Notfound from "./components/Notfoundpage/notfound.js"
import Footer from "./components/Footer/footer.js"
function App() {
  return (
   <BrowserRouter>  
          <Routes >  
            <Route path="/simplifiventure" element={<Home/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/studio" element={<Studio/>}/>
             <Route path= "*" element={<Notfound/>}/>  
         </Routes> 
         <Footer/>
   </BrowserRouter>
  
  );
}

export default App;
