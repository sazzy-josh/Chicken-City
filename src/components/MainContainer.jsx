import React from 'react'
import Bike from '../components/assets/img/delivery.png'
import { BsArrowRight } from 'react-icons/bs'
import HeroBg from '../components/assets/images/heroo.png'
import { motion } from 'framer-motion'
import p2 from '../components/assets/img/c7.png'
import p5 from '../components/assets/img/i1.png'
import p6 from '../components/assets/img/fi3.png'
import p7 from '../components/assets/images/product_01.3.png'


const categories = [
  {id:1 , type:"Chicken" , price : 20 , extra: "Chicken & Chips" , image:p2},
  {id:2 , type:"Icecream" , price : 9.2 , extra: "Chocolate & Vanila" , image :p5 },
  {id:3 , type:"Fish" , price : 19.6 , extra: "Mixed Fish Kebab" , image : p6 },
  {id:4 , type:"Hamburger" , price : 11.3 , extra: "Mixed Chicken Hamburger" , image : p7}
]



const MainContainer = () => {
  return (
    <div>
        {/* Start of Main Page section */}

      <main className='grid md:grid-cols-2 p-5 sm:p-10 lg:px-32 gap-10 h-auto screen box-border'>
      {/* Column 1 for medium and  large screens */}
     <div className='sm:h-full relative  flex justify-center flex-col pt-4 '>
    {/* Food delivery logo section */}
       <div className='flex  items-center rounded-full text-xs p-1 px-2  justify-center text-red-500 font-semibold bg-red-200 max-w-[130px]'>
        <p>Bike Delivery</p>
        <div className='bg-white w-5 h-5 rounded-full flex justify-center items-center'>
        <img src={Bike} alt="Bike Delivery" className='w-6 h-6' />
        </div> 
       </div>

       {/* Text Content for Header*/}
       <motion.p 
       initial={{opacity:0.4 ,x:-100}}
       animate={{opacity:1 , x: 0}}
       transition={{ ease: "easeInOut", duration: 0.7 ,
       }}
       
       className='py-5 text-4xl lg:text-5xl font-bold md:tracking-[normal] md:py-8 lg:max-w-[500px] '> We offer the <span className='text-red-500'>Fastest Delivery </span>
        within Every City.</motion.p>

        <p className='tracking-wider text-sm box-border leading-normal  lg:leading-[1.9] font-[500] max-w-[500px]'>
        Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to .. This is a standard Indian mint chutney served with poppadums along with mint and lemon.
        We provide pleasure to your tastebuds 😉..
        </p>

        <div className='flex  gap-4 items-center'> 
        <motion.p
         whileHover={{scale:0.9 }}
         initial={{opacity:0.3 }}
         animate={{opacity:1 }}
         transition={{ ease: "easeInOut", duration: 0.4 }}
        className='text-slate-50 text-bold gap-2 p-3 my-8 text-xs cursor-pointer rounded-full bg-red-500 w-[120px] shadow-xl md:max-w-[140px] max-h-[80px]  font-bold flex justify-center items-center '>Order Now  <BsArrowRight className='font-bold' /></motion.p>
        
        <motion.p className='text-slate-50 text-bold gap-1 text-xs p-3 my-8 cursor-pointer rounded-full bg-black w-[120px] shadow-xl sm:max-w-[160px] max-h-[80px]  font-bold flex justify-center items-center '>Book a Table  <BsArrowRight className='font-bold' /></motion.p>
        <div className='flex justify-center text-xs items-center  p-1 font-bold text-red-700'>
        
        </div>
            

            
        </div>

          
     </div>
    
     {/* Column 2 for medium and  large screens */}
     <div className=' relative flex items-center justify-center '>
      
       <img src={HeroBg} alt="Hero-bg" className=' w-full object-cover'  />


    </div>      
    </main>
    </div>
  )
}

export default MainContainer