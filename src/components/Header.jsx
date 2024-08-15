import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

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
      <img src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png' alt='logo' className='w-36'/>
      {toggle && (<div className='flex flex-row gap-5'>
        <img src='https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcuxbtj2tfVL-r6pmFXXfScNXsq6-4SUhH4C3fWgEryD5jFX5nNyCKI9XrFpINPeOcthGqFJ78s_C2MTwV3rg3MYKPKO0HA.png?r=19c'
        height={50} width={50} alt="userIcon"/>
        <button className='p-3 px-6 text-white bg-red-700 rounded-md font-bold' onClick={handleLogout}>Sign out</button>
      </div>)}
    </div>
  )
}

export default Header