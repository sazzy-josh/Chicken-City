import React from 'react'
import Bike from '../components/assets/img/delivery.png'
import { BsArrowRight } from 'react-icons/bs'
import HeroBg from '../components/assets/img/heroBg.png'
import { motion } from 'framer-motion'
import p1 from '../components/assets/img/c1.png'
import p2 from '../components/assets/img/c7.png'
import p4 from '../components/assets/img/r1.png'
import p5 from '../components/assets/img/i1.png'
import p6 from '../components/assets/img/fi3.png'
import p7 from '../components/assets/images/product_01.3.png'

const categories = [
  {id:1 , type:"Chicken" , price : 20 , extra: "Mixed Kebab plates" , image:p1},
  {id:2 , type:"Icecream" , price : 9 , extra: "Chocolate & Vanila" , image :p5 },
  {id:3 , type:"Fish" , price : 19.6 , extra: "Mixed Fish Kebab" , image : p6 },
  {id:4 , type:"Hamburger" , price : 11 , extra: "Mixed Chicken Hamburger" , image : p7}
]

const Home = () => {
  return (
    <section className='relative'>
      <main className='grid sm:grid-cols-2 p-3 sm:p-12 gap-10 '>
      {/* Column 1 for medium and  large screens */}
     <div className='h-screen'>
    {/* Food delivery logo section */}
       <div className='flex  items-center rounded-full text-xs p-1 px-2  justify-center text-orange-400 font-semibold bg-orange-200 max-w-[130px]'>
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
       
       className='py-4 text-5xl font-bold sm:tracking-wider leading-[1.3] sm:leading-[1.8]'><span className='text-orange-400'> We </span>  offer  <br /> the <span className='text-orange-400'>Fastest </span>
        Delivery within <span className='text-orange-400'>Every City.</span></motion.p>

        <p className='tracking-wider  leading-[2.5] sm:leading-[1.9]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quod ullam doloribus possimus maxime eius et hic eligendi animi, mollitia ad neque iusto quis earum labore illum deserunt, aut blanditiis suscipit reiciendis cupiditate? Aperiam, doloremque exercitationem! 
        </p>

        <motion.p
         initial={{opacity:0.3 }}
         animate={{opacity:1 }}
         transition={{ ease: "easeInOut", duration: 2 }}
        className='text-orange-500 text-bold p-3  rounded bg-orange-300 sm:max-w-[150px] mt-3  sm:mt-8 font-bold flex justify-center items-center gap-2'>Order Now <BsArrowRight className='font-bold' /></motion.p>
     </div>
    
     {/* Column 2 for medium and  large screens */}
     <div className='flex p-3 sm:p-5 gap-3 relative sm:screen'>
        <img src={HeroBg} alt="Hero-bg" className='ml-auto md:w-[450px] -z-2 sm:h-[500px]' />

        <div className='rounded h-full w-full absolute top-0 left-0 flex flex-wrap justify-center items-center gap-6 sm:gap-12 sm:px-32 '>
          
        {categories.map(({image, id , type , extra , price}) => {
          return (
         <div className='overlay p-3 w-120  text-sm text-center text-slate-700 rounded-xl bg-red-300 '>
            <img src={image} alt={id} className='w-40 h-40 object-contain -mt-20 text-center '/>
            <p className='font-bold p-2 w-38'>{type}</p>
            <p className='font-semibold p-2 text-[12px] w-full'>{extra}</p>
            <p className='font-bold text-center'><span className='text-pink-800'>$</span> {price}</p>
            
          </div>
          )
        })}


          

          


        </div>
    </div>      
    </main>
    </section>
  )
}

export default Home