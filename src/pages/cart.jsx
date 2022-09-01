import React  from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import empty from "./../components/assets/svg/empty.svg"
import { HiPlus , HiMinus , HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdOutlinePayment } from 'react-icons/md'
import { Link , useNavigate } from 'react-router-dom'
import { useAuthsContext } from "../context/authContext"
import { toast } from 'react-toastify';



const Cart = () => {
    const { User , loginState } = useAuthsContext()
    const { clearCart , total ,increase, decrease , removeFromCart  , state: {cartItems} , flutterModal ,handleFee , fee ,subTotal } = useCartsContext()
  
 const navigate = useNavigate()

    const handleLogin = () =>{
      loginState()
      toast.warning("Login to proceed to checkout")
      navigate('/auth')
     }


    return (
    <AnimatePresence exitBeforeEnter>
      <motion.div 
        initial={{opacity:0 ,x:-350}}
        animate={{opacity:1 , x: 0}}
        exit={{x:1000  }}
        transition={{type:'spring' , stiffness:100  ,ease:'easeOut' }}
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
            <div className="flex flex-col justify-center items-center my-16">
              <img src={empty} alt={empty} className='w-[200px] h-[200px]' />
              <p>No Items In Cart</p></div>
          ) : ( 
            <div>{cartItems.map(({id, quantity , price , image , title ,category}) => {
              return (
                <>
                <div className="flex w-full mb-2 my-4 " key={id}>
                <div className="w-2/6 flex justify-center items-center h-[90px]">
                  <div className="w-110px h-150px bg-slate-200 rounded-md -ml-4 flex justify-center items-center"><img src={image} alt={image} className="w-[85px] h-[85px] object-contain" /></div>
                </div>
                <div className="w-4/6 sansPro flex flex-col text-sm">
                  <Link to={`/food-details/${id}`}>
                  <p className="sansPro leading-none font-[500px] tracking-normal text-slate-700"> {title}</p>
                  </Link>
                  <p className="sansPro text-slate-500 py-1 font-semibold">{category}</p>
                  <div className="sansPro flex items-center">Quantity: <span className="flex items-center mx-2 gap-x-1"> {quantity > 1 ? (<motion.span
                  whileTap={{scale:1.2}}
                  className="rounded-full p-2 border-slate-300 border-2 w-8 h-8 flex items-center justify-center text-xs" onClick={()=> {decrease({id})}}>< HiMinus /></motion.span>) : (<motion.span
                    whileTap={{scale:1.2}}
                    className="rounded-full p-2 border-slate-300 border-2 w-8 h-8 flex items-center justify-center text-xs cursor-not-allowed" disabled>< HiMinus /></motion.span> )} <span flex items-center justify-center text-sm>{quantity}</span> <motion.span
                  whileTap={{scale:1.2}}
                  className="rounded-full p-2 w-8 h-8 justify-center items-center border-slate-300 border-2 text-xs" onClick={()=> {increase({id})}}>< HiPlus/></motion.span></span></div>
                </div>
                <div className="w-2/6 sansPro flex flex-col justify-between "><p className="sansPro">{quantity} x ₦{price.toLocaleString()}</p> <p className="underline underline-offset-2 sansPro py-2 text-slate-600" onClick={() => { removeFromCart({id})} }>
                Remove
               </p></div>
            
               </div>
              
               <hr />
                </>
              )
            }) }</div>
          )}
          
        </div>
        
   {  cartItems.length > 0 && 
   <>
   <p className="font-bold sansPro mt-6 mb-2 text-[20px]">
            Summary
        </p>
        <hr />
        <div className="flex justify-between sansPro  my-2">
            <p className="sansPro font-bold">Subtotal</p>
            <p className="sansPro ">₦{total.toLocaleString()}</p>
        </div>
        <div className="flex justify-between sansPro semibold ">
            <p className="sansPro font-bold">Shipping</p>
            <p className="sansPro ">₦{fee}</p>
        </div>

        <div className="flex justify-between sansPro semibold ">
            <p className="sansPro font-bold">Discount</p>
            <p className="sansPro ">₦0</p>
        </div>
        <div className="w-full py-2 mb-2">
       <select name="delivery" className="w-full py-2 px-1 bg-gray-200 outline-slate-300 font-semibold rounded-sm sansPro" onChange={ handleFee } value={ fee }>
        <option className='sansPro  w-full' value="800">STANDARD DELIVERY  ₦800</option>
        <option className='sansPro w-full' value="1500">EXPRESS DELIVERY  ₦1,500</option>
        <option className='sansPro w-full' value="2500">⚡SWIFT-HIGH PRIORITY  ₦2,500</option>
      </select>
       </div>

       <hr />
       <div className="flex justify-between sansPro semibold my-3">
            <p className="sansPro font-bold">Total</p>
            <p className="sansPro ">{ total === 0 ? (<p  className="sansPro">₦0.000</p>) : (<p  className="sansPro">₦{subTotal().toLocaleString()}</p>)  }</p>
        </div>

      <hr />

      

       <div className="flex flex-col gap-y-2 my-4">
         
         <div className="sansPro relative">
         <input type="text" name="Promocode"  placeholder="Enter your code" className="sansPro border-slate-200 border-2 promo rounded-md p-2 w-full outline-none " />
         <HiOutlineArrowNarrowRight  className="absolute right-3 top-4 cursor-pointer" onClick={()=> {alert("Ooops!!Invalid promo code")}}/>
         </div>
       

       </div>

       {User ? (<span className="w-full rounded-full mb-8 my-2 p-3 flex justify-center items-center sansPro bg-slate-800 text-white gap-x-1" onClick={flutterModal}>
        <p className="sansPro ">Checkout </p>< MdOutlinePayment className="mt-1" />
       </span>) : (<span className="w-full rounded-full mb-8 my-2 p-3 flex justify-center items-center sansPro bg-slate-800 text-white gap-x-1" onClick={handleLogin}>
        <p className="sansPro ">Checkout </p>< MdOutlinePayment className="mt-1" />
       </span>) }
       </>}

     </motion.div>


    </AnimatePresence>
  )
}

export default Cart