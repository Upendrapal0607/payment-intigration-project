import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='w-full py-4 px-4 flex justify-between items-center bg-slate-700'>
        <Link to="/" className='text-green-600'>Payment</Link>
        <Link to='/cart' className='px-6 rounded-sm py-2 bg-slate-900 text-white cursor-pointer'>CART</Link>
    </nav>
  )
}
