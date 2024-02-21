import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
        <Link to='/'>
            <img className='h-9 cursor-pointer m-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        </Link>

        <div>
            <Link to='/login'>
                <button className='pr-4'>login</button>
            </Link>
            <Link to='/signup'>
                <button className='bg-red-600 px-6 cursor-pointer py-2 rounded'>Sign up</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar