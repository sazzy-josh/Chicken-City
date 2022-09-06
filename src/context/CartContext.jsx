import { createContext , useContext  , useReducer , useEffect ,useState } from "react";
import { CartReducer, cartState } from "./reducer";

export const CartContext = createContext()



const CartContextProvider = ({ children }) => {

 const [state, dispatch] = useReducer(CartReducer, cartState)
 const [ fee ,setFee ] = useState(0.00)
 const [ name ,setName ] = useState('')
 const [total , setTotal] = useState(0)

 useEffect(() => {
  localStorage.setItem('cartItems' , JSON.stringify(state.cartItems))
}, [state]);

useEffect(() => {
  setTotal(state.cartItems.reduce((acc , item) => {
    return acc += Number(item.quantity) * Number(item.price) 
  },0))
}, [state.cartItems]);

  const subTotal = () => {
    let totalAmount = total + Number(fee)
    return totalAmount
 }
  
useEffect(() => {
  subTotal()
}, []);

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
    dispatch({ type: "CLEAR_CART" });
  };

  //Function to show Checkout after successfull payment
  const checkout = () => {
    dispatch({ type:"SHOW_CHECKOUT" });
  };

  //Function to show Flutter Modal
  const flutterModal = () => {
    dispatch({type: "SHOW_MODAL"})
  }

//function to show Modal for single checkout

  const singleCheckout = (payload) => {
    dispatch({type: "SHOW_SINGLE_CHECKOUT" , payload})
  }

  const closeCheckout = () => {
    dispatch({ type : "CLOSE_SINGLE_CHECKOUT" })
  }

  //handle onchange event of delivery options
  const handleFee = (e) => {
    setFee(e.target.value)
  }
  
  //handles onchange event on flutter modals name input
const handleName = (e) => {
   setName(e.target.value)
}
    
  


 

  return (
   <CartContext.Provider value={{ state , total , fee , name ,clearCart, addToCart  , removeFromCart , openCart , increase , decrease , flutterModal ,handleFee , subTotal, setFee , handleName , checkout , singleCheckout , closeCheckout}}>
    {children}
   </CartContext.Provider>
  )
}

 export const useCartsContext = () => {
    return useContext(CartContext)
} 

export default CartContextProvider