import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import authsign from './images/signature.png'
import { useReactToPrint } from 'react-to-print';

const ViewStudentid = () => {
  // Selecting data from Redux state

  const { name, fathername, dob, address, department, yearofstudy, phonenumber, idnumber, image } = useSelector((state) => state.studentslicer);

  const contentToPrint = useRef();


  // react to print hook 
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  return (



    <>


<div className="w-full overflow-x-auto flex  items-center  justify-center ">
      <div ref={contentToPrint} className="grid h-screen  ml-32 mr-10 justify-center items-center  mt-[-250px]" style={{width:'700px'}}>
        <div className="bg-white shadow-lg rounded-lg border border-gray-300" style={{ width: '500px' }}>
          <div className=" text-white text-center py-5 rounded-t-lg" style={{ backgroundColor: 'blue' }}>
            <h1 className="text-2xl font-semibold m-0">MEGA MIND SR SEC SCHOOL (BHADRA)</h1>
          </div>
          <div className="flex p-6">
            <div className="grid">
              <img className=" ml-3 h-36 w-32 border-2 border-blue-700 rounded" src={image} alt="ID PHOTO" />
              <img className='h-10 ' src={authsign} />
              <p className='text-blue-700 ml-10'>PRINCIPAL</p>
            </div>
            <div className="ml-4">
              <div className="mb-2">
                <h4 className="text-gray-500 inline-block mr-1">Name:</h4>
                <strong>{name}</strong>
              </div>
              <div className="mb-2">
                <h4 className="text-gray-500 inline-block mr-1">Father's Name:</h4>
                <strong>{fathername}</strong>
              </div>
              <div className="mb-2">
                <h4 className="text-gray-500 inline-block mr-1">Date of Birth:</h4>
                <strong>{dob}</strong>
              </div>
              <div className="mb-2">
                <h4 className="text-gray-500 inline-block mr-1">Address:</h4>
                <strong className="inline-block break-all max-w-xs">{address}</strong>
              </div>
              <div className="mb-2">
                <h4 className="text-gray-500 inline-block mr-1">Phone No:</h4>
                <strong>{phonenumber}</strong>
              </div>
              <div className="mb-2">
                <h4 className="text-gray-500 inline-block mr-1">ID No:</h4>
                <strong>{idnumber}</strong>
              </div>
              {/* <div className="mb-2">
              <h4 className="text-gray-500 inline-block mr-1">Department:</h4>
              <strong>{department}</strong>
            </div> */}
              <div className="mb-2">
                <h4 className="text-gray-500 inline-block mr-1">Year of Study:</h4>
                <strong>{yearofstudy}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className=' mt-[-200px] flex items-center justify-center'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded" onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}>
          PRINT
        </button>
      </div>
      
    </>
  );
};

export default ViewStudentid;
