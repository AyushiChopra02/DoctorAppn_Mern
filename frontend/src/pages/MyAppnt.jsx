import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const MyAppnt = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-lg">My Appointment</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b items-center"
          >
            <div className="w-32 h-32">
              <img className="w-full h-full bg-indigo-50 rounded-lg object-cover" src={item.image} alt={item.name} />
            </div>
            <div className="text-sm text-zinc-600 flex-1">
              <p className="text-neutral-800 font-semibold text-lg">{item.name}</p>
              <p className="text-indigo-600 font-medium">{item.specialization}</p>
              <p className="text-zinc-700 font-medium mt-2">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-2">
                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span> 16 October 2025 | 8:30 PM
              </p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg shadow-md transition-all">
                  Pay Online
                </button>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg shadow-md transition-all">
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppnt;
