import React from 'react'

const CommonSection = (props) => {
  return (
    <div className='common-section font-bold flex items-center md:text-[32px] text-[28px] p-5 sm:p-10 lg:px-28'>
      <p className='text-white opacity-1'>{props.title}</p>
    </div>
  )
}

export default CommonSection