import React from 'react'
import { useParams } from 'react-router-dom'
import Lottie from 'react-lottie';
import success from "./assets/json/success.json"
import confettii from "./assets/json/confetti.json"
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useCartsContext } from '../context/CartContext';



const CheckoutSuccessfull = () => {
    const { tx } = useParams()

    const navigate = useNavigate()

    const { closeCheckout } = useCartsContext()

    const backHome = () => {
      closeCheckout()
      return navigate('/')
    }

    const defaultOptions = {
        loop: 1,
        autoplay: true, 
        animationData: success,
      
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
          isClickToPauseDisabled:true,
        }
      };
      const confetti = {
        loop: true,
        autoplay: 1, 
        animationData: confettii,
      
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
          isClickToPauseDisabled:true,
        }
      };



  return (
    <div className='flex flex-col overflow-x-hidden'>
    

        <div className='success flex justify-center items-center flex-col'>
              
           <div className='w-[70vw] flex justify-center items-center relative '>
           <Lottie options={defaultOptions}
                 height={400}
                 width={400}
                />
           <div className='absolute'>
           <Lottie options={confetti}
                 height={500}
                 width={400}
                 
                />
           </div>
           </div>
           <p className='font-semibold py-1 text-center text-xs md:text-sm'>Thank you {tx}!Your Payment has been recieved and your order would be delivered Shortly.</p>
           <p className='font-semibold text-center text-xs md:text-sm'>Transaction reference: #{Date.now()+654098765} </p>
          <div className='flex my-4 gap-x-1 border-rounded justify-center border-slate-200 items-center text-black  border-2 font-semibold hover:bg-slate-700 hover:text-white rounded-full p-2  text-xs md:text-sm cursor-pointer' onClick={backHome} > <p> Back to home</p> <HiOutlineArrowNarrowLeft /> </div>
       </div>
       
    </div> 
  )
}

export default CheckoutSuccessfull