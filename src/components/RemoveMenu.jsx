import { useEffect , useContext } from "react"
import { AuthContext } from "../context/authContext"

//This component helps trigger a function on click of a nav link/item
const RemoveMenu = ({ children }) => {
   const { RemoveNav ,openMenu } = useContext(AuthContext)
   useEffect(() => {
   return () => {
    RemoveNav
   }
  }, []);


  return children
}

export default RemoveMenu