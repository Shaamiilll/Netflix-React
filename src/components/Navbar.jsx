import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async ()=> {
     try {
        await logOut()
        navigate('/')
     } catch (error) {
        console.log("Error While Logout");
     }
    }
    return (
        <div className='absolute w-full p-4 flex items-center justify-between z-50'>
            <Link to='/'>
                <img className='h-9 cursor-pointer m-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            </Link>

            {
                user?.email ? (
                    <div>
                        <Link to='/profile'>
                            <button className='py-2 cursor-pointer px-6 rounded mr-3'>Profile</button>
                        </Link>
                        
                            <button onClick={handleLogout} className='bg-red-600 px-6 cursor-pointer py-2 rounded'>Logout</button>
                     

                    </div>
                ) :
                    (
                        <div>
                            <Link to='/login'>
                                <button className='py-2 cursor-pointer px-6 rounded mr-3'>login</button>
                            </Link>
                            <Link to='/signup'>
                                <button className='bg-red-600 px-6 cursor-pointer py-2 rounded'>Sign up</button>
                            </Link>

                        </div>
                    )
            }
        </div>
    )
}

export default Navbar