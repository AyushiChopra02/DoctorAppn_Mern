import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward",
    image: assets.profile_pic,
    email: "richard@gmail.com",
    phone: "+1-22-345-3421",
    city: "New York",
    gender: "Male",
    dob: "2000-01-01",
    address: {
      line1: "123 Main Street",
      line2: "New York, USA",
    },
  });

  const [edit, setEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-3 text-sm p-5 bg-white shadow-md rounded-lg">
      <img className="w-36 h-36 rounded-full mx-auto" src={userData.image} alt="Profile" />
      {edit ? (
        <input
          className="bg-gray-50 text-3xl font-medium text-center mt-4 border rounded p-2"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className="font-medium text-3xl text-center text-neutral-800 mt-4">{userData.name}</p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none my-3" />

      <div>
        <p className="text-neutral-500 font-semibold underline">Contact Info</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-800">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {edit ? (
            <input
              className="bg-gray-100 max-w-52 border p-1 rounded"
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {edit ? (
            <div>
              <input
                className="bg-gray-50 border p-1 w-full rounded"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <input
                className="bg-gray-50 border p-1 w-full rounded mt-2"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 font-semibold underline mt-3">Basic Info</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-800">
          <p className="font-medium">Gender:</p>
          {edit ? (
            <select
              className="border p-1 rounded"
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {edit ? (
            <input
              className="border p-1 rounded"
              type="date"
              value={userData.dob}
              onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
      <div className="mt-4 flex justify-center">
  <button
    className={`px-4 py-2 text-white font-medium rounded transition-all duration-200 
      ${edit ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
    onClick={() => setEdit(!edit)}
  >
    {edit ? "Save Info" : "Edit"}
  </button>
</div>

    </div>
  
  </div>
  )}
export default MyProfile;
