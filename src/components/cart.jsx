import React from 'react'
import { motion } from 'framer-motion'
import img from "./assets/images/bread_1.2.png"
import { useCartsContext } from '../context/CartContext'
import empty from "./assets/svg/empty.svg"


const CartContainer = () => {
    const { removeFromCart , openCart , state: {cartItems} } = useCartsContext()

  return (
    // Cart Section for Desktop and Large screens
    <div className='hidden sm:flex fixed top-0 left-0  w-full h-screen cart'>
      <div className='w-4/6 black'></div>
      
      <div className=' sm:w-4/6 lg:w-2/6 bg-white flex flex-col box-border'>
        
        <div onClick={ openCart } className='z-50 rounded-full w-8 h-8 flex justify-center items-center m-2 bg-slate-500 cursor-pointer'>
          <span className='rotate-45 text-xl text-white'>+</span>
        </div>
        {/* CART ITEMS SECTION */}

        {cartItems.length < 1 ? <div className='flex flex-col gap-y-4 h-screen justify-center items-center'><img src={empty} alt="empty cart" className='w-[150px] h-[150px] object-contain' /> <p>No item in cart</p> </div> :<div className='flex flex-col w-full p-4  overflow-y-scroll cartheight'>
        {cartItems.map(({id, quantity , price , image , title }) => {
          return (
            <div className='w-full flex justify-between py-1' key={id}>
            <div className='w-2/8 flex items-center justify-center '>
              <img src={image} alt="image" className='w-[60px] h-[60px] object-contain' />
            </div>
  
            <div className='w-4/8 flex flex-col'>
             <span className='font-semibold sm:text-sm text-base '>{title}</span>
             <span className='text-sm flex justify-between'><p>{quantity} <span className='text-xs'>X</span> </p> <p>${price}</p></span>
             <span className='rounded-lg flex justify-around bg-red-200 p-1'> <span className='font-bold cursor-pointer'>+</span> <span>{quantity}</span><span className='font-bold cursor-pointer text-xl'> -</span> </span>
            </div>
  
            <div className='w-2/8 h-2/8 rotate-45 px-4 flex text-[26px] cursor-pointer font-bold justify-center items-center hover:text-red-400' onClick={() => {removeFromCart({id})} }>+</div>
           </div>
          )
        })}

         
        
        </div>}


        {/* CHECKOUT AND SUBTOTAL SECTION */}
         
        {!cartItems.length < 1 &&  <div className='flex flex-col bg-red-400 h-[100px] p-2 px-4 w-full fixed bottom-0 overflow-x-hidden'>
         <div className='w-2/3 text-lg text-slate-800 font-bold'>
          Subtotal : <span>$200.89</span>
         </div>

         <div className='my-4 font-semibold text-slate-800'> <span className='bg-white p-2 rounded-md mr-4'>Checkout</span> <span className='rounded-md bg-slate-500 p-2'>Continue Shopping</span> </div>

        </div>}
       

      </div>
    </div>
  )
}

export default CartContainer