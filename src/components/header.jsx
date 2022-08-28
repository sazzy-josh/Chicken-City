import React from 'react'
import { useEffect } from 'react'
import logo from './assets/img/logo.png' 
import Avatar from './assets/img/avatar.png'
import { Link ,NavLink  , useNavigate} from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'
import { IoMdCart } from 'react-icons/io'
import { TbLogin } from 'react-icons/tb'
import { MdOutlineLogout } from 'react-icons/md'
import { MdRestaurantMenu } from 'react-icons/md'
import { SiInformatica } from 'react-icons/si'
import { FaHome } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'
import  { motion } from 'framer-motion'
import {  signOut } from "firebase/auth";
import { useAuthsContext } from '../context/authContext'
import { auth  } from '../firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'




const Header = () => {
  const {state : {cartItems} ,  openCart } = useCartsContext()

  const navigate = useNavigate()

  const { loginState , signUpState , loginUser , logoutUser, User , RemoveNav , openMenu } = useAuthsContext()




 useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth ,(currentUser) => {
      loginUser(currentUser)
    
   } )
  return () => {
    unsuscribe()
  };
 },[]);

 const handleSignup = () =>{
  signUpState()
  navigate('/auth')
 }

 const handleLogin = () =>{
  loginState()
  RemoveNav()
  navigate('/auth')
 }

 


 const LogOut = async (e) => {
  e.preventDefault()
  RemoveNav()
  await signOut(auth)
  logoutUser()
 }



  return (
    <AnimatePresence>

  
    <header className='h-auto w-screen bg-[#fffdfd] flex lg:px-28 flex-col justify-center z-10  mb-3 sticky top-0 '>
    {/* Desktop && Tablet View  */}
    <motion.div 
      initial={{ y:'-50vw', opacity: 0.5 }}
      animate={{ y: 0  ,opacity: 1 }}   
      transition={{ type:'spring', duration: 0.1 , stiffness:150 }}
    className="hidden md:flex lg:ml-6 pl-5 px-10 p-3 justify-between">
      <div className='w-3/5'>

        {/* Logo goes here */}
      <Link to="/">
      <motion.div
      className='flex justify-start items-center font-semibold'><img src={logo} alt="Logo"  className='w-12 h-12'/> <span className='text-2xl tracking-wide text-slate-700'><span className=' font-serif'>C</span><span className='text-black font-serif'>i</span ><span className='text-black font-serif'>t</span><span className=' font-serif'>y</span></span></motion.div>
      </Link>
      </div>

       {/* Nav Menu items goes here  */}
      <div className='flex justify-center items-center'>
      <motion.ul 
      className='flex justify-center items-center gap-6 mr-5 sm:text-sm sm:-ml-40 sm:mr-6 sm:w-[400px] md:mr-6 font-[500]
      '>
         <NavLink to="/">
            <motion.li  whileTap={{
          scale: 0.8,
          transition: { duration: 0.5 },
          }}
          className={`relative flex items-center gap-x-2 (navData) => (navData.isActive ? 'active' : '')`} >Home <FaHome /></motion.li>
         </NavLink> 
         <NavLink to="/foods">
            <motion.li whileTap={{
          scale: 0.8,
          transition: { duration: 0.5 },
          }}
           className={`relative  flex items-center gap-x-2  (navData) => (navData.isActive ? 'active' : '')`} >Food < MdRestaurantMenu /> </motion.li>
         </NavLink>
         <NavLink to="/aboutus">
           <motion.li whileTap={{
          scale: 0.8,
          transition: { duration: 0.5 },
          }}
           className={`relative  flex items-center gap-x-2  (navData) => (navData.isActive ? 'active' : '')`} >About Us <SiInformatica /> </motion.li>
         </NavLink>
          {!User && 
            <li className='hover:bg-slate-600 hover:font-semi-bold transition-all duration-300 ease-in-out hover:text-slate-100 border bg-slate-500 hover:shadow-lg cursor-pointer  text-slate-50 rounded-lg px-2 p-1 min-w-[74px]' onClick={ handleSignup } >Sign Up</li>
          }
         

        </motion.ul>
      </div>

      <div className='flex  transition-all ease-in-out duration-1000'>
       
        <div className='flex justify-center items-center box-border gap-3 min-w-[88px]'>
        <motion.div
        onClick={openCart}
          whileTap={{
            scale: 1.1,
          }}
        className='text-xl  relative flex justify-center cursor-pointer -left-2 items-center'><IoMdCart/> <span className='text-slate-100  absolute -top-2 -right-2 text-[10px] p-1  bg-red-500 rounded-full w-4 h-4 flex font-bold items-center justify-center'>{cartItems.length}</span>
        </motion.div>

        {/* <---- This section handles Authentication for medium and large screens ------>  */}

        {/* When there is no authenticated User*/}
        {!User && <div className='flex justify-center cursor-pointer items-center' onClick={RemoveNav}>
            <motion.img src={Avatar} whileTap={{scale:0.8}} className="w-9 h-9 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 " alt="Avatar"  />
           {openMenu ? <BiChevronDown  className='min-w-[12px]'/> : <BiChevronUp  className='min-w-[12px]' /> }
        </div>}
        <div>
        {!openMenu && !User &&  <motion.div 
      initial={{ opacity: 0   }}
      animate={{ opacity: 1  }}
      transition={{  duration: 0.5 ,type:'spring' }}
        className='transition-all ease-in-out duration-300'>
              <p className='border bg-slate-100 rounded flex justify-center items-center  text-sm p-1 px-1 absolute right-5  w-1/6 transition-all ease-in-out duration-600 font-semibold m-2  mt-8' onClick={ handleLogin }>
                <p className=' flex justify-center rounded hover:bg-slate-300 cursor-pointer p-1 items-center w-full'>Login <span className='px-1'><TbLogin/></span> </p>
              </p>
        </motion.div>}
          {/* When User is Authenticated*/}
        </div>
        {User && <div className='flex justify-center items-center  cursor-pointer' onClick={RemoveNav}>
            <motion.img src={User.providerData[0].photoURL || Avatar } whileTap={{scale:0.7}} className="w-8 h-8 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 " alt="" />
            {openMenu ? <BiChevronDown  className='min-w-[12px]' /> : <BiChevronUp  className='min-w-[12px]'/> }
        </div>}
        <div>
        {!openMenu && User && <motion.div
        initial={{ opacity: 0.9, y:-10  }}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.0009 }}
        className='transition-all font-semibold bg-slate-100 absolute right-6 w-2/12 top-16 mt-2  text-sm flex flex-col ease-in-out duration-300 border-2 border-slate-300 rounded ' >
          
          {User && User.email === "idahosajoshua61@gmail.com" && <p className='flex m-1 justify-center p-1 rounded items-center cursor-pointer hover:bg-slate-300' >New Item <span className='mx-1'><IoIosAdd/></span> </p> }
         <hr />
         <p className='flex m-1 items-center justify-center  p-1 rounded cursor-pointer hover:bg-slate-300'  onClick={LogOut} >Logout <span className='mx-2'><MdOutlineLogout/></span> </p>
           
             
        </motion.div>} 


        {/* Welcome Guest or User Here */}
        </div>
        <div className='text-xs text-emerald-900" overflow-hidden max-w-[134px] max-h-[20px] flex justify-center  absolute top-12 p-1 font-semibold right-18 '>
          {/* {User? "Hi," + User.displayName.slice(0,8) + "." || " Hi," : "Welcome, Guest"}! */}
          {!User && "Welcome, Guest"}
          {User && <p className='z-99'>{User.displayName ?"Hi! "+ User.displayName.slice(0,9) + "." :"Hi! "+ User.email.slice(0,15) + "." }</p>}
          {/* {User? "Hi!"+ User?.displayName?.slice(0,8) + "." || User.email : "Welcome,Guest"}! */}
        </div>
        </div>
      </div>
      
    </motion.div>
    

    {/*Nav Section for Mobile and Small Screens */}


    <div className="md:hidden flex justify-between w-screen p-5 py- relative z-20">
      

      {/* Cart section for mobile screens  */}

     
      <motion.div
        whileTap={{
          scale: 1.1,
        }}
      className='text-2xl relative text-slate-600 font-bold flex justify-center cursor-pointer  items-center'>
         <Link to='/cartItems3qPzZ26PeuhwEyCdgWWBXK2vGNF7'>
        <IoMdCart/> <span className='text-white absolute top-0.5 -right-2 text-[10px] p-1  bg-red-500 shadow-lg rounded-full w-4 h-4 flex font-bold items-center justify-center'>{cartItems.length}</span>
      </Link>
        </motion.div>
        

        {/* Logo Section for mobile screen */}
    <Link to="/">
      <motion.div
      initial={{ y:'-50vw', opacity: 0.5 }}
      animate={{ y: 0  ,opacity: 1 }}   
      transition={{ type:'spring', duration: 0.2 , stiffness:150 }}
       className='flex justify-start items-center font-semibold'><img src={logo} alt="Logo"  className='w-11 h-11'/> <span className='text-2xl tracking-wide '><span className=' font-serif'>C</span><span className='font-serif'>i</span ><span className=' font-serif'>t</span><span className= 'font-serif'>y</span></span></motion.div>
      </Link>


       
        {/*Authentication section goes here for  small and mobile screens*/}

        <div className='flex'>
        {!User && <div className='flex justify-center relative cursor-pointer items-center' onClick={RemoveNav }  > 
            <motion.img src={Avatar} whileTap={{scale:0.8}} className="w-9 h-9 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 z-10" alt="Avatar"  />
           {openMenu ? <BiChevronDown  className='min-w-[12px] z-99'/> : <BiChevronUp className='z-10' /> }
        </div>}
        <div>

        {/* User not yet Authenticated */}
        <AnimatePresence>
        {!openMenu && !User &&  (<motion.ul 
        initial={{opacity:0 ,x:350}}
        animate={{opacity:1 , x: -10}}
        exit={{x:1000  }}
        transition={{type:'spring' , stiffness:280  ,ease:'easeOut' }}
        className='flex flex-col justify-center w-3/4 h-screen fixed top-0  index left-0 bottom-0 bg-slate-50 shadow-xl  font-semibold p-1 ' onMouseOut={RemoveNav}  >
              <li className=' flex justify-center items-center gap-x-3 text-sm p-8 px-2 transition-all rounded ease-in-out duration-600 hover:bg-slate-200 cursor-pointer hover:rounded   hover:border-gray-400 ' onClick={ handleLogin } > <TbLogin/>Login <span 
              ></span> </li>
              <hr />

          <NavLink to="/">
            <li 
            onClick={RemoveNav}
               className='relative flex justify-center items-center gap-x-4  text-sm p-8 px-2 transition-all rounded ease-in-out duration-600 hover:bg-slate-200 cursor-pointer hover:border-gray-400 '
            ><FaHome />  Home </li>
         </NavLink> 
         <hr />
         <NavLink to="/foods">
            <li
             onClick={RemoveNav}
            className='relative flex justify-center items-center  gap-x-4 text-sm p-8 px-2 transition-all rounded ease-in-out duration-600 hover:bg-slate-200 cursor-pointer hover:border-gray-400 '
            >< MdRestaurantMenu />  Food  </li>
         </NavLink>
         <hr />
         <NavLink to="/aboutus">
           <li
           onClick={RemoveNav}
           className='relative flex justify-center items-center gap-x-2 text-sm p-8 px-3 transition-all rounded ease-in-out duration-600 hover:bg-slate-200 cursor-pointer   hover:border-gray-400 '
           > <SiInformatica /> About Us</li>
         </NavLink>

          {/* //Remove menu items from screen */}
         <div onClick={RemoveNav} className='absolute cursor-pointer top-5 left-6 text-4xl rotate-45 font-light border-2 rounded-full w-10 h-10 flex justify-center items-center border-slate-400 hover:border-slate-700 hover:text-slate-300 bg-slate-400'>+</div>

        </motion.ul>)
        }
        </AnimatePresence>
        </div>

         {/* When User is Authenticated*/}
        
        {User && 
        <motion.div
        className='flex justify-center items-center cursor-pointer z-10'  onClick={RemoveNav}>
            <motion.img src={User.providerData[0].photoURL || Avatar } whileTap={{scale:0.7}} className="w-8 h-8 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 " alt="Avatar" />
            {openMenu ? <BiChevronDown /> : <BiChevronUp /> }
        </motion.div>}
       
        <div>
        <AnimatePresence>
        {!openMenu && User && 
      
        <motion.ul
        initial={{opacity:0 ,x:350}}
        animate={{opacity:1 , x: -10}}
        exit={{x:1050 ,  }}
        transition={{type:'spring' , stiffness:240 , ease:'easeOut' }}
        className=' font-semibold  bg-slate-100 top-0 bottom-0 right-0 left-0 fixed text-sm flex flex-col  border-slate-400 rounded justify-center  w-3/4 h-screen'>
        
          {User && User.email === "idahosajoshua61@gmail.com" && <li
           onClick={RemoveNav} className='flex m-1 justify-center p-8 rounded items-center cursor-pointer hover:bg-slate-300' >New Item 
            <span className='mx-1'><IoIosAdd/></span> </li> }
         <hr />
         <NavLink to="/">
            <li 
               onClick={RemoveNav}
               className={
                `relative flex justify-center m-1 items-center gap-x-4  text-sm p-8 px-2 transition-all rounded ease-in-out duration-600 hover:bg-slate-300 cursor-pointer hover:border-gray-400 (nav) => (nav.isActive ? 'activeLink' : '')`
               }
            ><FaHome /> Home 
            </li>
         </NavLink> 
         <hr />
         <NavLink to="/foods">
            <li
             onClick={RemoveNav}
            className={`
            relative flex justify-center items-center m-1 gap-x-4 text-sm p-8 px-2 transition-all rounded ease-in-out duration-600 hover:bg-slate-300 cursor-pointer hover:border-gray-400  
            (nav) => (nav.isActive ? 'activeLink' : '')`}
            >< MdRestaurantMenu />  Food  </li>
         </NavLink>
         <hr />
         <NavLink to="/aboutus">
           <li
            onClick={RemoveNav}
           className={`relative flex justify-center m-1 items-center gap-x-2 text-sm p-8 px-3 transition-all rounded ease-in-out duration-600 hover:bg-slate-300 cursor-pointer hover:border-gray-400   (nav) => (nav.isActive ? 'activeLink' : '')`}
           > <SiInformatica /> About Us</li>
         </NavLink>
         <hr />

         <li className='flex m-1 items-center justify-center p-8 gap-x-3 rounded cursor-pointer hover:bg-slate-300'  onClick={LogOut} > <span ><MdOutlineLogout/></span>Logout  </li>
          
           {/* //Remove menu items from screen */}
         <div onClick={RemoveNav} className='absolute cursor-pointer top-5 left-6 text-4xl rotate-45 font-light border-2 rounded-full w-10 h-10 flex justify-center items-center border-slate-400 hover:border-slate-700 hover:text-slate-300 bg-slate-400'>+</div>
             
        </motion.ul>}
        </AnimatePresence>
        </div>
        <div className='text-[10px] overflow-hidden max-w-[134px] max-h-[20px] flex justify-center  absolute top-14 p-1 font-semibold right-6 '>
        {/* {User?"Hi!"+ User?.displayName.slice(0,8) + "." || User.email : "Welcome,Guest"}! */}
        {/* {User? "Hi,Logged In" || " Hi," : "Hi, Guest"}! */}
        {!User && "Hi, Guest"}
       {User && <p>{User.displayName ?"Hi! "+ User.displayName.slice(0,9) + "." :"Hi! "+ User.email.slice(0,12) + ".." }</p>}
        </div>
        </div>


    </div>

      
     
    </header>
    
    </AnimatePresence>
  )
}

export default Header