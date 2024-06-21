import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  studentname, fathername, dobfun, addressfun, idnumberfun,
  yearofstudyfun, phonenumberfun, studentimage, classfun
} from '../Slices/StudenSlices';

const Sdetail = () => {
  const [image, setimage] = useState();
  const dispatch = useDispatch();

  const handelstudentphoto = () => {
    dispatch(studentimage(image));
  }

  const converttobase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log('image into string ', reader.result); // convert on base64code string
      setimage(reader.result);
    };
    reader.onerror = error => {
      console.log("Error : ", error);
    }
  }

  return (
    <div className='flex justify-center items-center mt-10'>
      <div className="w-full max-w-lg">
        <h2 className="text-2xl mb-4 text-center">Student ID Card Details Form</h2>
        <div className="space-y-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold">Personal Information:</h3>
          <div>
            <label className="block">Full Name:</label>
            <input
              type="text"
              name="fullname"
              onChange={(e) => dispatch(studentname(e.target.value))}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div>
            <label className="block mt-4">Father Name:</label>
            <input
              type="text"
              name="fathername"
              onChange={(e) => dispatch(fathername(e.target.value))}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div>
            <label className="block mt-4">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              onChange={(e) => dispatch(dobfun(e.target.value))}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <h3 className="text-lg font-semibold mt-6">Contact Information:</h3>
          <div>
            <label className="block">Address:</label>
            <textarea
              name="address"
              onChange={(e) => dispatch(addressfun(e.target.value))}
              rows="4"
              cols="50"
              required
              className="border border-gray-300 p-2 w-full resize-none rounded"
            ></textarea>
          </div>
          <div>
            <label className="block mt-4">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              onChange={(e) => dispatch(phonenumberfun(e.target.value))}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <h3 className="text-lg font-semibold mt-6">Academic Information:</h3>
          <div>
            <label className="block">Student ID Number:</label>
            <input
              type="text"
              name="studentId"
              onChange={(e) => dispatch(idnumberfun(e.target.value))}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div>
            <label className="block mt-4">Class:</label>
            <input
              type="text"
              name="class"
              onChange={(e) => dispatch(classfun(e.target.value))}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div>
            <label className="block mt-4">Year of Study:</label>
            <input
              type="text"
              name="yearOfStudy"
              onChange={(e) => dispatch(yearofstudyfun(e.target.value))}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block mt-4">Upload Student Photo</label>
            <label className='text-red-800 text-sm'>Size should be 35X35MM(3.5X3.5cm)</label>
            <input
              type="file"
              name="studentphoto"
              onChange={converttobase64}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded w-full"
            onClick={handelstudentphoto}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sdetail;
