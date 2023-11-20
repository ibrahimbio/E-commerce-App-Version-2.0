import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';


const Carts = (props) => {
    const{id, name, color, cost, image}=props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, }  = useContext(ShopContext);


  return (
    <div className='cartItem'>
      <img src={image} alt="hoto" />
      <div className="description">
        <p><b>{name}</b></p>
        <p>£{cost}</p>
        <div className="countHandler">
            <button onClick={ () => removeFromCart(id)}> - </button>
            <input value={cartItems[id]}  onChange={(e)=> updateCartItemCount(Number(e.target.value, id))}/>
            <button onClick={()=> addToCart(id)}> + </button>
        </div>


      </div>
    </div>
  )
}

export default Carts;
