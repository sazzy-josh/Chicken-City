import React ,{ useEffect , useState } from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import empty from "./assets/svg/empty.svg"


const CartContainer = () => {
    const {clearCart , total ,increase, decrease , removeFromCart , openCart , state: {cartItems}} = useCartsContext()
    // const [qty , setQty] = useState(cartItems.qty)

 
 

  return (
    // Cart Section for Desktop and Large screens
    <AnimatePresence exitBeforeEnter>
    <motion.div 
    initial={{x:"100vw"}}
    animate={{x:0}}
    exit={{x:"-100vw"}}
    transition={{duration:1 , ease:'easeOut'}}
    className='hidden sm:flex fixed top-0 left-0  w-full h-screen cart '>
      <div className='w-4/6 black'></div>
      
      <div className=' sm:w-4/6 lg:w-2/6 bg-white flex flex-col box-border'>
        
        <div className="flex justify-between"><div onClick={ openCart } className='z-50 rounded-full w-8 h-8 flex  justify-center items-center m-2 bg-slate-500 cursor-pointer'>
          <span className='rotate-45 text-xl text-white'>+</span>
         
        </div>
        <span
        onClick={clearCart}  
        className="border rounded-full gap-x-1 m-2 flex justify-between p-1 font-bold hover:text-red-500 hover:font-extrabold hover:border-red-600 border-slate-700 cursor-pointer text-xs items-center px-2"><p className="rounded-full p-2 border text-[9px] w-5 h-5 flex justify-center items-center border-slate-800  hover:border-red-600 "><span>X</span></p>clear cart</span>
        </div>
        {/* CART ITEMS SECTION */}

        {cartItems.length < 1 ? <div className='flex flex-col gap-y-4 h-screen justify-center items-center'><img src={empty} alt="empty cart" className='w-[150px] h-[150px] object-contain' /> <p>No item in cart</p> </div> :<div className='flex flex-col w-full p-4  overflow-y-scroll cartheight'>
        {cartItems.map(({id, quantity , price , image , title }) => {
          return (
            <div className='w-full flex justify-between py-1' key={id}>
            <div className='w-2/8 flex items-center justify-center '>
              <img src={image} alt="image" className='w-[60px] h-[60px] object-contain' />
            </div>
  
            <div className='w-4/8 flex flex-col min-w-[134px]'>
             <span className='font-semibold sm:text-sm text-base '>{title}</span>
             <span className='text-sm flex justify-between'><p>{quantity} <span className='text-xs'>X</span> </p> <p>${price}</p></span>
             <span className='rounded-lg flex justify-around bg-red-200 p-1'> {quantity > 1 ? (<span className='font-bold cursor-pointer' onClick={() => {decrease({id})} }>-</span>): (<span className='font-bold cursor-not-allowed' disabled>-</span> )} <span>{quantity}</span><span className='font-bold cursor-pointer text-xl'  onClick={() => {increase({id})} }>+</span> </span>
            </div>
  
            <div className='w-2/8 h-2/8 rotate-45 px-4 flex text-[26px] cursor-pointer font-bold justify-center items-center hover:text-red-400' onClick={() => {removeFromCart({id})} }>+</div>
           </div>
          )
        })}

         
        
        </div>}


        {/* CHECKOUT AND SUBTOTAL SECTION */}
         
        {!cartItems.length < 1 &&  <div className='flex flex-col bg-gradient-to-tl from-slate-100 to-red-500 h-[100px] p-2 px-4 w-full fixed bottom-0 overflow-x-hidden'>
         <div className='w-2/3 text-lg text-slate-800 font-bold'>
          Subtotal : <span>${total.toFixed(2)}</span>
         </div>

         <div className='my-4 font-semibold text-slate-800'> <span className='bg-white p-2 rounded-md mr-4 text-sm shadow-lg cursor-pointer'>Checkout</span> <span className='rounded-md bg-slate-500 p-2 text-sm shadow-lg cursor-pointer'>Continue Shopping</span> </div>

        </div>}
       

      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default CartContainer