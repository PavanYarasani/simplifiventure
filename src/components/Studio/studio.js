
import React, { useState } from "react";
import "./studio.css"
import Navbar from "../Navbar/navbar";
const Studio = ()=> {
    

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("*All fields are required.");
      return;
    }
    setError("");
    alert("Message Sent!");
  };

  return (
    <div>
      <Navbar/>
    <div className="contact-flex-container">
       <div className="text">
            <h1>Contact Us</h1>
            <p>If you are any from me or any types of quaries related to my tutorial, you can send me message feom here. it's my plessure to help you.
           </p>
         </div>
        <form onSubmit={handleSubmit} className="p-6 bg-gray-100">
     
      <div className ="input-container">
          <label>Name</label>
          <br/>
          <input type="text" name="name" placeholder="Name" onChange={handleChange}  /> 
      </div>
      <div className ="input-container">
           <label>Email</label>
           <br/>
           <input type="email" name="email" placeholder="Email" onChange={handleChange}  />
      </div>
      <div>
          <label>Message</label>
          <br/>
          <textarea name="message" placeholder="Message"  onChange={handleChange}></textarea>
      </div>
      {error && <p className="error-msg">{error}</p>}
      <button type="submit" >Submit</button>
      
    </form>
     <div>
        
     </div>
    </div>
  
    </div>
  );
};

export default Studio;