import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'

const Navbar = () => {

const {aToken} = useContext(AdminContext)

  return (
    <div>
      <div>
        <img src={assets.admin_logo} alt="" />
        <p>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default Navbar
