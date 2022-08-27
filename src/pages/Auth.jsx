import React , { useState } from 'react'
import { useAuthsContext } from '../context/authContext'
import google from '../components/assets/images/g-logo.png'
import { auth } from "../firebase.config";
import { GoogleAuthProvider ,signInWithPopup, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Auth = () => {
  const { AuthServices ,loginState , signUpState  ,logoutUser , loginUser } = useAuthsContext()
  const navigate = useNavigate()



   const [loginValues , setLoginValues ] = useState({
    email: "",
    password: "",

   })

   const [SignupValues , setSignupValues ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "", 
   })

   const handleSignupDetails = (e) => {
    const { name , value } = e.target
    setSignupValues({...SignupValues , [name]:value})
 }

   const handleLoginDetails = (e) => {
      const { name , value } = e.target
      setLoginValues({...loginValues , [name]:value})
   }
   
   const googleAuth = async(e) => {
     e.preventDefault()
     const provider = new GoogleAuthProvider();
     const { user } = await signInWithPopup(auth, provider)
     loginUser(user)
     navigate('/')
 }

  const signup = async(e) => {
     e.preventDefault()
      try {
        if(SignupValues.password === SignupValues.confirmPassword){
          await createUserWithEmailAndPassword(auth, SignupValues.email, SignupValues.password)
          logoutUser()
          loginState()
        }else{
          throw new Error("Passwords do not match")
        }
      } catch (error) {
       toast.warning(`${error.message}`)
      } 
    
  }



  const login = async(e) => {
    e.preventDefault()
    try{
      const { user } = await signInWithEmailAndPassword(auth , loginValues.email , loginValues.password  )
      loginUser(user)
    }catch(err){
      toast.warning(`${err.message}`)
    }

  }
  
   
   return (
    <div>
      {
        AuthServices === 'LOGIN' ?
        (<div className='h-auto w-full flex justify-center items-center my-4 flex-col'>
           <div className='w-full sm:w-[50vw]  lg:w-[30vw] h-full  flex flex-col gap-y-3 items-center p-4 sm:p-8'>
             <h3 className='font-bold text-xl my-4 text-center'>YOUR ACCOUNT FOR EVERYTHING FOOD</h3> 

             <form className='flex flex-col justify-center w-full my-2 gap-y-3' >
              <input type="email" name="email" placeholder='Email address' className='w-full rounded-md p-2 outline-none border placeholder:text-sm border-slate-200' onChange={handleLoginDetails} />

              <input type="password" name="password" placeholder='Password' className='w-full p-2 outline-none border rounded-md  placeholder:text-sm border-slate-200' onChange={handleLoginDetails}  />

              <span className='flex w-full justify-end underline text-slate-400 cursor-pointer'>Forgot Password?</span>

              <input type="submit" value="LOGIN" className='bg-black text-white text-center p-2 border rounded-lg cursor-pointer' onClick={login}/>
             </form>

             <div className='rounded-lg bg-slate-200 w-full flex gap-x-1 justify-center items-center font-semibold border-slate-200 border p-2 cursor-pointer'>
              <img src={google} alt="google" className='w-6 h-6 ' />
              <p className='text-slate-700 text-sm' onClick={googleAuth}>Signin with Google</p>
             </div>

             <span className='flex justify-center my-0 text-sm tracking-wider text-slate-400'>Not a Member? <p className='underline text-black cursor-pointer mx-1' onClick={ signUpState }>Signup</p> </span>
           
      
           </div>
           
        </div>)  :
       (<div className='h-auto w-full flex flex-col justify-center items-center my-4'>
          <div className='w-full sm:w-[50vw]  lg:w-[30vw] h-full  flex flex-col gap-y-3 items-center p-4 sm:p-8'>
          <h3 className='font-bold text-[26px] sm:tracking-wide md:my-4 text-center'>BECOME A MEMBER</h3> 

            <form className='flex flex-col justify-center w-full my-2 gap-y-3'>

            <input type="text" name="firstName" placeholder='First Name' className='w-full p-2 outline-none border rounded-md placeholder:text-sm border-slate-200' onChange={ handleSignupDetails } />

            <input type="text" name="lastName" placeholder='Last Name' className='w-full p-2 outline-none border rounded-md placeholder:text-sm border-slate-200' onChange={ handleSignupDetails } />

            <input type="email" name="email" placeholder='Email address' className='w-full p-2 outline-none border rounded-md placeholder:text-sm border-slate-200' onChange={ handleSignupDetails } />

            <input type="password" name="password" placeholder='Password' className='w-full p-2 outline-none border rounded-md  placeholder:text-sm border-slate-200' onChange={ handleSignupDetails }  />
            
            <input type="password" name="confirmPassword" placeholder='Confirm Password' className='w-full p-2 outline-none border rounded-md placeholder:text-sm border-slate-200' onChange={ handleSignupDetails } />

            <input type="submit" value="JOIN US" className='bg-black text-white text-center p-2 border rounded-lg cursor-pointer' onClick={signup}/>
            </form>
                
          </div>
          <span className='flex justify-center my-0 text-sm tracking-wider text-slate-400'>Already a Member? <p className='underline text-black cursor-pointer mx-1' onClick={ loginState }>Login</p> </span>

       </div>)
     
      }

     
      
      
      
      
      </div>

      
  )
}

export default Auth