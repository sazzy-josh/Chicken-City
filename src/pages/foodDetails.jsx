import React, { useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import CommonSection from '../components/commonSection'
import { useParams } from 'react-router-dom'
import products from '../components/assets/fake-data/products'



const FoodDetails = () => {
  const { id }= useParams()

  const foodDetails = products.find((item) => {
    return item.id === id    
  })

   const { image01 , image02, image03, quantity , category , rating , price , title } = foodDetails

   
    const [ showcaseImage  , setShowcaseImage] = useState(image01)
    const [ activeImage  , setActiveImage] = useState(1)
    
    // useEffect(() => {
      
    //   const setImage = () => {
    //     setShowcaseImage()
    //   }
    //   return () => {
        
    //   };
    // }, [showcaseImage]);
    

    console.log(foodDetails)

  return (
    <motion.div>
   <CommonSection  title={title}></CommonSection>
      <div className='grid md:grid-cols-2 p-5 sm:p-10 lg:px-28 h-[60vh] w-full'>
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
      <div>2</div>

      </div>


    </motion.div>
  )
}

export default FoodDetails