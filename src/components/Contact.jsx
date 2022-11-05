import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col w-full h-screen text-[#101828] mt-20 px-4 md:px-20 sm:px-10 mb-36'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold'>Contact Me</h1>
        <p className='text-gray-500 mt-2'>Hi there, Contact me to ask about anything you have in mind</p>
      </div>
     
      <div className='mt-10'>
        <form action="" className='flex flex-col'>

          <div className='md:flex w-full md:justify-between'>
            <div className='md:w-[48%]'>
              <label htmlFor="">First Name</label>
              <input type="text" name="" id="first_name" placeholder='Enter your first name' className='w-full block py-2 px-3 border border-gray-300 border-1 bg-white rounded-lg mb-4 mt-3' />
            </div>
            <div className='md:w-[48%]'>
              <label htmlFor="" > Last Name</label>
              <input type="text" name="" id="last_name" placeholder='Enter your last name' className='w-full block py-2 px-3 border border-gray-300 border-1 bg-white rounded-lg mb-4 mt-3'  />
            </div>
            
          </div>
          
          <label htmlFor="" className='mb-3'>Email </label>
          <input type="email" name="" id="email" placeholder='yourname@email.com' className='w-full block py-2 px-3 border border-gray-300 border-1 bg-white rounded-lg mb-4'  />
          <label htmlFor="" className='mb-3'>Message </label>
          <textarea name="" id="message" cols="5" rows="5" placeholder='Send a message and  I will reply you as soon as possible' className='w-full block py-2 px-3 border border-gray-300 border-1 bg-white rounded-lg mb-8' ></textarea>
          <label htmlFor="" className='mb-8'>
           <input type="checkbox" name="" id="" className='mr-3'/>
            You agree to providing your data to Favour who may contact you
            
          </label>
          <button type="submit" id='btn__submit' className='w-full block py-2 px-3 border border-gray-300 border-1 bg-[#1570EF] rounded-lg mb-6'>Send Message</button>
          
        </form>
        
      </div>
      <hr className='w-full border-gray-200 border-3 mt-16' />
 
    </div>
  )
}

export default Contact