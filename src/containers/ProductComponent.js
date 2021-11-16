import React from 'react'
import { useSelector } from 'react-redux';
import  { Link }  from 'react-router-dom'


export const ProductComponent = () => {

    const products = useSelector((state)=> state.myreducers.products)
    

    const final = products.map((data)=>{
        const {id,image,  title, price, category} = data
        return (
            
         
                <div className="col-md-3 my-5" key={id}>
                       <Link to={`/products/${id}`}>
                                <div className="card">
                                    <div className="card-body text-left">
                                        <div className="img-fluid"></div>
                                        <img src={image} alt={title} className="img-fluid img" />
                                    
                                        
                                        <h5 className="mt-3 mb-2">{title}</h5>
                                        <p className="font-weight-bold">${price}</p>
                                        <p className="text-muted">{category}</p>
                                        
                                        
                                    </div>
                                </div>
                     </Link>
                </div>
             
          
        )
    })



    
    return (
         <>{final}</>
    )
}
