import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser } from '../Redux/userSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)

    const clickHandler = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between' >
    <img className='w-48 px-2 mx-12'
    alt='logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
    { user && <div className='flex justify-center'>
        <p className='text-white font-bold pt-5'>Hi, {user.displayName}</p>
        <img alt='userIcon' src={user.photoURL} className='h-8 px-4 my-5'/>
        <button className='px-4 text-yellow-400 font-bold' onClick={clickHandler}>Sign Out</button>
    </div>}
    </div>
  )
}

export default Header