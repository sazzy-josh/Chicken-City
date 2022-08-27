import { useAuthsContext } from '../context/authContext'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({ children }) => {
  
    const { User } = useAuthsContext()

      if(!User) {
       return <Navigate to='/auth' />
      } 
        return children
      
    
  
}

export default ProtectedRoute