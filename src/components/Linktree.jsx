import React from 'react'
import slack from '../assets/slack.png'
import github from '../assets/github.png'
import { Link } from 'react-router-dom'

const linktree = () => {
  return (
    <div className=' flex flex-col w-full h-screen justify-center items-center text-[black] px-4 md:px-20 sm:px-10'>
        <div className='w-full grid grid-col-12'>
            <a className='py-3 bg-gray-200 rounded-lg my-3 text-center hover:bg-gray-300' href="https://twitter.com/Tech__Goddess?t=OQ9_Ywu9MShqvLcxRs41dw&s=09" target="_blank" rel="noopener noreferrer"> My Twitter</a>
            <a className='py-3 bg-gray-200 rounded-lg my-3 text-center hover:bg-gray-300' href="https://books.zuri.team/" id='btn__zuri' target="_blank" rel="noopener noreferrer">Zuri Family</a>
            <a className='py-3 bg-gray-200 rounded-lg my-3 text-center hover:bg-gray-300' href="https://books.zuri.team" id='books' target="_blank" rel="noopener noreferrer">Zuri's BookShelf</a>
            <a className='py-3 bg-gray-200 rounded-lg my-3 text-center hover:bg-gray-300' href="https://books.zuri.team/" id='book_python target="_blank" rel="noopener noreferrer"'>Python</a>
            <a className='py-3 bg-gray-200 rounded-lg my-3 text-center hover:bg-gray-300' href="https://background.zuri.team" id='pitch' target="_blank" rel="noopener noreferrer">Zuri Background</a>
            <a className='py-3 bg-gray-200 rounded-lg my-3 text-center hover:bg-gray-300' href="https://books.zuri.team/design-rules" id='book__design' target="_blank" rel="noopener noreferrer"> UI/UX </a> 
            <a className='py-3 bg-gray-200 rounded-lg my-3 text-center hover:bg-gray-300' href="/contact" id='contact' target="_blank" rel="noopener noreferrer"> <Link to="/Contact">Contact Me</Link> </a> 
        </div>
        <div className='flex justify-between py-10'>
          <a href="https://hng9.slack.com/"><img src={slack} alt="slack" className='px-6' /></a>
          <a href="https://github.com/TheTechGoddess"><img src={github} alt="github" className='px-6' /></a>
          </div>
        <hr className='w-full border-gray-200 border-1' />
    </div>
  )
}

export default linktree