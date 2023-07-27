import React from 'react'
import Products from './Products'
import { HPimg } from '../assets'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import heroMain from '../assets/headphones_a_1.webp'
import { Products as data } from '../data'
import { Link } from 'react-router-dom'

function Content() {
  return (
    <>
      <div>
        <div className='h-screen m-3 '>
          <div className='p-3 rounded-lg bg-gray-800 bg-opacity-25 md:flex md:flex-row md:justify-between relative'>
            <div className='px-10 flex flex-col h-full md:py-32'>
              <p className='sm:text-lg lg:text-xl'>Beats solo</p>
              <p className='sm:text-3xl lg:text-5xl font-bold '>Wireless</p>
              <h3
                className='sm:text-5xl
            text-4xl font-bold lg:text-9xl text-white uppercase'
              >
                Headphone
              </h3>
              <Link to={'/ProductInfo'}>
                <button
                  className='p-1.5 m-2
            text-xs font-bold  sm:text-xs lg:text-xl  mt-4 bg-red-600 w-fit rounded-xl text-white'
                  onClick={() => {
                    localStorage.setItem('Product', JSON.stringify(data[1]))
                    console.log(localStorage.getItem('Product'))
                  }}
                >
                  Shop wireless headphone
                </button>
              </Link>
            </div>
            <div classNamex=''>
              <img
                src={heroMain}
                className='sm:w-72 md:w-full w-52 right-0 relative'
                alt=''
              />
              <div className='relative sm:mt-16 md:-mt-10 '>
                <h4 className=' text-blue-950 text-opacity-80 font-bold capitalize text-lg '>
                  description
                </h4>
                <p className=' text-end text-opacity-50 text-black me-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis recusandae optio cupiditate dignissimos! Error
                  recusandae, consequatur aut voluptatem tenetur dignissimos?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex justify-center flex-col items-center my-5'>
          <h2 className=' text-blue-950 text-5xl font-bold'>
            Best seller Products
          </h2>
          <p className=' text-xl text-gray-500 text-opacity-80'>
            speaker There are many variations passages
          </p>
        </div>
        <div className=' flex flex-row'>
          <div className=' flex flex-wrap justify-around gap-1 mx-3'>
            <Products />
          </div>
        </div>
      </div>
      <div className=' '>
        <div className='my-10 px-3 py-10 m-3 bg-red-600  rounded-2xl h-full grid lg:grid-cols-3 grid-cols-2  text-white'>
          <div className=' flex flex-col justify-around'>
            <p className=' text-xl'>20% off</p>
            <h3 className=' text-6xl font-bold'>
              FINE <br /> SMILE
            </h3>
            <p className=' text-xl'>15 Nov to 7 dec</p>
          </div>
          <div className='relative w-custom -start-16 -top-16'>
            <img className=' absolute ' src={HPimg} sizes='xl' alt='' />
          </div>
          <div className=' flex flex-col justify-around'>
            <p className=' text-xl'>Beats Solo Air</p>
            <h3 className='text-6xl font-bold'>
              Summer <br />
              Sale
            </h3>
            <p className='text-l'>
              company that's grown from 270 to 480 employees in the last 12
              months.
            </p>
            <div>
              <Link to={'./ProductInfo'}>
                <button
                  className='p-2 text-l bg-white my-4 rounded-2xl text-red-600 font-semibold'
                  onClick={() => {
                    localStorage.setItem('Product', JSON.stringify(data[3]))
                    console.log(localStorage.getItem('Product'))
                  }}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='my-3 flex justify-center items-center mt-40 flex-col font-bold text-blue-950 text-opacity-80'>
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
    </>
  )
}

export default Content
