import "./home.css"
import Navbar from "../Navbar/navbar";
const Home = () =>{
    return(
         <div>
            <div className="home-grid-container">  
                <div className ="flex-container">
                    <Navbar/>
                    <div class="content">
                    <h2>Incubating innovative solutions for the financial services</h2>
                    <p>We are a business-to-business fintech focuses venture studio. Our mission is to enable diginal transformation in the banking industry.</p>
                    </div>
                </div>
                <div className="speetching-img-container">
                    <img src="https://i0.wp.com/www.ridgepoint-global.com/wp-content/uploads/2022/03/CommsPhoto.jpg?resize=253%2C300&ssl=1"alt="venture"/>
                </div>
            </div>
            <div className="home-grid-container">
            <div className ="flex-container">
                     <div className="build-image image-order">
                        <img src="https://www.goworkwize.com/hubfs/photo-1510074377623-8cf13fb86c08_q=80%26w=2072%26auto=format%26fit=crop%26ixlib=rb-4_1200x627%20%281%29.jpg"alt="venture"/>
                     </div>
                </div>
                <div class="content content-order">
                    <h2>Incubating innovative solutions for the financial services</h2>
                    <p>We are a business-to-business fintech focuses venture studio. Our mission is to enable diginal transformation in the banking industry.</p>
                </div>
            </div>
               
            <div className="home-grid-container">  
                <div className ="flex-container">
                    <div class="content">
                    <h2>Incubating innovative solutions for the financial services</h2>
                    <p>We are a business-to-business fintech focuses venture studio. Our mission is to enable diginal transformation in the banking industry.</p>
                    </div>
                </div>
                <div className="speetching-img-container">
                    <img src="https://i.pinimg.com/736x/5e/b2/30/5eb230bf4aa5436da4c10155081e56c8.jpg"alt="venture"/>
                </div>
            </div>
            <div className="content-flex">
                <h1>We spun out of Primera Capital in 2020 </h1>
                <p>We run as an independent financial services venture studio. Today we have global partnerships with financial instititions to incubate new fintech innovations</p>
                <p> IMPROVING CUENT CAPABILITIES THROUGH INNOVATION</p>
                <h3>Leading Digital Transformation Solutions</h3>
                <div>
                <div className="tranform-cont">
                    <div className="cl">
                     <div className="trans-flex">
                      <div>
                        <img className="img-1" src ="https://i.pinimg.com/736x/5e/b2/30/5eb230bf4aa5436da4c10155081e56c8.jpg" alt="transform"/>
                      </div>
                      <div className="light-blue green">
                    </div> 
                    </div>
                    </div>
                    
                    <div className="trans-flex">
                      <div>
                        <img className="img-4" src ="https://i.pinimg.com/736x/5e/b2/30/5eb230bf4aa5436da4c10155081e56c8.jpg" alt="transform"/>
                      </div>
                      <div className="thick-blue">
                    </div>
                    
                 </div>
                 
                 
                    
                </div>
                </div>
            </div>
                
                
            
        </div>
       
    )

}
export default Home;