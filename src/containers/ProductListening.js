import { ProductComponent } from './ProductComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from'../redux/actions/productActions'


export const ProductListening = () => {


    const dispatch = useDispatch();

    const fetchData = async ()=>{
        const result = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=> console.log("Eroor is occus ", err))
        console.log(result.data)
        dispatch(setProducts(result.data))
    }

    useEffect(()=>{
        fetchData();
    },[])

 


    return (
        <div className="container ">

            <div className="row">
                <ProductComponent/>

            </div>
            
        </div>
    )
}
