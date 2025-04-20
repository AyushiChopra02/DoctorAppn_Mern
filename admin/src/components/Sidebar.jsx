import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom'; // ✅ Correct import

import { AdminContext } from '../context/AdminContext';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          {/* <NavLink to={'/admin-dashboard'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink> */}

          <NavLink to={'/all-appointments'}>
            <img src={assets.add_icon} alt="" />
            <p>All Appointments</p>
          </NavLink>

          <NavLink to={'/add-doctor'}>
            <img src={assets.people_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink to={'/doctor-list'}>
            <img src={assets.people_icon} alt="" />
            <p>Doctor's List</p>
          </NavLink>

        </ul>
      }
    </div>
  );
};

export default Sidebar;
