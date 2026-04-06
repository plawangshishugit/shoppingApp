import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum hic maiores 
                    libero minus adipisci earum quibusdam! Nisi illo rem reprehenderit error tenetur iure optio, 
                    laudantium quisquam odit nemo minus?
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    COMPANY
                </p>
                <ul flex flex-col gap-1 text-gray-600>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul flex flex-col gap-1 text-gray-600>
                    <li>+91 1234567890</li>
                    <li>contact.goldenweft@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026@goldenweft.com - All Rights Reserverd.</p>
        </div>
    </div>
  )
}

export default Footer