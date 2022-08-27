import { createContext , useState , useContext } from "react";
import React from 'react'
import { useReducer } from "react";
import { initialState } from "./reducer"; 
import { AuthReducer } from "./reducer";
 

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
 const [state, dispatch] = useReducer(AuthReducer , initialState)
 const [openMenu, setOpenMenu] = useState(true);


 function RemoveNav(){
  setOpenMenu(prev => !prev)
 }
 
 function loginUser(user){
  dispatch({type: "SET_USER", payload : user })
 }

 function logoutUser(){
  dispatch( {type: "LOGOUT_USER"})
 }

 function loginState(){
  dispatch({type:"LOGIN_USER"})
 }

 function signUpState(){
  dispatch({type:"SIGNUP_USER"})
 }


  return (
    <AuthContext.Provider value = {{User: state.user , AuthServices :state.authService , openMenu  , RemoveNav , loginUser ,logoutUser  , loginState , signUpState }}  >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthsContext = () => {
  return useContext(AuthContext)
} 

export default AuthContextProvider