import React from 'react'
import { Heart, UserRoundPen, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className=''>
        <div className='flex flex-row p-3'>
            <h1 className="text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-l from-purple-600 to-blue-600 ml-5">StyleHub</h1>
            <ul className='flex flex-row gap-15 ml-10 text-black font-bold justify-center items-center'>
                <li className='hover:text-purple-600 cursor-pointer'>Home</li>
                <li className='hover:text-purple-600 cursor-pointer'>Categories</li>
                <li className='hover:text-purple-600 cursor-pointer'>Deals</li>
                <li className='hover:text-purple-600 cursor-pointer'>About</li>
                <li><input type='search' placeholder='Search products...' className='ml-15 placeholder:text-center border border-gray-300 rounded-xl' /></li>
            </ul>
            <div className='flex flex-row justify-end items-center ml-40 gap-5 text-black font-bold'>
                <ul className='flex flex-row gap-10'>
                    <li className='hover:text-purple-600 cursor-pointer'><Heart /></li>
                    <a href='/profile'>
                    <li className='hover:text-purple-600 cursor-pointer'><UserRoundPen /></li>
                    </a>
                    <li className='hover:text-purple-600 cursor-pointer'><ShoppingCart /></li>
                </ul>
            </div>


        </div>
    </div>
  )
}

export default Navbar;