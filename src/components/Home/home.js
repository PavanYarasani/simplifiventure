import "./home.css"
import Navbar from "../Navbar/navbar";
const Home = () =>{
    return(
         <div class="grid">
                
                <div className ="flex-container">
                    <Navbar/>
                    <div>
                    <h2>Incubating innovative solutions for the financial services</h2>
                    <p>We are a business-to-business fintech focuses venture studio. Our mission is to enable diginal transformation in the banking industry.</p>
                    </div>
                </div>
                <div className="img-container">
                    <img src="https://i0.wp.com/www.ridgepoint-global.com/wp-content/uploads/2022/03/CommsPhoto.jpg?resize=253%2C300&ssl=1"alt="venture"/>
                </div>
                
         </div>
    )

}
export default Home;