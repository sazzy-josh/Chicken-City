import React  from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import empty from "./assets/svg/empty.svg"
import { HiPlus , HiMinus} from 'react-icons/hi'
import {MdDeleteForever} from 'react-icons/md' 
import { GiShoppingCart } from 'react-icons/gi'
import  { VscQuestion } from 'react-icons/vsc'
import FlutterBtn from "./flutter/flutterBtn"


const CartContainer = () => {
    const {clearCart , total ,increase, decrease , removeFromCart , openCart , state: {cartItems}} = useCartsContext()
   

 
 

  return (
    // Cart Section for Desktop and Large screens
    <AnimatePresence exitBeforeEnter>
    <motion.div 
    initial={{x:"100vw"}}
    animate={{x:0}}
    exit={{x:"-100vw"}}
    transition={{duration:1 , ease:'easeOut'}}
    className='hidden sm:flex fixed top-0 left-0  w-full h-screen cart  '>
      <div className='w-4/6 black'></div>
      
      <div className=' sm:w-4/6 lg:w-2/6 bg-white flex flex-col box-border'>
        
        <div className="flex justify-between">
          <div onClick={ openCart } className='z-50 rounded-full w-8 h-8 flex  justify-center items-center m-2 bg-slate-500 cursor-pointer'>
          <span className='rotate-45 text-xl text-white'>+</span>

           </div>
        <span
        onClick={clearCart}  
        className="border rounded-full gap-x-1 m-2 flex justify-between p-1 font-bold hover:text-red-500 hover:font-extrabold hover:border-red-600 border-slate-700 cursor-pointer text-xs items-center px-2"><p className="rounded-full p-2 border text-[9px] w-5 h-5 flex justify-center items-center border-slate-800  hover:border-red-600 "><span>X</span></p>clear cart</span>
        </div>
        {/* CART ITEMS SECTION */}

        {cartItems.length < 1 ? <div className='flex flex-col gap-y-4 h-screen justify-center items-center overflow-x-hidden'><img src={empty} alt="empty cart" className='w-[150px] h-[150px] object-contain' /> <p>No item in cart</p> </div> :<div className='flex flex-col w-full p-4  overflow-y-scroll cartheight'>
        {cartItems.map(({id, quantity , price , image , title }) => {
          return (
            <div className='w-full flex justify-between py-1' key={id}>
            <div className='w-2/8 flex items-center justify-center bg-gray-200 p-3 rounded-xl'>
              <img src={image} alt={id} className='w-[60px] h-[60px] object-contain' />
            </div>
  
            <div className='w-4/8 flex flex-col min-w-[180px]'>
             <span className='font-semibold sm:text-sm text-base '>{title}</span>
             <span className='text-sm flex justify-between font-semibold p-1'><p>{quantity}x</p> <p>${price}</p></span>
             <span className='rounded-full flex justify-around bg-red-200 p-1'> {quantity > 1 ? (<motion.span 
             whileTap={{scale:1.2}}
             className='font-bold cursor-pointer flex justify-center items-center' onClick={() => {decrease({id})} }><HiMinus/></motion.span>): (<span className='font-bold cursor-not-allowed flex justify-center items-center' disabled><HiMinus/></span> )} <span className="bg-white text-xs p-1">{quantity}</span><motion.span 
             whileTap={{scale:1.3}}
             className='font-bold cursor-pointer flex justify-center items-center'  onClick={() => {increase({id})} }><HiPlus/></motion.span> </span>
            </div>
  
            <div className='w-2/8 h-2/8 px-4 flex text-xl  cursor-pointer justify-center items-center hover:text-red-400' onClick={() => {removeFromCart({id})} }> <MdDeleteForever/> </div>
           </div>
          )
        })}

         
        
        </div>}


        {/* CHECKOUT AND SUBTOTAL SECTION */}
        
        {!cartItems.length < 1 &&  <div className='flex flex-col  h-[120px] p-1 px-3 bg-slate-400 w-full fixed bottom-0 overflow-x-hidden'>
         <div className='w-2/3 text-lg text-slate-800 font-bold'>
          Subtotal <span> ({cartItems.map(item => item.quantity).reduce((total,i) => total += i)}) items</span>
         </div>
         <hr className="bg-black" />
         <span className="text-[14px] font-semibold flex gap-x-1 items-center"><VscQuestion /> Delivery: Free </span>
         <span className="text-[14px] font-semibold flex gap-x-1 items-center"> <VscQuestion /> Total: ${total.toFixed(2)} </span>


         <div className='my-[2px] text-slate-800 flex  items-center gap-x-2'> <span className='bg-black p-2 rounded-lg text-white flex w-[120px] justify-center items-center text-[14px] shadow-lg cursor-pointer'>View Bag({cartItems.map(item => item.quantity).reduce((total,i) => total += i)})  <GiShoppingCart className='w-4 h-4'/></span>
       
       
      
         <FlutterBtn  />
        
          
          </div> 

        </div>}
       

      </div>
    </motion.div>

    

    </AnimatePresence>

    
  )
}

export default CartContainer