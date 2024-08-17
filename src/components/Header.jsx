import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, USER_URL } from '../utils/config';

const Header = () => {
  const data = useSelector((store)=>store.user.users);
  const dispatch = useDispatch();
  const toggle = data.length!==0 ? true : false
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/')
  }
  return (
    <div className='flex flex-row justify-between px-10 py-5 bg-gradient-to-b from-gray-800'>
      <img src={LOGO_URL} alt='logo' className='w-36'/>
      {toggle && (<div className='flex flex-row gap-5'>
        <img src={USER_URL}
        height={50} width={50} alt="userIcon"/>
        <button className='p-3 px-6 text-white bg-red-700 rounded-md font-bold' onClick={handleLogout}>Sign out</button>
      </div>)}
    </div>
  )
}

export default Header