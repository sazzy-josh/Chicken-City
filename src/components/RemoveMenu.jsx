import { useEffect , useContext } from "react"
import { AuthContext } from "../context/authContext"

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