import { createContext , useContext  , useReducer , useEffect ,useState } from "react";
import { CartReducer, cartState } from "./reducer";

export const CartContext = createContext()



const CartContextProvider = ({ children }) => {
  
 const [state, dispatch] = useReducer(CartReducer, cartState)
 const [total , setTotal] = useState(0)

 useEffect(() => {
  localStorage.setItem('cartItems' , JSON.stringify(state.cartItems))
}, [state]);

useEffect(() => {
  setTotal(state.cartItems.reduce((acc , item) => {
    return acc += Number(item.quantity) * Number(item.price) 
  },0))
}, [state.cartItems]);

 //Function to handle when an item is added from the store into the Cart
  const addToCart = (prod) => {
    dispatch({ type: "ADD_TO_CART", payload : prod });
  };

  //Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload  });
  };

  //Function to handle when an item is removed from the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload  });
  };

  const openCart = () => {
    dispatch({ type : "SHOW_CART" })
  }

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  //Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
    
  


 

  return (
   <CartContext.Provider value={{state , addToCart  , removeFromCart , openCart , increase , decrease ,total }}>
    {children}
   </CartContext.Provider>
  )
}

 export const useCartsContext = () => {
    return useContext(CartContext)
} 

export default CartContextProvider