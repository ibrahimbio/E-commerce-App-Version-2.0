
import React, { useContext } from 'react'
import PRODUCT from '../../products'
import { ShopContext } from '../../context/ShopContext';
import Carts from './Carts';
import "./cart.css"


const Cart = () => {
    const { cartItems, getTotalCartAmount}  = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCT.map((product)=>{
               
               if(cartItems[product.id] !==0){
                 return <Carts data = {product}/>
                }
            })}
        </div>
        <div className="checkout">
            <p>Subtotal: £{totalAmount}</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        
        </div>
    </div>
   
  )
}

export default Cart
