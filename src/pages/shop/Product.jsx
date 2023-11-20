import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const{id, name, color, cost, image}=props.data;

    const {addToCart, cartItems}= useContext(ShopContext);

    // counts the number of a particular item selected   
    const cartItemAmount = cartItems[id]; 
  return (
    <div className='product'>
     <img src={image} alt="shoes" />
     <div className="description">
        <p>
            <b>{name}</b>
            
        </p>
        <p>£{cost}</p>
     </div>
     <button className='addToCartBttn' onClick={()=> addToCart(id)}>
        
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>} 
        </button>
     
    </div>

  )
}

export default Product
