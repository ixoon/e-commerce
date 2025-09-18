import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900'>
        <div className='grid grid-cols-1 justify-items-center items-center '>
            <div>
                <h1 className='bg-clip-text text-transparent bg-amber-400 font-bold text-3xl mt-9 text-center'>Stay in the Loop</h1>
                <p className='text-white mt-3 w-150 mx-auto'>Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.</p>
                <div className='flex flex-row justify-center items-center gap-2 mt-5'>
                    <input type='text' placeholder='Enter you email' className='text-white placeholder:text-gray-500 border rounded-lg placeholder:text-center w-sm p-2'/>
                    <button className='bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-800 hover:to-orange-600'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-4 justify-items-center items-start mt-20 p-8 gap-10'>
            <div className="h-full flex flex-col justify-start">
                <h1 className='bg-clip-text text-transparent text-3xl bg-gradient-to-r from-purple-400 to-blue-400 font-bold'><span className='px-3 py-2 text-lg bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold rounded-xl m-2'>S</span>StyleHub</h1>
                <p className='text-gray-300 mt-3'>Your premium destination for quality products that elevate your lifestyle. We curate the best items to help you express your unique style.</p>
                <div>
                    <ul className='flex flex-row gap-5 mt-5 text-white'>
                        <li className='hover:bg-gray-400 p-2 rounded-lg cursor-pointer'><Facebook size={25} /></li>
                        <li className='hover:bg-gray-400 p-2 rounded-lg cursor-pointer'><Twitter size={25}/></li>
                        <li className='hover:bg-gray-400 p-2 rounded-lg cursor-pointer'><Instagram size={25}/></li>
                        <li className='hover:bg-gray-400 p-2 rounded-lg cursor-pointer'><Youtube size={25}/></li>
                    </ul>
                </div>
            </div>

            <div className="h-full flex flex-col justify-start">
                <h1 className='text-white font-bold text-2xl'>Quick Links</h1>
                <ul className='text-gray-300 mt-3 cursor-pointer'>
                    <li className='hover:underline mb-2'>About Us</li>
                    <li className='hover:underline mb-2'>Contact</li>
                    <li className='hover:underline mb-2'>FAQ</li>
                    <li className='hover:underline mb-2'>Shipping info</li>
                    <li className='hover:underline mb-2'>Size Guide</li>
                </ul>
            </div>

            <div className="h-full flex flex-col justify-start">
                <h1 className='text-white font-bold text-2xl'>Categories</h1>
                <ul className='text-gray-300 mt-3 cursor-pointer'>
                    <li className='hover:underline mb-2'>Electronics</li>
                    <li className='hover:underline mb-2'>Audio</li>
                    <li className='hover:underline mb-2'>Home & Living</li>
                    <li className='hover:underline mb-2'>Fashion</li>
                    <li className='hover:underline mb-2'>Sports & Fitness</li>
                    <li className='hover:underline mb-2'>Travel</li>
                </ul>
            </div>

            <div className="h-full flex flex-col justify-start">
                <h1 className='text-white text-2xl font-bold'>Get in Touch</h1>
                <ul className='text-gray-300 mt-3 cursor-pointer mb-5'>
                    <li className='hover:underline mb-2'>123 Style Street, Fashion District, NY 10001</li>
                    <li className='hover:underline mb-2'>+1 (555) 123-4567</li>
                    <li className='hover:underline mb-2'>hello@stylehub.com</li>
                </ul>
                <div className='border-2 rounded-xl p-3 border-gray-300 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 cursor-pointer'>
                    <h1 className='text-white font-bold'>Customer Support</h1>
                    <p className='mt-3 text-gray-300'>Available 24/7 to help you with any questions or concerns.</p>
                </div>
            </div>
        </div>
        <div className='px-5'>
            <h1 className='text-white font-semibold'>Made with heart by Isak❤️2025</h1>
        </div>
    </div>
  )
}

export default Footer;
