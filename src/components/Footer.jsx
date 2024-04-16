import React from 'react';
import { FaPen } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='m-10 '>
      <div className="flex gap-4 flex-column">
        <a href="#" className="ml-20 font-bold ">Reviews</a>
        <a href="#" className="ml-5 font-bold">Questions</a>
      </div>
    
      <hr className="my-1 border-black " />

      <div className="text-center">
        <p className="flex items-center justify-center p-2 m-2 text-gray-400">No reviews yet, write one now?</p>
        <div className='flex justify-center'>
        <button className="flex items-center justify-center px-4 py-2 text-white bg-black border-2 border-black rounded hover:bg-white hover:text-black">
          <FaPen className="mr-2 text-xs" />
          <span className='text-sm'>WRITE A REVIEW</span>
        </button>
        </div>
      </div>

      <hr className="my-4 border-t border-black"/>
    </div>
  )
}

export default Footer;
