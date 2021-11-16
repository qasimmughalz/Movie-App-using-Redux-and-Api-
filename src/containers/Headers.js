 import React from 'react'
import { Link } from 'react-router-dom'
 
 const Headers = () => {
     return (
         <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bttom border py-3">
                <div className="container">
                    <h3>Fake Shop</h3>
                </div>
            </nav>
            <Link to="/products">

            <button className="btn btn-primary">Go to the Shop</button>
            </Link>
         </div>
     )
 }
 
 export default Headers
 