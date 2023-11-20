import React, { createContext, useState } from 'react'
import PRODUCT from '../products';


//ShopContext
export const ShopContext = createContext(null);

//This checks the items in the cart
const getDefaultCart = ()=> {
    let cart ={}
    for(let i =1; i < PRODUCT.length +1; i++){
        cart[i]=0;

    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart =(itemId)=> {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] +1 }))
    };

    const removeFromCart =(itemId)=> {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] - 1 }))
    };

    const updateCartItemCount = (newAmount, itemId)=> {
            setCartItems((prev)=> ({...prev, [itemId]: newAmount}))
    }

    const getTotalCartAmount =()=> {
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]> 0){
                let itemIfo = PRODUCT.find((product)=> product.id === Number(item));
                totalAmount += cartItems[item] * itemIfo.cost
            }
        }
        return totalAmount;
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

    



  return (
    <ShopContext.Provider value={contextValue}>{props.children} </ShopContext.Provider>
  )

  }

export default ShopContextProvider;
