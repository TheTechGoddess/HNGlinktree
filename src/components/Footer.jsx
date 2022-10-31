import React from 'react'
import vector from '../assets/vector.png'
import I4G from '../assets/I4G.jpg'

const Footer = () => {
  return (
    <div className='sm:flex w-full justify-start sm:justify-between text-[black] px-4 md:px-20 sm:px-10' style={{marginTop: '-40px'}}>
      <div className='flex justify-start mb-3'>
        <h2 className='text-lg font-bold pr-1'>Zuri</h2>
        <p className='mt-3'><img src={vector} alt="" /></p>
        <h2 className='text-lg font-bold pl-1'>Internship</h2>
      </div>
      <div className='mb-3 text-gray-500'>
        HNG Internship 9 Frontend Task
        </div>
      <div className='mb-10'>
        <img src={I4G} alt="I4g" style={{width : '100px'}} />
      </div>
      

    </div>
  )
}

export default Footer