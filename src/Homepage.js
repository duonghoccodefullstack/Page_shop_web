import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='flex w-100vmax justify-between'> <h1 className='text-red-600'>Logo</h1>
    <nav >
      <ul className=' flex justify-between w-72'>
        
        <Link to='/'><li className='cursor-pointer'>Home</li></Link>
        <Link to='/Signup'><li className='cursor-pointer'>Signup</li></Link>
        <Link to='/Login'><li className='cursor-pointer'>Login</li></Link>
      </ul>
    </nav>
   </div>
  )
}
