import React from 'react'
import {BsBag} from 'react-icons/bs'
const NavBar = ({setShowCart}) => {
  return (
    <div>
      <div className='flex flex-row justify-between p-4 items-center'>
        <a href="/"><h1 className='text-gray-500 uppercase text-lg'>PHANOX </h1></a>
        <div className=' hover:scale-125 transition-all ease-in-out duration-500 relative cursor-pointer' onClick={()=>setShowCart(true)}>
          <BsBag size={20} color='gray' />{' '}
          <div className=' px-1 text-xs rounded-full absolute -me-1 -mt-1 top-0 right-0 bg-red-600 text-white'>
            {'0'}
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar
