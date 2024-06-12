import React from 'react'

const Banner = ({ icon, name}) => {
  return (
    <div className='flex flex-col items-center bg-black text-white rounded-lg shadow-md p-4 m-2 w-24 h-24'>
        {icon}
        <span className='mt-2 text-sm font-medium'>{name}</span>
    </div>
  )
}

export default Banner
