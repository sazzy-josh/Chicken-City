import React, { useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import CommonSection from '../components/commonSection'
import { useParams } from 'react-router-dom'
import products from '../components/assets/fake-data/products'
import { IoMdStarOutline , IoMdStar } from 'react-icons/io'
import { HiPlus , HiMinus  } from 'react-icons/hi'

const FoodDetails = () => {
  const { id }= useParams()

  const foodDetails = products.find((item) => {
    return item.id === id    
  })

   const { image01 , image02, image03, quantity , category , rating , price , title , desc } = foodDetails
   
   const [ showSize  , setSize] = useState('small')
   const [ showDescription  , setShowDescription] = useState('desc')
    const [ showcaseImage  , setShowcaseImage] = useState(image01)
    const [ activeImage  , setActiveImage] = useState(1)
    

   

    useEffect(() => {  
     
    

    }, [foodDetails]);
    

    console.log(foodDetails)

  return (
    <motion.div>
   <CommonSection  title={title}></CommonSection>
      <div className='grid md:grid-cols-2 p-5 sm:p-10 lg:px-28 sm:h-[60vh] w-full'>
        {/* Image Section */}
      <div className='w-full flex justify-between mb-4'>
        <div className='w-1/6'>
         <div className='flex-col h-full gap-y-4'>
           <div className={`h-2/6 flex items-center justify-center rounded-sm w-full ${activeImage === 1 ? "border border-red-400 ": ""}`} onClick={() => {setActiveImage(1) ; setShowcaseImage(image01)}}>
            <img src={image01} alt={title} className="w-[100px] object-contain cursor-pointer"/>
           </div>
           <div className={`h-2/6 flex items-center justify-center rounded-sm w-full ${activeImage === 2 ? "border border-red-400 ": ""}`}  onClick={() =>{ setActiveImage(2) ;setShowcaseImage(image02)}}>
           <img src={image02} alt={title}  className="w-[100px] object-contain cursor-pointer"/>
           </div>
           <div className={`h-2/6 flex items-center justify-center rounded-sm w-full ${activeImage === 3 ? "border border-red-400 ": ""}`}  onClick={() => {setActiveImage(3) ; setShowcaseImage(image03)}}>
           <img src={image03} alt={title}  className="w-[100px] object-contain cursor-pointer"/>
           </div>
         </div>
        </div>

        <div className='w-4/6 flex items-center justify-center h-full  rounded-md '>
          <img src={ showcaseImage } alt='image001' className='w-[90%] h-[90%] object-contain' />
        </div>
        
      </div>

      {/* Products Details section */}
      <div className='flex flex-col gap-y-1'>
        <h3 className='md:text-xl text-md font-bold'>{title}</h3>
        {/* <h3 className='md:text-xl text-sm font-semibold text-slate-500'>Category:{category}</h3> */}
        <span className='flex gap-x-1'>{<> 
         <strike className='md:text-lg text-sm font-semibold text-orange-700'>₦{<>{price + 1000}</>}</strike> <p className='md:text-lg text-sm font-semibold'>₦{price.toLocaleString()}</p> 
        </>}</span>
        <p className='flex gap-x-1 items-center'>{ [...Array(5)].map((_ , i) => (
           <span className='flex items-center'> {rating > i ? <IoMdStar className=' text-yellow-400' /> : <IoMdStarOutline className=' text-slate-700' />  }  </span> 
         ))
         }<span className='text-slate-500 text-xs flex items-center'> {Math.ceil(Math.random()*50)} (users rating)</span> </p>

         <div className='flex flex-col items-center gap-x-2 text-sm my-2 underline-offset-2'>
         <div className='flex w-full gap-x-2 md:text-md text-sm'>
         <p className={`cursor-pointer ${showDescription === 'desc' ? "font-semibold text-orange-700 underline" : "" }`} onClick={() =>setShowDescription("desc")}>Description</p>  <p className={`cursor-pointer  ${showDescription === 'reviews' ? "font-semibold text-orange-700 underline" : "" } `} onClick={() =>setShowDescription("reviews")} >Reviews</p>
         </div>

          <>{ 
         showDescription === "desc" ? (<div className='flex flex-col gap-x-1 py-1 mb-1'>
           <p className='text-[14px] tracking-wide'>{desc}</p>
          <div className='sm:flex justify-between'>
         <div>  
        <p className='font-semibold my-1  text-md'>Select size</p> 

        <div className='flex gap-y-1 sm:gap-y-0  gap-x-1 text-xs items-center'> 

        <span onClick={() => setSize("small")} className={`rounded-lg p-2 border border-slate-300 shadow-md cursor-pointer  ${showSize === 'small' ? "border-slate-600 border-2" : "" }`}>Small</span>
        <span  onClick={() => setSize("medium")} className={`rounded-lg p-2 border border-slate-300 shadow-md cursor-pointer ${showSize === 'medium' ? "border-slate-600 border-2" : "" } `}>Medium</span>
        <span   onClick={() => setSize("large")} className={`rounded-lg p-2  border border-slate-300 shadow-md cursor-pointer ${showSize === 'large' ? "border-slate-600 border-2" : "" } `}>Large</span>

         </div>
        </div>
         <div className='flex flex-col sm:justify-center sm:px-8'> <span className='font-semibold text-md my-1 w-full flex'>Quantity</span> <span className='flex gap-y-1 sm:gap-y-0 gap-x-1 items-center'>
          <span className='font-semibold flex items-center gap-x-2'>
           <span className='border rounded-full border-slate-300 p-2'> <HiMinus /> </span>
           <span>{quantity}</span>
           <span className='border rounded-full border-slate-300 p-2'> <HiPlus />  </span>
          </span>
          </span>
           </div>
          </div>
        </div>) :
         (<div className='w-full flex'>
          Reviews
          </div>)
        } </>
         </div>
         
      </div>
      
      </div>


    </motion.div>
  )
}

export default FoodDetails