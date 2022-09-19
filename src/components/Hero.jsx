import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
      <div className='max-h-[500px] relative'>
      {/* overlay */}
        <div className='absolute w-full h-full text-white max-h-[500px] bg-black/70 flex flex-col justify-center'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-orange-600'>Delivered</span></h1>
          
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=pexels-ray-piedra-1565982.jpg&fm=jpg" alt="" />
        </div>
    </div>
  )
} 

export default Hero