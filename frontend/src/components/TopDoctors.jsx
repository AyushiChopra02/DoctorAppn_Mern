import React, { use, useCallback, useContext } from 'react';
// import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const TopDoctors = () => {
  const navigate=useNavigate()
  const { doctors } = useContext(AppContext) 
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Updated Grid for Responsive Layout */}
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 pt-5 px-3 sm:px-0">
        {/* Map through top 10 doctors */}
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
          >
            {/* Doctor Image */}
            <img className="bg-blue-50 w-full h-64 object-cover" src={item.image} alt={item.name} />

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
      {/* More Button */}
      <button onClick={()=>{ navigate('/doctors'); scrollTo(0,0)}} className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        More
      </button>
    </div>
  );
};

export default TopDoctors;
