
import "./footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer>
          <div className="home-grid-container">
            <div className ="flex-container">
                     <div className="build-image image-order">
                        <img src="https://employmentconnections.bc.ca/wp-content/uploads/2023/01/ecnc_about_hands_v2.jpg"alt="venture"/>
                     </div>
                </div>
                <div class="content content-order">
                    <h2>Join Us</h2>
                    <p>We have monthly rountable discussions with industry expers finitexh innovatio in the industry and looking for potential growth areas</p>
                </div>
            </div>
               
            <div className="home-grid-container">  
                <div className ="flex-container">
                    <div class="content">
                      <h2>Contact</h2>
                      <p>We are a business-to-business fintech focuses venture studio. Our mission is to enable diginal transformation in the banking industry.</p>
                      <p className="learn">Learnmore@simplifiventures.com </p>
                    </div>
                </div>
                <div className="speetching-img-container">
                    <img src="https://miro.medium.com/v2/resize:fit:5000/1*hVnCdEtqlQvHS1GTXbo5Xw.jpeg"alt="venture"/>
                </div>
            </div>
            <div className="learn-more">
            <p>Learnmore@simplifiventures.com</p>
            </div>
    </footer>
  );
};

export default Footer;