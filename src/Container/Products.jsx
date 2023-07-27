import React from 'react'
import { Products as data } from '../data'
import { Link } from 'react-router-dom'

function Products() {
  const handleSend = (e) => {
    localStorage.setItem('Product', JSON.stringify(e))
    console.log(localStorage.getItem('Product'))
  }

  const Pcard = data.map((e) => {
    return (
      <Link
        to='/ProductInfo'
        onClick={(() => document.scrollingElement(0), handleSend(e))}
      >
        <div
          key={e.id}
          className=' hover:scale-105 transition-all cursor-pointer duration-300 ease-in-out'
        >
          <div className='shadow-xl rounded-lg bg-gray-400 bg-opacity-40'>
            <img src={e.img1} alt='' width={270} />
          </div>
          <h4 className=' font-bold text-opacity-75 text-gray-600'>{e.name}</h4>
          <p className=' font-bold'>${e.price}</p>
        </div>
      </Link>
    )
  })
  return Pcard
}

export default Products
