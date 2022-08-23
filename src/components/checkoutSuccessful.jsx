import React from 'react'
import { useParams } from 'react-router-dom'
import Lottie from 'react-lottie';
import success from "./assets/json/success.json"
import confettii from "./assets/json/confetti.json"
import { Link } from 'react-router-dom'


const CheckoutSuccessful = () => {
    const { tx } = useParams()

    const defaultOptions = {
        loop: 1,
        autoplay: true, 
        animationData: success,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const confetti = {
        loop: 1,
        autoplay: true, 
        animationData: confettii,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


  return (
    <div className='success flex justify-center items-center flex-col'>
        <div className='w-[70vw] flex justify-center items-center relative '>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
             />
        <div className='absolute'>
        <Lottie options={confetti}
              height={1400}
              width={800}
              
             />
        </div>
        </div>
        <p className='font-semibold py-1'>Thank you {tx}!Your Payment has been recieved and your order would be delivered Shortly.</p>
        <p className='font-semibold'>Transaction reference: FX0{Date.now()} </p>
       <Link to='/'> <span className='rounded-full p-2 border-red-300 text-center font-semibold cursor-pointer'>Back to home</span></Link>
    </div>
  )
}

export default CheckoutSuccessful