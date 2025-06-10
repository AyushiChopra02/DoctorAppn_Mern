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
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-700'>


          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transistion-all cursor-pointer ${speciality == "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>


          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transistion-all cursor-pointer ${speciality == "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>


          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transistion-all cursor-pointer ${speciality == "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>


          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transistion-all cursor-pointer ${speciality == "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>


          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transistion-all cursor-pointer ${speciality == "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>


          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transistion-all cursor-pointer ${speciality == "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>


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
