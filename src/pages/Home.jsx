import React from 'react'
import Bike from '../components/assets/img/delivery.png'
import { BsArrowRight } from 'react-icons/bs'

const Home = () => {
  return (
    <main className='grid sm:grid-cols-2 p-3 sm:p-10 gap-3'>
      {/* Column 1 for medium and  large screens */}
     <div className=''>
    {/* Food delivery logo section */}
       <div className='flex items-center rounded-full text-xs p-1 px-2  justify-center text-orange-400 font-semibold bg-orange-200 max-w-[130px]'>
        <p>Bike Delivery</p>
        <div className='bg-white w-5 h-5 rounded-full flex justify-center items-center'>
        <img src={Bike} alt="Bike Delivery" className='w-6 h-6' />
        </div> 
       </div>

       {/* Text Content for Header*/}
       <p className='py-4 text-5xl font-bold sm:tracking-wider leading-[1.3] sm:leading-normal'><span className='text-orange-400'> We </span>  offer  <br /> the <span className='text-orange-400'>Fastest </span>
        Delivery in <span className='text-orange-400'>Your City</span></p>

        <p className='sm:tracking-wider leading-[1.3] sm:leading-normal'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quod ullam doloribus possimus maxime eius et hic eligendi animi, mollitia ad neque iusto quis earum labore illum deserunt, aut blanditiis suscipit reiciendis cupiditate? Aperiam, doloremque exercitationem! 
        </p>

        <p className='text-orange-500 text-bold p-2 rounded bg-orange-300 max-w-[150px] mt-3 font-bold flex justify-center items-center gap-2'>Order Now <BsArrowRight className='font-bold' /></p>
     </div>
    
     {/* Column 2 for medium and  large screens */}
     <div>
        column 2
    </div>      
    </main>
  )
}

export default Home