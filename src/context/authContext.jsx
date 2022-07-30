import { createContext } from "react";
import React from 'react'
import { useReducer } from "react";
import { initialState } from "./reducer"; 
import { AuthReducer } from "./reducer";
 

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
 const [state, dispatch] = useReducer(AuthReducer , initialState)


 
 function loginUser(user){
  dispatch(
    {
      type: "SET_USER",
      payload : user 
    }
  )
 }

 function logoutUser(){
  dispatch(
    {
      type: "LOGOUT_USER",
    }
  )
 }

  return (
    <AuthContext.Provider value = {{User: state.user , loginUser ,logoutUser }}  >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider