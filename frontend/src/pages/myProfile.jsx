
import React, {useState} from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "edward",
    image: assets.profile_pic,
    email: 'richard@gmail.com',
    phone: '+1-22-345-3421',
   
    city: 'New York',
    gender: 'Male',
    dob: '2000-01-01',
  })
  const [edit, setEdit] = useState(false)
  return(
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit
        ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} />
        : <p>{userData.name}</p>
      }
    </div>
  )
}