'use client'

import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { Users } from 'lucide-react'

const page = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch(activeTab) {
            case 'profile':
                return (
                    <div className='col-span-2 bg-white p-10 rounded-lg w-full'>
                <h1>Profile Information</h1>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <input type='text' placeholder='First Name' className='border border-gray-300 rounded-lg p-2 w-full mb-5'/>
                    <input type='text' placeholder='Last Name' className='border border-gray-300 rounded-lg p-2 w-full mb-5'/>
                </div>
                <div>
                    <input type='text' placeholder='Email' className='border border-gray-300 rounded-lg p-2 w-full mb-5'/>
                    <input type='number' placeholder='Phone Number' className='border border-gray-300 rounded-lg p-2 w-full mb-5'/>
                    <textarea placeholder='Tell us about yourself' className='border border-gray-300 rounded-lg p-2 w-full mb-5'/>
                    <button>Save Changes</button>
                </div>
            </div>
                );
                case 'orders':
                    return (
                        <div>orders</div>
                    );
                
                case 'wishlist':
                    return (
                        <div>wishlist</div>
                    );
                case 'addresses':
                    return (
                        <div>addresses</div>
                    );
                case 'payment':
                    return (
                        <div>payment</div>
                    );
                case 'settings':
                    return (
                        <div>settings</div>
                    )
                    default:
                        return null;
        }    
    }
    
  return (
    <>
    <Navbar/>
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex flex-col justify-start gap-5 m-10'>
            <h1 className='text-4xl bg-clip-text text-transparent bg-purple-600 font-bold'>My Account</h1>
            <p className='text-xl text-gray-500'>Manage your account settings and preferences</p>
        </div>

        <div className='grid grid-cols-3 gap-10 justify-items-center items-center m-10 pt-8 '>
            <div className='bg-white p-10 rounded-lg flex flex-col justify-center items-center gap-3 w-full shadow-xl'>
                <h1 className='bg-gradient-to-br from-purple-700 to-blue-700 text-white w-max p-6 rounded-full'><Users size={40} /></h1>
                <h1 className='font-bold text-2xl'>John Doe</h1>
                <p className='text-gray-500 '>john.doe@gmail.com</p>
                    <div className='flex flex-col justify-start gap-1 mt-5 w-full'>
                        <button onClick={() => setActiveTab('profile')} className='text-start cursor-pointer text-lg font-semibold hover:bg-black hover:text-white hover:font-bold hover:rounded-lg p-2 px-9'>Profile</button>
                        <button onClick={() => setActiveTab('orders')} className='text-start cursor-pointer text-lg font-semibold hover:bg-black hover:text-white hover:font-bold hover:rounded-lg p-2 px-9'>Orders</button>
                        <button onClick={() => setActiveTab('wishlist')} className='text-start cursor-pointer text-lg font-semibold hover:bg-black hover:text-white hover:font-bold hover:rounded-lg p-2 px-9'>Wishlist</button>
                        <button onClick={() => setActiveTab('addresses')} className='text-start cursor-pointer text-lg font-semibold hover:bg-black hover:text-white hover:font-bold hover:rounded-lg p-2 px-9'>Addresses</button>
                        <button onClick={() => setActiveTab('payment')} className='text-start cursor-pointer text-lg font-semibold hover:bg-black hover:text-white hover:font-bold hover:rounded-lg p-2 px-9'>Payment</button>
                        <button onClick={() => setActiveTab('settings')} className='text-start cursor-pointer text-lg font-semibold hover:bg-black hover:text-white hover:font-bold hover:rounded-lg p-2 px-9'>Settings</button>
                    </div>
            </div>
            {renderContent()}
        </div>
    </div>
    </>
  )
}

export default page;