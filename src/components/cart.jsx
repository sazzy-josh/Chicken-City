import React  from "react"
import { motion , AnimatePresence } from 'framer-motion'
import { useCartsContext } from '../context/CartContext'
import empty from "./assets/svg/empty.svg"
import { HiPlus , HiMinus , HiOutlineArrowNarrowLeft ,HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdOutlinePayment } from 'react-icons/md'





const CartContainer = () => {
    const { clearCart , total ,increase, decrease , removeFromCart , openCart , state: {cartItems} , flutterModal ,handleFee , fee ,subTotal } = useCartsContext()
   

 
 

  return (
    // Cart Section for Desktop and Large screens
    <AnimatePresence >
    <motion.div 
    initial={{x:"100vw"}}
    animate={{x:0}}
    exit={{x:"-100vw"}}
    transition={{duration:1 ,stiffness:120 , type:'spring' }}
    className='hidden md:flex fixed top-0 left-0  w-full h-screen cart sansPro'>
      {/* CART ITEMS SECTION */}
      <div className='w-4/6 bg-white  relative'>
          
          <div className="h-[90px] w-full flex p-8 justify-between items-start">

            <p className="text-[30px] font-bold sansPro">Shopping Cart</p>
             <p className="text-md font-semibold mt-4 sansPro">{cartItems.map((item) =>item.quantity).reduce((acc,i)=>{
              return acc += i},0)} items</p>
          </div>

        {/* ITEMS SECTION  */}
          <div className="p-8 flex flex-col w-full items-section sansPro">
          
             {/* LOOP THROUGH CART ITEMS */}  
                {cartItems.length < 1 ? (
                  <div className="flex flex-col items-center justify-center sansPro"> <img src={empty} alt="no-item" className="w-[250px] h-[250px]"/> <p className="text-center sansPro">No item in cart</p></div>
                ) : (
                 cartItems.map(({ id, quantity , price , image , title ,category }) => {
                  return (
                    <div key={id}>
                      <hr />
                        <div className=" flex gap-x-[8px] w-full content py-4 items-center justify-center h-[150px] ">
                <div className="sm:w-1/6 bg-slate-100 shadow-xs rounded-xl flex justify-center items-center h-[125px]">
                  <img src={image} alt={image} className="w-[110px] h-[110px]  object-contain "/>
                </div>
                <div className="sm:w-2/6 flex flex-col">
                <span className="text-md sansPro text-slate-500">{category}</span>
                <span className="font-semibold text-sm sansPro">{title}</span>
                </div>
                <div className="sm:w-1/6 lg:w-2/6 flex sm:gap-x-1 lg:gap-x-4 items-center text-sm">
                  {quantity > 1 ? (<motion.span
                  whileTap={{scale:1.4}}
                  className="cursor-pointer border rounded-full p-2" onClick={()=> {decrease({id})}}><HiMinus /></motion.span>) : (<motion.span
                    whileTap={{scale:1.4}}
                    className="cursor-not-allowed  border rounded-full p-2"><HiMinus /></motion.span>)}
                  <span className="p-2 sm:px-2 lg:px-4 font-semibold sansPro">{quantity}</span>
                  <motion.span
                    whileTap={{scale:1.4}}
                  className="cursor-pointer border rounded-full p-2" onClick={()=> {increase({id})}}><HiPlus /></motion.span>
                </div>
                <div className="sm:w-2/6 lg:w-1/6 flex sm:justify-around lg:justify-between items-center">
                  <span className="font-semibold  sansPro">{quantity} x ₦{price.toLocaleString()}</span>
                  <span className="font-bold text-2xl rotate-45 cursor-pointer hover:text-red-500 " onClick={() =>removeFromCart({id}) }> + </span>
                </div>
                
              </div>
             <hr />
                    </div>
                  )
                 })
                )}


            
            <div className="absolute bottom-6 flex w-full justify-between items-center ">
              <div className="flex gap-x-1   items-center cursor-pointer sansPro hover:font-semibold" onClick={ openCart }> <HiOutlineArrowNarrowLeft  className="w-6 h-6 sansPro hover:text-slate-700 hover:scale-125 " /> Back to Shop</div> 
              <span
              onClick={clearCart}  
              className="border rounded-full gap-x-1  flex justify-around mr-12 p-1 font-bold hover:text-red-500 hover:font-extrabold hover:border-red-600 border-slate-700 cursor-pointer text-xs items-center px-2"><p className="rounded-full p-2 border text-[9px] w-5 h-5 flex justify-center items-center border-slate-800  hover:border-red-600 "><span>X</span></p>clear cart</span>
            </div>
          </div>
          {/* END OF ITEMS SECTION */}

      </div>


      {/* CART SUMMARY AND CHECKOUT SECTION */}
      
      <div className='w-2/6 bg-slate-300 flex flex-col box-border p-8 sansPro'>
        
       <div className="h-[90px] items-center py-4">
       <p className="text-[30px] font-bold sansPro"> Summary </p>
       
       </div>
       <hr />

       <div className="flex flex-col gap-y-4 sansPro">
       <div className="flex items-center justify-between font-semibold  ">
        <p className="pt-8 font-semibold sansPro">ITEMS({cartItems.map((item) =>item.quantity).reduce((acc,i)=>{
              return acc += i},0)})</p>
        <p className="pt-8 sansPro"> ₦{total.toLocaleString()}</p>
       </div>

       <span className="font-semibold  flex justify-between sansPro">
        <p className="font-semibold sansPro">SHIPPING</p>

        <p className="sansPro">₦{fee}</p>
       </span>

       <span className="font-semibold  flex justify-between sansPro">
        <p className="font-semibold sansPro">DISCOUNT</p>

        <p className="sansPro">₦0</p>
       </span>

       <div className="w-full py-2">
       <select name="delivery" className="w-full p-2 outline-none font-semibold rounded-sm sansPro" onChange={ handleFee } value={ fee }>
        <option className='p-2 sansPro' value="800">STANDARD DELIVERY  ₦800</option>
        <option className='p-2 sansPro' value="1500">EXPRESS DELIVERY  ₦1,500</option>
        <option className='p-2 sansPro' value="2500">⚡SWIFT-HIGH PRIORITY  ₦2,500</option>
      </select>
       </div>

       <span className="font-bold py-1 sansPro">PROMO CODE</span>

       <div className="relative mb-[26px] sansPro">
       <input type="text" placeholder="Enter your Code" className='w-full p-2 font-semibold rounded-sm outline-none' />
       <HiOutlineArrowNarrowRight className="absolute right-2 top-2 w-6 h-6 " />
       </div>

 
       </div>

       <hr />

       <div className="flex justify-between py-4 font-semibold sansPro">
         <p className="font-semibold sansPro">TOTAL PRICE</p>
         <p className="sansPro">{ total === 0 ? (<p  className="sansPro">₦0.000</p>) : (<p  className="sansPro">₦{subTotal().toLocaleString()}</p>)  }</p>
       </div>

       <div className="w-full bg-black flex items-center justify-center gap-x-1 text-white my-2 text-center p-2 rounded-sm cursor-pointer sansPro " onClick={flutterModal}>CHECKOUT <MdOutlinePayment className='w-4 h-4'/> </div>

       <p className="text-red-600 py-2 text-lg text-center sansPro"> *WARNING:DO NOT MAKE PAYMENTS WITH YOUR REAL CARD 💳* </p>
       

      </div>
    </motion.div>

      {/*Cart's Mobile and small Screens*/}
     {/* <motion.div 
       className="w-full md:hidden bg-white p-3 mobile-cart flex flex-col sansPro my-2 mb-4">
        <div className="flex justify-between items-center">
          <HiOutlineArrowNarrowLeft onClick={openCart} className="w-6 h-6"/><span
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
                  className="rounded-full p-2 border-slate-300 border-2 w-8 h-8 flex items-center justify-center text-xs">< HiMinus /></motion.span> <span flex items-center justify-center text-sm>{quantity}</span> <motion.span
                  whileTap={{scale:1.2}}
                  className="rounded-full p-2 w-8 h-8 justify-center items-center border-slate-300 border-2 text-xs">< HiPlus/></motion.span></span></div>
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
        
        
     </motion.div> */}

    

    </AnimatePresence>

    
  )
}

export default CartContainer