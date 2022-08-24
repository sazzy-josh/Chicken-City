import React  from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import empty from "./../components/assets/svg/empty.svg"
import { HiPlus , HiMinus , HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { MdOutlinePayment } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { clearCart , total ,increase, decrease , removeFromCart  , state: {cartItems} , flutterModal ,handleFee , fee ,subTotal } = useCartsContext()
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div 
      initial={{x:"-100vw"}}
      animate={{x:0}}
      exit={{x:"100vw"}}
      transition={{duration:0.5 , type:"easeInout" , stiffness:120 }}
       className="w-full md:hidden bg-white p-3 mobile-cart flex flex-col sansPro my-2 mb-4">
        <div className="flex justify-between items-center">
         <Link to='/'><HiOutlineArrowNarrowLeft className="w-6 h-6"/> </Link> <span
              onClick={clearCart}  
              className="border rounded-full gap-x-1  flex justify-around p-1 font-bold hover:text-red-500 hover:font-extrabold hover:border-red-600 border-slate-700 cursor-pointer text-xs items-center px-1"><p className="rounded-full p-2 border text-[9px] w-4 h-4 flex justify-center items-center border-slate-800  hover:border-red-600 "><span>X</span></p>clear cart</span>
        </div>

       <p className="sansPro font-semibold py-4">Cart({cartItems.map((item) =>item.quantity).reduce((acc,i)=>{
              return acc += i},0)})</p>
        
        <div className="flex flex-col">
          {cartItems.length < 1 ? (
            <div className="flex flex-col justify-center items-center ">
              <img src={empty} alt={empty} className='w-[150px] h-[150px]' />
              <p>No Items In Cart</p></div>
          ) : ( 
            <div>{cartItems.map(({id, quantity , price , image , title ,category}) => {
              return (
                <>
                <div className="flex w-full mb-2 my-4 " key={id}>
                <div className="w-2/6 flex justify-center items-center h-[80px]">
                  <div className="w-110px h-150px bg-slate-200 rounded-md -ml-4 flex justify-center items-center"><img src={image} alt={image} className="w-[85px] h-[85px] object-contain" /></div>
                </div>
                <div className="w-4/6 sansPro flex flex-col text-sm">
                  <p className="sansPro leading-none font-semibold tracking-normal text-slate-700"> {title}</p>
                  <p className="sansPro text-slate-500 py-1 font-semibold">{category}</p>
                  <div className="sansPro flex items-center">Quantity: <span className="flex items-center mx-2 gap-x-1"> <motion.span
                  whileTap={{scale:1.2}}
                  className="rounded-full p-2 border-slate-300 border-2 w-8 h-8 flex items-center justify-center text-xs" onClick={()=> {decrease({id})}}>< HiMinus /></motion.span> <span flex items-center justify-center text-sm>{quantity}</span> <motion.span
                  whileTap={{scale:1.2}}
                  className="rounded-full p-2 w-8 h-8 justify-center items-center border-slate-300 border-2 text-xs" onClick={()=> {increase({id})}}>< HiPlus/></motion.span></span></div>
                </div>
                <div className="w-2/6 sansPro flex flex-col justify-between "><p className="sansPro">{quantity} x ₦{price.toLocaleString()}</p> <p className="underline underline-offset-2 sansPro py-2" onClick={() => { removeFromCart({id})} }>
                Remove
               </p></div>
            
               </div>
              
               <hr />
                </>
              )
            }) }</div>
          )}
          
        </div>
        
        
     </motion.div>


    </AnimatePresence>
  )
}

export default Cart