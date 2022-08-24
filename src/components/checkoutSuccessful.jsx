import React from 'react'
import { useParams } from 'react-router-dom'
import Lottie from 'react-lottie';
import success from "./assets/json/success.json"
import confettii from "./assets/json/confetti.json"
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

const CheckoutSuccessful = () => {
    const { tx } = useParams()

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
    <div className='flex flex-col'>
    

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
           <p className='font-semibold py-1 text-center'>Thank you {tx}!Your Payment has been recieved and your order would be delivered Shortly.</p>
           <p className='font-semibold text-center'>Transaction reference: #{Date.now()+654098765} </p>
           <Link to='/'><div className='flex my-4 gap-x-1 border-rounded justify-center border-slate-200 items-center text-black  border-2 font-semibold hover:bg-slate-700 hover:text-white rounded-full p-2'> <p> Back to home</p> <HiOutlineArrowNarrowLeft /> </div></Link>
       </div>
       
    </div> 
  )
}

export default CheckoutSuccessful