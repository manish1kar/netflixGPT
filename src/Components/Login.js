import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setSignIn] = useState(true);

    const handleClick = () => {
        setSignIn(!isSignIn);
    }

  return (
    <div>
    <Header/>
        <div className='absolute'>
            <img alt='bg' src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
        <form className='p-12 bg-black w-4/12 absolute m-auto left-0 right-0 my-16 text-white rounded-lg bg-opacity-85'>
            <p className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</p>
            {           
            !isSignIn && 
            <input type='text' placeholder='Full Name' className='bg-black border border-gray-700 p-4 my-3 w-full rounded-lg'/>
            }
           <input type='text' placeholder='Email' className='bg-black border border-gray-700 p-4 my-3 w-full rounded-lg'/>
            <input type='password' placeholder='Password' className='bg-black border border-gray-700  p-4 my-2 w-full rounded-lg'/>
            <button className='bg-red-700 p-2 my-4 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            {isSignIn && <p className='text-center'>Forgot password?</p>}
            <div className='py-4'>
            {isSignIn && <div><input type='checkbox'/><label className='px-3'>Remember me</label></div>}
            </div>
            <div>
            {!isSignIn && <span className='text-gray-400'>New to Netflix? </span>}
            <span onClick={handleClick} className='cursor-pointer'>{isSignIn ? "Sign in now." : "Sign up now."}</span>
            </div>
            <p className='text-gray-400 py-2'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </p>
            
        </form>
    </div>
  )
}

export default Login