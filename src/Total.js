import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format";
// import getBasketTotal from "./reducer"
import "./Total.css"
function Total() {
    const [{basket},dispatch]=useStateValue();
    return (
        
        <div className="total">
           <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button>proceed to checkout</button>
          </>
        )}
        decimalScale={2}
        value= {0} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
        </div>
    )
}

export default Total
