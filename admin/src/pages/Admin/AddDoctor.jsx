import React from 'react'

const AddDoctor = () => {
  return (
   <form className='m-5 w-full'>
    <p className='mb-3 text-lg font-medium'>Add Doctor</p>
    <div>
      <div>
        <label htmlFor="doc-img">

          <img src={assests.upload-area} alt="" />
        </label>
        <input type= "file" id="doc-img" hidden/>
        <p>Upload doctor <br />picture</p>
      </div>
      <div>
        <div>
          <div>
            <p>Doctor name</p>
            <input type="text" placeholder='Name' required />
          </div>


          <div>
            <p>Doctor Email</p>
            <input type="email" placeholder='email' required />
          </div>

          <div>
            <p>Doctor Password</p>
            <input type="password" placeholder='password' required />
          </div>

          <div>
            <p>Experience</p>
            <select name="" id="">
              <option value="1 Year"></option>
              <option value="2 Year"></option>
              <option value="3 Year"></option>
              <option value="4 Year"></option>
              <option value="5 Year"></option>
              <option value="6 Year"></option>
              <option value="7 Year"></option>
              <option value="8 Year"></option>
              <option value="9 Year"></option>
              <option value="10 Year"></option>
            </select>
          </div>
          <div>
            <p>Fees</p>
            <input type="number" placeholder='fees' required/>
          </div>
        </div>
        <div>
          <div>
            <p>Speciality</p>
            <select name="" id="">
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="pediatricians">pediatricians</option>
              <option value="Neutrologist">Neutrologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div>
            <p>Education</p>
            <input type="text" placeholder='address 1' required />
            <input type="text" placeholder='address2' required />
          </div>
        </div>
         </div>
         <div>
          <p>ADD doctor</p>
          <textarea name="text" id='Education' row={5} required />
         </div>
         <button>add doctor</button>
    </div>
   </form>
  )
}

export default AddDoctor
