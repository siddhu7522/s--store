import React from 'react'
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Total from "./Total"

function Checkout() {
    const[{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            {basket?.length===0?(
                <div>
                    <h2>Please add items your basket is empty</h2>
                </div>
            ):(
                <div>
                    <h2>Your shopping cart</h2>
                    {basket.map((item)=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        />
                    
                    ))}
                   
                    </div>
                     
            )}


</div>
{basket.length>0 &&(
    <div className="checkout__right">
   <Total/>
</div>

)}


        </div>
    );
}

export default Checkout
