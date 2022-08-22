import React  from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import empty from "./assets/svg/empty.svg"
import { HiPlus , HiMinus , HiOutlineArrowNarrowLeft ,HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdOutlinePayment } from 'react-icons/md'

// import FlutterBtn from "./flutter/flutterBtn"


const CartContainer = () => {
    const { clearCart , total ,increase, decrease , removeFromCart , openCart , state: {cartItems} , flutterModal ,handleFee , fee ,subTotal } = useCartsContext()
   

 
 

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
      <div className='w-4/6 bg-white  relative'>
          
          <div className="h-[90px] w-full flex p-8 justify-between items-start">

            <p className="text-[30px] font-bold ">Shopping Cart</p>
             <p className="text-md font-semibold mt-4">{cartItems.map((item) =>item.quantity).reduce((acc,i)=>{
              return acc += i},0)} items</p>
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
                <div className="w-1/6 bg-slate-100 shadow-xs rounded-xl flex justify-center items-center h-[125px]">
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
                  <span className="font-semibold">{quantity} x ₦{price}</span>
                  <span className="font-bold text-2xl rotate-45 cursor-pointer hover:text-red-500" onClick={() =>removeFromCart({id}) }> + </span>
                </div>
                
              </div>
             <hr />
                    </div>
                  )
                 })
                )}


            
            <div className="absolute bottom-6 flex w-full justify-between items-center ">
              <div className="flex gap-x-1   items-center cursor-pointer" onClick={ openCart }><HiOutlineArrowNarrowLeft className="w-8 h-8" /> Back to Shop</div> 
              <span
              onClick={clearCart}  
              className="border rounded-full gap-x-1  flex justify-around mr-12 p-1 font-bold hover:text-red-500 hover:font-extrabold hover:border-red-600 border-slate-700 cursor-pointer text-xs items-center px-2"><p className="rounded-full p-2 border text-[9px] w-5 h-5 flex justify-center items-center border-slate-800  hover:border-red-600 "><span>X</span></p>clear cart</span>
            </div>
          </div>
          {/* END OF ITEMS SECTION */}

      </div>


      {/* CART SUMMARY AND CHECKOUT SECTION */}
      
      <div className='w-2/6 bg-slate-300 flex flex-col box-border p-8'>
        
       <div className="h-[90px] items-center py-4">
       <p className="text-[30px] font-bold"> Summary </p>
       
       </div>
       <hr />

       <div className="flex flex-col gap-y-4">
       <div className="flex items-center justify-between font-semibold  ">
        <p className="pt-8 font-bold">ITEMS {cartItems.map((item) =>item.quantity).reduce((acc,i)=>{
              return acc += i},0)}</p>
        <p> ₦{total.toFixed(2)}</p>
       </div>

       <span className="font-semibold  flex justify-between">
        <p className="font-bold">SHIPPING</p>

        <p>₦{fee}</p>
       </span>

       <div className="w-full py-2">
       <select name="delivery" className="w-full p-2 outline-none font-semibold" onChange={ handleFee } value={ fee }>
        <option className='p-2' value="800">STANDARD DELIVERY  ₦800</option>
        <option className='p-2' value="1500">EXPRESS DELIVERY  ₦1500</option>
        <option className='p-2' value="2500">⚡SWIFT-HIGH PRIORITY  ₦2500</option>
      </select>
       </div>

       <span className="font-bold py-1">PROMO CODE</span>

       <div className="relative mb-[26px]">
       <input type="text" placeholder="Enter your Code" className='w-full p-2 font-bold outline-none' />
       <HiOutlineArrowNarrowRight className="absolute right-2 top-2 w-6 h-6 " />
       </div>
 
       </div>

       <hr />

       <div className="flex justify-between py-4 font-semibold">
         <p className="font-bold">TOTAL PRICE</p>
         <p>{ total === 0 ? (<p>₦0.000</p>) : (<p>₦{subTotal().toFixed(2)}</p>)  }</p>
       </div>

       <div className="w-full bg-black flex items-center justify-center gap-x-1 text-white my-2 text-center p-2 font-semibold cursor-pointer rounded-sm" onClick={flutterModal}>CHECKOUT <MdOutlinePayment className='w-4 h-4'/> </div>

       <p className="text-red-600 py-2 text-lg text-center"> *WARNING:DO NOT MAKE PAYMENTS WITH YOUR REAL CARD 💳* </p>
       

      </div>
    </motion.div>

    

    </AnimatePresence>

    
  )
}

export default CartContainer