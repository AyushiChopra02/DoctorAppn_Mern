import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams, useNavigate } from 'react-router-dom'
const Doctors = () => {

  const { speciality } = useParams()
  // console.log(speciality)
const [filterDoc,setFilterDoc] = useState([])
  const {doctors}= useContext(AppContext)
const navigate = useNavigate()


  const applyFilter = () => {
  if(speciality){
    setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
  }else{
    setFilterDoc(doctors)
  }
  }
  useEffect(()=>{
applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filterDoc.map((item, index) => (
    <div 
      onClick={() => navigate(`/appointment/${item._id}`)}
      key={index}
      className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[5px] transition-transform duration-300"
    >
      {/* Doctor Image */}
      <img
        className="w-full h-64 object-cover object-top bg-blue-50"
        src={item.image}
        alt={item.name}
      />

      {/* Doctor Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-green-500">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <p>Available</p>
        </div>
        <p className="font-semibold mt-2">{item.name}</p>
        <p className="text-gray-600">{item.speciality}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  )
}

export default Doctors
