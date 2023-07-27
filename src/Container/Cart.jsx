import React, { useState } from 'react'
import { BsArrowBarRight } from 'react-icons/bs'
import { SB } from '../assets'
import { AiOutlineCloseCircle, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const show = 'fixed w-screen h-screen z-50 '
const hide = 'fixed w-screen h-screen z-50 hidden'

function Cart({ setShowCart, showCart }) {
  const [productCount, setProductCount] = useState(0)
  const [item,setItem]=useState(false)
  return (
    <div className={showCart ? show : hide}>
      <div className=' end-0 w-2/5 bg-white h-screen absolute z-10'>
        <div
          onClick={() => setShowCart(false)}
          className='m-3 mt-10 flex cursor-pointer'
        >
          <BsArrowBarRight size={25} />
          <p className=' text-xl font-semibold ms-3'>Your cart</p>{' '}
          <span className=' text-lg text-red-600 font-semibold ms-3'>{`(${'0 '}items)`}</span>
        </div>
        {item ? (
          <div className='flex flex-col m-10 h-full'>
            <div className='product h-3/5 overflow-y-scroll'>
              <ul>
                <li className='w-full h-40  rounded-2xl p-2 flex '>
                  <img
                    src={SB}
                    className='rounded-xl h-full bg-gray-300'
                    alt=''
                  />
                  <div className=' p-2 w-full flex flex-col justify-between'>
                    <div className=' text-blue-950 opacity-80 text-2xl font-bold flex justify-between w-full'>
                      <h2>product name</h2>
                      <p>${'50'}</p>
                    </div>
                    <div className='flex justify-between items-baseline'>
                      <div className='flex'>
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
                      <div className=' text-red-600 cursor-pointer '>
                        <AiOutlineCloseCircle size={20} />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='flex justify-between text-xl font-bold '>
              <p>Subtotal:</p>
              <p>${'50'}</p>
            </div>
            <button
              type='button'
              className='border py-2 px-24 uppercase m-2 bg-red-500 hover:bg-red-600 text-white text-2xl rounded-2xl'
            >
              Pay With Strip
            </button>
          </div>
        ) : (
          <div className='flex flex-col justify-center h-max items-center'>
            <img src={SB} alt='Shopping bag' />
            <h2 className=' font-semibold text-xl m-5 capitalize'>
              your shopping bag is empty
            </h2>
            <button
              type='button'
              onClick={() => setShowCart(false)}
              className='border py-2 px-24 uppercase m-2 bg-red-500 hover:bg-red-600 text-white text-2xl rounded-2xl'
            >
              Shop Items
            </button>
          </div>
        )}
      </div>
      <div
        className='w-full h-full bg-black opacity-40 relative'
        onClick={() => setShowCart(false)}
      ></div>
    </div>
  )
}

export default Cart
