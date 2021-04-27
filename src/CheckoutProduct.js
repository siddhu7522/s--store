import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {
    const [{bucket},dispatch]=useStateValue();
    const removeFromCart=()=>{
        dispatch({
            type:"delete_item_from_basket",
            // item:{
                id:id,
            // }
        })

    }
    return (
        <div className="checkoutProduct">
            <img  src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                   Array(rating)
                   .fill()
                   .map((_)=>(
                       <p>🌟 </p>
                   ))

               }
                </div>
               <button onClick={removeFromCart}>Remove from cart</button>
               
            </div>
        </div>
    )
}

export default CheckoutProduct
