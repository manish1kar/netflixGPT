import React, { useRef, useState } from 'react'
import { formValidation } from '../utils/formValidation';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/userSlice';



const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignIn, setSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null)

    const email = useRef();
    const password = useRef();
    const name = useRef();


    const toggleSingIn = () => {
        setSignIn(!isSignIn);
    }

    const clickHandler = () => {
        const valid = formValidation(email.current.value, password.current.value);
        setErrorMsg(valid)
        if(valid !== null ) return;

        if(!isSignIn) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
             // Signed up 
             const user = userCredential.user;
             updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              }).then(() => {
                const {email, displayName, uid, photoURL } = auth.currentUser;
                dispatch(addUser({
                    email : email,
                    displayName : displayName,
                    uid : uid,
                    photoURL : photoURL
                }))
                navigate("/browse") 
              }).catch((error) => {
                // An error occurred
                // ...
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + "-" + errorMessage )
        });
    }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + "-" + errorMessage )
            });
    }

 }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img alt='bg' src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
        <form onSubmit={(e)=> e.preventDefault() } className='p-12 bg-black w-4/12 absolute m-auto left-0 right-0 my-16 text-white rounded-lg bg-opacity-85'>
            <p className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</p>
            {           
            !isSignIn && 
            <input type='text' ref={name} placeholder='Full Name' className='bg-black border border-gray-700 p-4 my-3 w-full rounded-lg'/>
            }
           <input type='text' ref={email} placeholder='Email' className='bg-black border border-gray-700 p-4 my-3 w-full rounded-lg'/>
            <input type='password' ref={password} placeholder='Password' className='bg-black border border-gray-700  p-4 my-2 w-full rounded-lg'/>
            <p className='font-bold text-red-700'>{errorMsg}</p>
            <button onClick={clickHandler} className='bg-red-700 p-2 my-4 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            {isSignIn && <p className='text-center'>Forgot password?</p>}
            <div className='py-4'>
            {isSignIn && <div><input type='checkbox'/><label className='px-3'>Remember me</label></div>}
            </div>
            <div>
            {isSignIn && <span className='text-gray-400'>New to Netflix? </span>}
            <span onClick={toggleSingIn} className='cursor-pointer'>{isSignIn ? "Sign Up now." : "Sign In now."}</span>
            </div>
            <p className='text-gray-400 py-2'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </p>
            
        </form>
    </div>
  )
}

export default Login