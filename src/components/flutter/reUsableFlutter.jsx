import React from 'react'
import logo from '../assets/images/Flutterwave_Logo.png'
import { useState } from 'react'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useCartsContext } from '../../context/CartContext';
import { motion  , AnimatePresence} from 'framer-motion'
import { MdCancel } from 'react-icons/md'
import { useNavigate  } from 'react-router-dom'

const ReusableFlutterBtn = () => {

         const redirect = useNavigate()
    
        const {  name , handleName , state:{ priceForSingleItem } , closeCheckout } = useCartsContext()
     
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");

        const successPage = () => {
          return redirect(`/payment-successfull/${name}`)
        }

        const config = {
            public_key: 'FLWPUBK_TEST-a2de6bb8ef5e6530c4ae43a0c085aee6-X',
            tx_ref: Date.now(),
            amount:priceForSingleItem,
            currency: 'NGN',
            payment_options:'card,mobilemoney,ussd',
            customer: {
              email: email,
              phonenumber: phone,
              name: name,
            },
            customizations: {
              title: 'Foodcity',
              description: 'Payment for items in cart',
              logo:'',
            },
          };

          const fwConfig = {
            ...config,
            text: `PAY ₦${priceForSingleItem.toLocaleString()} NOW!`,
            callback: (response) => {  
              successPage()   
              closePaymentModal()  // this will close the modal programmatically
             
            },
            onClose: () => {},
          };

   
  return (
    < AnimatePresence >
    <div className="modal">
        
        <motion.div
        initial={{y:"-80vw"}}
        animate={{y:0}}
        transition={{duration:1 , type:"spring" ,stiffness:200 }}
        exit={{y:"-100vw"}}
        className='inner_Flutter_Modal h-[44vh] w-[85vw]  sm:w-[45vw] sm:h-[50vh] lg:w-[30vw] lg:h-[50vh]  bg-slate-300 rounded-xl shadow-xl text-white p-4 flex flex-col'>
         <div className='flex justify-between h-1/4'> <div className='flex'><div className='rounded-full w-12 h-12 p-1 bg-slate-800 flex items-center justify-center'><img src={logo} alt="flutter" className='sm:w-8 sm:h-8'/></div> </div> <span  className='w-12 p-1 h-12 cursor-pointer flex justify-center items-center' onClick={ closeCheckout }><MdCancel className="w-8 h-8 text-red-500" /> </span> </div>
           
           <div className='flex flex-col h-3/4 '>
           <form className='flex flex-col  text-black gap-y-2'> 
            <input type="text" name="fullName" placeholder='Idahosa Osaze' className='p-2 py-3 rounded-md outline-none  text-xs placeholder-black placeholder:opacity-[35%]' required onChange={handleName} value={name} />
            <input type="email" name="email" placeholder='idahosajoshua61@gmail.com' className='p-2 py-3 rounded-md  outline-none  text-xs placeholder-black placeholder:opacity-[35%]' required onChange={(e)=> {setEmail(e.target.value)}} value={email}/>
            <input type="tel" name="phone" placeholder="+234-700-000-0000" className='p-2 rounded-md py-3 outline-none  text-xs placeholder-black placeholder:opacity-[35%]' required onChange={(e)=> {setPhone(e.target.value)}} value={phone} />
            
           </form>
            
           <button className='bg-yellow-500 p-2 rounded-lg text-center my-4 font-bold tracking-wider sansPro'>
               <FlutterWaveButton {...fwConfig} />
           </button>

           <p className='md:hidden  text-[12px] text-center sansPro text-red-500'>Warning:Do not make payment with your real card</p>

           </div>
  
        </motion.div>
        
    </div>
    </AnimatePresence>
  )
}

export default ReusableFlutterBtn