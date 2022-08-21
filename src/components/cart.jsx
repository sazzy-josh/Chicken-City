import React  from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import empty from "./assets/svg/empty.svg"
import { HiPlus , HiMinus , HiOutlineArrowNarrowLeft } from 'react-icons/hi'
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
    transition={{duration:1 ,stiffness:120 , type:'spring' }}
    className='hidden md:flex fixed top-0 left-0  w-full h-screen cart'>
      {/* CART ITEMS SECTION */}
      <div className='w-4/6 bg-white '>
          
          <div className="h-[90px] w-full flex p-8 justify-between items-start">

            <p className="text-[30px] font-bold ">Shopping Cart</p>
             <p className="text-md font-semibold mt-4">{cartItems.map((item) =>item.quantity).reduce((acc,i)=>{
              return acc += i})} items</p>
          </div>

        {/* ITEMS SECTION  */}
          <div className="p-8 flex flex-col w-full items-section">
          
             {/* LOOP THROUGH CART ITEMS */}  
                {cartItems.length < 1 ? (
                  <div className="flex flex-col items-center justify-center"> <img src={empty} alt="no-item" className="w-[250px] h-[250px]"/> <p className="text-center">No item in cart</p></div>
                ) : (
                 cartItems.map(({id, quantity , price , image , title ,category }) => {
                  return (
                    <div key={id}>
                      <hr />
                        <div className=" flex gap-x-[8px] w-full content py-4 items-center justify-center h-[150px] ">
                <div className="w-1/6 bg-slate-200 shadow-xs rounded-xl flex justify-center items-center h-[125px]">
                  <img src={image} alt={image} className="w-[110px] h-[110px]  object-contain "/>
                </div>
                <div className="w-2/6 flex flex-col">
                <span className="text-md">{category}</span>
                <span className="font-semibold text-sm">{title}</span>
                </div>
                <div className="w-2/6 flex gap-x-4 items-center">
                  {quantity > 1 ? (<motion.span
                  whileTap={{scale:1.4}}
                  className="cursor-pointer" onClick={()=> {decrease({id})}}><HiMinus /></motion.span>) : (<motion.span
                    whileTap={{scale:1.4}}
                    className="cursor-not-allowed"><HiMinus /></motion.span>)}
                  <span className="border rounded-lg p-2 px-4 font-bold">{quantity}</span>
                  <motion.span
                    whileTap={{scale:1.4}}
                  className="cursor-pointer" onClick={()=> {increase({id})}}><HiPlus /></motion.span>
                </div>
                <div className="w-1/6 flex justify-between items-center">
                  <span className="font-semibold">{quantity} x ${price}</span>
                  <span className="font-bold text-2xl rotate-45 cursor-pointer" onClick={() =>removeFromCart({id}) }> + </span>
                </div>
                
              </div>
             <hr />
                    </div>
                  )
                 })
                )}


            
              <div className="flex gap-x-1  absolute bottom-6 items-center cursor-pointer" onClick={ openCart }><HiOutlineArrowNarrowLeft className="w-8 h-8" /> Back to Shop</div> 
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