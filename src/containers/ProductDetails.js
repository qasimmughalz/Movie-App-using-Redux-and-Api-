import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProducts , removeSelected   } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

export const ProductDetails = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id)

    const fetchsingle = async ()=>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err)=>{
            console.log("Error at fetch/ing single data ", err)
        })

     
        
        dispatch(selectedProducts(response.data))
    }

    useEffect(()=>{
        if( id && id !== "") fetchsingle();
        return ()=>{
            dispatch(removeSelected())
        }
    },[id])


        const singleDataStore = useSelector((state)=> state.sproduct)

        

        console.log(singleDataStore)
        const { price, title, image,  description} = singleDataStore

    return (
        <div className="container detail p-5">
            {
                Object.keys(singleDataStore).length === 0 ? (
                <h1>Loading ...</h1>
                )
                :
                (
                 
            <div className="row justify-content-ceter bg-transparent detail-row ailgn-item-center p-5">
                <div className="col-md-6 border">
                        <img src={image} alt={title} className="img-fluid" />
                </div>
                <div className="col-md-5 text-left m-auto border">  
                    <h3>{title}</h3>
                    <h5>${price}</h5>
                    <p>{description}</p>

                    <button className="btn btn-success my-3">Add to Cart</button> <br/>
                    <Link to="/products">
                    <button className="btn btn-secondary">Go Back</button>
                    </Link>

                </div>
            </div>
               
               )
            }
        </div>
    )
}
