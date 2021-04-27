import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product({id,title,rating,price,image}) {
    const[{basket},dispatch]=useStateValue()
    const addToCart=()=>{
        dispatch({
            type:'Add_item_to_basket',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });

    };
    return (
        <div className="product">
            {/* <p>{id}</p> */}
            <img src={image}/>
            <div className="product__info">

            <h5>{title}</h5>
            <div className="product__price">
            <small>Rs</small> <strong className="price">{price}</strong>
            </div>
           <div className="product__rating">
               {
                   Array(rating)
                   .fill()
                   .map((_)=>(
                       <p>🌟 </p>
                   ))

               }
               
              
           </div>
           <button onClick={addToCart} >Add to Cart</button>
            </div>
           

        </div>
    )
}

export default Product
