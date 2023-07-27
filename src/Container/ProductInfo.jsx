import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import '../index.css'
import Products from './Products'
function ProductInfo() {
  const { img1, img2, img3, img4, details, name, rate, rates, price } =
    JSON.parse(localStorage.getItem('Product'))
  const [image, setImage] = useState(img1)
  const [productCount, setProductCount] = useState(0)

  return (
    <div>
      <div className='grid lg:grid-cols-3 mx-12'>
        <div className='lg:col-span-1 '>
          <img
            src={image}
            alt=''
            className='hover:bg-red-600 bg-gray-300 rounded-3xl duration-200 transition-all my-5'
          />
          <div className='flex justify-center items-center gap-2'>
            <img
              src={img1}
              onMouseEnter={() => setImage(img1)}
              width={100}
              className=' hover:scale-110 transition-all duration-200 hover:bg-red-600 bg-gray-300 rounded-lg'
              alt=''
            />
            <img
              src={img2}
              onMouseEnter={() => setImage(img2)}
              width={100}
              className=' hover:scale-110 transition-all duration-200 hover:bg-red-600 bg-gray-300 rounded-lg'
              alt=''
            />
            <img
              src={img3}
              onMouseEnter={() => setImage(img3)}
              width={100}
              className=' hover:scale-110 transition-all duration-200 hover:bg-red-600 bg-gray-300 rounded-lg'
              alt=''
            />
            <img
              src={img4}
              onMouseEnter={() => setImage(img4)}
              width={100}
              className=' hover:scale-110 transition-all duration-200 hover:bg-red-600 rounded-lg bg-gray-300'
              alt=''
            />
          </div>
        </div>
        <div className='lg:col-span-2 m-5'>
          <h2 className=' text-blue-950 text-4xl font-bold text-opacity-90 m-5'>
            {name}
          </h2>
          <p className='m-3 text-yellow-400 font-bold'>{rate} STARS</p>
          <h4 className=' font-bold text-blue-950 opacity-80'>Details:</h4>
          <p className=' font-semibold opacity-60'>{details}</p>
          <h5 className=' text-red-600 font-bold text-3xl m-5'>${price}</h5>
          <div className='flex m-5'>
            <h4 className='font-bold text-blue-950 opacity-80 text-xl me-3'>
              Quantity:
            </h4>
            <div
              onClick={() => {
                if (productCount > 0) {
                  setProductCount(productCount - 1)
                }
              }}
              className=' border w-10 h-10 flex justify-center items-center text-2xl text-red-700 cursor-pointer'
            >
              <AiOutlineMinus />
            </div>
            <div className=' border w-10 h-10 flex justify-center items-center text-2xl opacity-80 cursor-default'>
              {productCount}
            </div>
            <div
              onClick={() => setProductCount(productCount + 1)}
              className=' border w-10 h-10 flex justify-center items-center text-2xl text-green-700 cursor-pointer'
            >
              <AiOutlinePlus />
            </div>
          </div>
          <div>
            <button className=' border border-red-600 text-red-600 hover:scale-110 transition-all duration-200 m-5 w-60 h-11 font-semibold text-xl text-opacity-90'>
              Add to cart{' '}
            </button>
            <button className=' bg-red-600 text-white hover:scale-110 transition-all duration-200 m-5 w-60 h-11 font-semibold text-xl text-opacity-90'>
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className=' m-36'>
        <h3 className=' text-3xl text-blue-950 opacity-80 font-bold uppercase text-center m-10'>You may also like</h3>
        <div className='flex gap-2 flex-nowrap w-max custom-transition hover:animate-pause'>
          <Products />
        </div>
      </div>
      <div className='flex justify-center items-center mt-10 flex-col font-bold text-blue-950 text-opacity-80 my-3'>
        <h6 className=' '>© 2022 Phanox All Rights Reserved</h6>
        <div className=' flex justify-center items-center gap-1'>
          <a href=''>
            <BsTwitter size={25} />
          </a>
          <a href=''>
            <BsInstagram size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
