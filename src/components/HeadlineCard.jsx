import React from 'react'

const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 text-white rounded-xl '>
                <p className='font-bold text-5xl px-2 pt-4 flex justify-center mt-10'>
                    suns out when eats
                </p>
                <p className='px-2 flex justify-center text-3xl'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-2 '>Order Now</button>
            </div>
            <img className='w-full object-cover rounded-xl' src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCard