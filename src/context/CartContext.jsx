import { createContext , useContext } from "react";



const CartContext = createContext()

const CartContextProvider = () => {
  return (
    <div>CartContext</div>
  )
}

export default CartContextProvider