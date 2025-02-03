import "./team.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/navbar";
const API_URL = "https://fakestoreapi.com/products";

const Team = ()=> {
       
          const [data, setData] = useState([]);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);
        
          useEffect(() => {
            axios
              .get(API_URL)
              .then((response) => {
                setData(response.data)
                console.log(response.data[4])
                
                setLoading(false);
              })
              .catch((error) => {
                setError(error.message);
                setLoading(false);
              });
          }, []);
        
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error}</p>;
        
          return (
           <div>
              <div>
              <Navbar/>
              </div>
             <div className ="container">
              <h2>Posts</h2>
              <h3>Calling API's</h3>
              <ul>
                {data.map((post) => (
                  
                      <ul className="product-container">
                         <img src = {post.image} alt="product"/>
                          <li key={post.id}>{post.title}</li>
                  </ul>
                 
                ))}
              </ul>
            </div>
            </div>
          );
        };
        
          


export default Team;