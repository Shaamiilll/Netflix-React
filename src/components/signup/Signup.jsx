import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext' // Import useAuth instead of userAuth

const Signup = () => {
    const [rememberLogin, setRememberLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const { user, signUp } = useAuth() // Use useAuth instead of userAuth
    const navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }



    return (
    <div className='w-full h-screen'>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="signup"
                />

                <div className='bg-black/70 fixed top-0 left-0 w-full h-full' />
                <div className='fixed w-full px-4 py-24 z-20'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/60 rounded-lg'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-nsans-bold'>Sign Up</h1>
                            <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
                                <input
                                    className='p-3 my-2 bg-gray-700 opacity-50 rounded'
                                    type="email"
                                    placeholder='email'
                                    autoComplete='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className='p-3 my-2 bg-gray-700 opacity-50 rounded '
                                    type="password"
                                    placeholder='password'
                                    autoComplete='current-password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className='bg-red-600 py-3 my-6 rounded'>Sign Up</button>
                                <div className='flex justify-between items-center text-gray-400 checkbox-container'>
                                    <p> <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)} /> remember Me</p>
                                    <p>Need Help?</p>
                                </div>

                                <p className='my-4  text-gray-400'>
                                    <span className='mr-1'>Already subscribed to Netflix?</span>
                                    <Link to='/login' className='underline'>Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Signup