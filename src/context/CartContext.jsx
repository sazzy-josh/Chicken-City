import { createContext , useContext  , useReducer} from "react";
import { CartReducer, cartState } from "./reducer";


const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  
 const [state, dispatch] = useReducer(CartReducer, cartState)

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
    dispatch({ type: "DECREASE", payload });
  };

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  //Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };




  return (
   <CartContext.Provider value={{state , addToCart  , removeFromCart }}>
    {children}
   </CartContext.Provider>
  )
}

 export const cartsContext = () => {
    return useContext(CartContext)
} 

export default CartContextProvider