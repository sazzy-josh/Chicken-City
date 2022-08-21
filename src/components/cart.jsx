import React  from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import pics from './assets/images/bread_1.2.png'
import empty from "./assets/svg/empty.svg"
import { HiPlus , HiMinus} from 'react-icons/hi'
import { MdCancel } from 'react-icons/md'
import { GiShoppingCart } from 'react-icons/gi'
import  { VscQuestion } from 'react-icons/vsc'
// import FlutterBtn from "./flutter/flutterBtn"


const CartContainer = () => {
    const {clearCart , total ,increase, decrease , removeFromCart , openCart , state: {cartItems} ,flutterModal} = useCartsContext()
   

 
 

  return (
    // Cart Section for Desktop and Large screens
    <AnimatePresence exitBeforeEnter>
    <motion.div 
    initial={{x:"100vw"}}
    animate={{x:0}}
    exit={{x:"-100vw"}}
    transition={{duration:1 , ease:'easeOut'}}
    className='hidden sm:flex fixed top-0 left-0  w-full h-screen cart'>
      {/* CART ITEMS SECTION */}
      <div className='w-4/6 bg-white overflow-y-scroll'>
          
          <div className="h-1/6 w-full flex p-8 justify-between items-start">

            <p className="text-[30px] font-bold">Shopping Cart</p>
             <p className="text-sm font-semibold mt-4">3 items</p>
          </div>

        {/* ITEMS SECTION  */}
          <div className="p-8 flex flex-col w-full">
          <hr />
             {/* LOOP THROUGH CART ITEMS */}  
                {cartItems.length < 1 ? (
                  <div> <img src={empty} alt="no-item" className="w-[250px] h-[250px]"/></div>
                ) : (
                 cartItems.map(({id, quantity , price , image , title }) => {
                  return (
                    <div>
                        <div className=" flex gap-x-[8px] w-full content py-4 items-center justify-center h-[150px] ">
                <div className="w-1/6 bg-slate-200 shadow-xs rounded-xl flex justify-center items-center h-[125px]">
                  <img src={pics} alt="i" className="w-[110px] h-[110px]  object-contain "/>
                </div>
                <div className="w-2/6 flex flex-col">
                <span className="text-sm">Bread</span>
                <span className="font-semibold text-sm">Wheat Slice Bread Margherata</span>
                </div>
                <div className="w-2/6 flex gap-x-4 items-center">
                  <motion.span
                  whileTap={{scale:1.4}}
                  className="cursor-pointer"><HiMinus /></motion.span>
                  <span className="border rounded-lg p-2 px-4 font-bold">1</span>
                  <motion.span
                    whileTap={{scale:1.4}}
                  className="cursor-pointer"><HiPlus /></motion.span>
                </div>
                <div className="w-1/6 flex justify-between items-center">
                  <span className="font-semibold">2 x $26.3</span>
                  <span className="font-bold text-2xl rotate-45 cursor-pointer"> + </span>
                </div>
                
              </div>
             <hr />
                    </div>
                  )
                 })
                )}


            
               
          </div>
          {/* END OF ITEMS SECTION */}

      </div>


      {/* CART SUMMARY AND CHECKOUT SECTION */}
      
      <div className='w-2/6 bg-slate-300 flex flex-col box-border'>
        
       
       

      </div>
    </motion.div>

    

    </AnimatePresence>

    
  )
}

export default CartContainer