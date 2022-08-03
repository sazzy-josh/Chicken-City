import React from 'react'
import { useState , useEffect } from 'react'
import logo from './img/logo.png' 
import Avatar from './img/avatar.png'
import { Link ,NavLink } from 'react-router-dom '
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'
import { GiShoppingCart } from 'react-icons/gi'
import { TbLogin } from 'react-icons/tb'
import { MdOutlineLogout } from 'react-icons/md'
import { MdRestaurantMenu } from 'react-icons/md'
import { SiInformatica } from 'react-icons/si'
import { FaHome } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'
import  { motion } from 'framer-motion'
import { GoogleAuthProvider ,signInWithPopup ,signOut } from "firebase/auth";
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { auth  } from '../firebase.config'
import { onAuthStateChanged } from 'firebase/auth'



const Header = () => {
    // const [values, setValues] = useState({
    //   FirstName: "",
    //   LastName: "",
    //   email: "",
    //   confirmPassword : ""
    // });
  // const [openMenu, setOpenMenu] = useState(true);
  const { loginUser , logoutUser, User , RemoveNav , openMenu } = useContext(AuthContext) 

 useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth ,(currentUser) => {
      loginUser(currentUser)
    
   } )
  return () => {
    unsuscribe
  };
 }, []);

 const googleAuth = async(e) => {
     e.preventDefault()
     RemoveNav()
     const provider = new GoogleAuthProvider();
     const { user } = await signInWithPopup(auth, provider)
     loginUser(user)
 }


 const LogOut = async (e) => {
  e.preventDefault()
  RemoveNav()
  await signOut(auth)
  logoutUser()
 }

  return (
    <header className='h-auto w-screen bg-[#f5f3f3] flex flex-col justify-center  mb-3 sticky top-0 '>
    {/* Desktop && Tablet View  */}
    <div className="hidden sm:flex lg:ml-6 pl-5 px-5 p-3 justify-between">
      <div className='w-3/5'>

        {/* Logo goes here */}
      <Link to="/">
      <div className='flex justify-start items-center font-semibold'><img src={logo} alt="Logo"  className='w-12 h-12'/> <span className='text-2xl tracking-wide text-slate-700'><span className='text-yellow-500 font-serif'>C</span><span className='text-red-700 font-serif'>i</span ><span className='text-red-700 font-serif'>t</span><span className='text-yellow-500 font-serif'>y</span></span></div>
      </Link>
      </div>

       {/* Nav Menu items goes here  */}
      <div className='flex justify-center items-center '>
      <motion.ul 
         initial={{ opacity: 0.5 }}
        animate={{ x: 20 ,opacity: 2 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      className='flex justify-center items-center gap-6 mr-5 sm:text-sm sm:-ml-40 sm:mr-6 sm:w-[400px] md:mr-6 md:text- font-bold
      '>
         <NavLink to="/">
            <motion.li  whileTap={{
          scale: 0.8,
          transition: { duration: 0.5 },
          }}
          className={`relative flex items-center gap-x-2 (navData) => (navData.isActive ? 'active' : '')`} >Home <FaHome /></motion.li>
         </NavLink> 
         <NavLink to="/menu">
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
          {!User && <Link to="sign-up">
            <li className='hover:bg-slate-600 hover:font-semi-bold transition-all duration-300 ease-in-out hover:text-slate-100 border hover:shadow-lg  bg-slate-500 text-slate-200 rounded-lg px-2 p-1 min-w-[74px]' >Sign Up</li>
          </Link>}
         

        </motion.ul>
      </div>

      <div className='flex  transition-all ease-in-out duration-1000'>
       
        <div className='flex justify-center items-center box-border gap-3 min-w-[88px]'>
        <motion.div
          whileTap={{
            scale: 1.1,
          }}
        className='text-xl  relative flex justify-center cursor-pointer -left-2 items-center'><GiShoppingCart /> <span className='text-slate-100  absolute -top-2 -right-2 text-xs p-1  bg-red-500 rounded-full w-4 h-4 flex font-semibold items-center justify-center'>2</span>
        </motion.div>

        {/* <---- This section handles Authentication for medium and large screens ------>  */}

        {/* When there is no authenticated User*/}
        {!User && <div className='flex justify-center cursor-pointer items-center' onClick={RemoveNav}>
            <motion.img src={Avatar} whileTap={{scale:0.8}} className="w-9 h-9 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 " alt="Avatar"  />
           {openMenu ? <BiChevronDown  className='min-w-[12px]'/> : <BiChevronUp  className='min-w-[12px]' /> }
        </div>}
        <div>
        {!openMenu && !User &&  <motion.div 
      initial={{ opacity: 0.9, x:100  }}
         animate={{ opacity: 1 , x: 0 }}
         transition={{ ease: "easeInOut", duration: 0.0009 }}
        className='transition-all ease-in-out duration-300'>
              <p className='border bg-slate-100 rounded flex justify-center items-center  text-sm p-1 px-1 absolute right-5  w-1/6 transition-all ease-in-out duration-600 font-semibold m-2  mt-8' onClick={googleAuth }>
                <p className=' flex justify-center rounded hover:bg-slate-300 cursor-pointer p-1 items-center w-full'>Login <span className='px-1'><TbLogin/></span> </p>
              </p>
        </motion.div>}
          {/* When User is Authenticated*/}
        </div>
        {User && <div className='flex justify-center items-center  cursor-pointer' onClick={RemoveNav}>
            <motion.img src={User.providerData[0].photoURL} whileTap={{scale:0.7}} className="w-8 h-8 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 " alt="" />
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
          {User? " Hi,"+ User.displayName.slice(0,8) + "." : "Welcome, Guest"}!
        </div>
        </div>
      </div>
      
    </div>
    

    {/*Nav Section for Mobile and Small Screens */}


    <div className="sm:hidden flex justify-between w-screen p-3 py- relative">
      

      {/* Cart section for mobile screens  */}

      <motion.div
        whileTap={{
          scale: 1.1,
        }}
      className='text-2xl relative text-slate-600 font-bold flex justify-center cursor-pointer  items-center'><GiShoppingCart /> <span className='text-slate-100 absolute top-0.5 -right-2 text-xs p-1  bg-red-600 rounded-full w-4 h-4 flex font-semibold items-center justify-center'>2</span>
        </motion.div>


        {/* Logo Section for mobile screen */}
    <Link to="/">
      <div className='flex justify-start items-center font-semibold'><img src={logo} alt="Logo"  className='w-11 h-11'/> <span className='text-2xl tracking-wide text-slate-700'><span className='text-yellow-500 font-serif'>C</span><span className='text-red-800 font-serif'>i</span ><span className='text-yellow-500 font-serif'>t</span><span className= 'text-red-800 font-serif'>y</span></span></div>
      </Link>


       
        {/*Authentication section goes here for  small and mobile screens*/}

        <div className='flex'>
        {!User && <div className='flex justify-center relative cursor-pointer items-center z-1' onClick={RemoveNav }>
            <motion.img src={Avatar} whileTap={{scale:0.8}} className="w-9 h-9 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 z-10" alt="Avatar"  />
           {openMenu ? <BiChevronDown  className='min-w-[12px] z-99'/> : <BiChevronUp className='z-10' /> }
        </div>}
        <div>

          {/* User not yet Authenticated  */}
        {!openMenu && !User &&  <motion.ul 
        initial={{  x:90  }}
        animate={{  x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.09 }}
        className='flex flex-col justify-center w-3/4 h-screen  absolute top-0  left-0 bottom-0 bg-slate-50 shadow-xl  font-semibold p-1 '>
              <li className=' flex justify-center items-center gap-x-3 text-sm p-8 px-2 transition-all rounded ease-in-out duration-600 hover:bg-slate-200 cursor-pointer hover:rounded   hover:border-gray-400 ' onClick={googleAuth } > <TbLogin/>Login <span 
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

        </motion.ul>}
          {/* When User is Authenticated*/}
        </div>
        {User && <div className='flex justify-center items-center cursor-pointer z-10'  onClick={RemoveNav}>
            <motion.img src={User.providerData[0].photoURL} whileTap={{scale:0.7}} className="w-8 h-8 cursor-pointer hover:border-2 rounded-full hover:shadow-lg  border-cyan-600 " alt="Avatar" />
            {openMenu ? <BiChevronDown /> : <BiChevronUp /> }
        </div>}
        <div>
        {!openMenu && User && <motion.ul
         initial={{  x:100  }}
         animate={{  x: 0 }}
         transition={{ ease: "easeInOut", duration: 0.09 }}
        className=' font-semibold  bg-slate-100 top-0 bottom-0 right-0 left-0 absolute text-sm flex flex-col  border-slate-400 rounded justify-center  w-3/4 h-screen' >
          
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
        
        </div>
        <div className='text-[10px] overflow-hidden max-w-[134px] max-h-[20px] flex justify-center  absolute top-12 p-1 font-semibold right-3 '>
          Hi, {User? User.displayName.slice(0,9) + "." : "Guest"}!
        </div>
        </div>


    </div>

      
     
    </header>
    
  )
}

export default Header