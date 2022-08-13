import React from 'react'
import { useState ,useEffect } from 'react'
import products from './assets/fake-data/products'
import breadClip from "./assets/images/bread_CLIPART.png"
import chickenClip from './assets/images/chicken_CLIPART.png'
import pizzaClip from './assets/images/pizza.png'
import Hamburger from './assets/images/hamburger.png'
import { motion } from 'framer-motion'


const Popular = () => {

    const [category, setcategory] = useState('ALL');
    const [allFoods, setallFoods] = useState(products);

    useEffect(() => {
       

    }, [category]);

  return (
    <div className=' p-5 sm:p-10 lg:px-28'>
        <p className='md:text-[32px] text-[28px] font-bold text-center'>Popular Dishes with delivery</p>
         <p className='lg:text-sm text-xs text-center py-2 font-bold'> The most delicious and healthy dishes from our chef.You can order this meal seperately or as part of a meal plan</p>

         <div className=' bg-red-400 rounded-lg py-3 flex justify-center items-center text-xs md:text-sm font-semibold md:gap-x-3'>
           
             <span className='flex items-center justify-center p-2'>
                All
             
             </span>
         
           
             <span  className='flex items-center justify-center p-2 gap-x-1'>
                
                <img src={pizzaClip} alt="pizza" className='w-3 h-3' />
                Pizza
             </span>
           
           
             <span  className='flex items-center justify-center p-2 gap-x-1'>
               
                <img src={breadClip} alt="bread"  className='w-3 h-3'/>
                Bread  
             </span>
          
           
             <span  className='flex items-center justify-center p-2 gap-x-1'>
                
                <img src={Hamburger} alt="burger"  className='w-3 h-3' />
                Burger
             </span>
         
         
             <span className='flex items-center justify-center p-2 gap-x-1'>
               
                <img src={chickenClip} alt="chicken"  className='w-3 h-3'/>
                Chicken
             </span>
         


         </div>

         <div className='cards py-4 '>
          {allFoods.map(({ id, price ,image01 , title }) => {
             return (
                <div className='flex items-center justify-center'>
                  <div key={id} className="rounded-lg flex border border-red-200 flex-col w-[180px] h-[250px]  justify-around items-center bg-gradient-to-r from-slate-100 to-red-200 shadow-lg hover:border-red-400">
                
                     <motion.img 
                     whileHover={{scale:1.2}}
                     src={image01} alt={title} className="sm:w-[90px] sm:h-[90px] w-[80px] h-[80px] object-contain py-1 shadow-sm"/>
                     <span className='lg:text-sm text-xs text-center py-2 font-bold'>{title}</span>
                     <div className='flex text-sm text-center py-2 font-bold justify-between items-center w-full p-2'><p>${price}</p> <span className='text-lg px-2 rounded text-white bg-red-300'>+</span> </div>
             
                 </div>
                </div>
             )
          }).slice(0,12)}

         </div>
    </div>
  )
}

export default Popular