import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../redux/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constants';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)

    const clickHandler = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , displayName, email, photoURL} = user;
          dispatch(addUser({
            uid:uid,
            displayName:displayName,
            email:email,
            photoURL:photoURL,
          }))
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
        return () => unsubscribe();
      });
    }, []);

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between' >
    <img className='w-48 px-2 mx-12'
    alt='logo' src={LOGO}/>
    { user && <div className='flex justify-center'>
        <p className='text-white font-bold pt-5'>Hi, {user.displayName}</p>
        <img alt='userIcon' src={user.photoURL} className='h-8 px-4 my-5'/>
        <button className='px-4 text-yellow-400 font-bold' onClick={clickHandler}>Sign Out</button>
    </div>}
    </div>
  )
}

export default Header