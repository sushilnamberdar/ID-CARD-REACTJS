import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import authsign from './images/signature.png';
import idcard from './images/Green Simple Medical ID Card.png';
import { useReactToPrint } from 'react-to-print';

const Thirdone = () => {
    const { name, fathername, classn, phonenumber, idnumber, image } = useSelector((state) => state.studentslicer);

    const contentToPrint = useRef();

    // react to print hook 
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
        content: () => contentToPrint.current,
    });

    return (
        <>
            <div className="w-full overflow-x-auto flex items-center justify-center">
                <div ref={contentToPrint} className="min-w-[400px] ml-32  mb-10 mr-1 sm:ml-40 relative mt-10" >
                    <div>
                        <img className="h-[650px]"   style={{boxShadow:"0.5px 0.5px 10px gray "}} src={idcard} alt="School ID Card" />
                    </div>
                    <div className="absolute top-[40px] left-[40px] text-white text-[30px] font-bold">
                        MEGA MIND SCHOOL
                    </div>
                    <div className="absolute top-[80px] left-[130px] text-white text-[30px] font-bold">
                        BHADRA
                    </div>
                    <div className="absolute top-[400px] left-[40px] text-sky-950 text-lg font-bold text-center">
                        <div className="grid grid-cols-2">
                            <div className="grid">
                                <div className="text-left">Name :</div>
                            </div>
                            <div className="ml-2">
                                <div className="text-left">{name}</div>
                            </div>
                            <div>
                                <div className="text-left">Father Name :</div>
                            </div>
                            <div className="ml-2">
                                <div className="text-left">{fathername}</div>
                            </div>
                            <div>
                                <div className="text-left">Class :</div>
                            </div>
                            <div className="ml-2">
                                <div className="text-left">{classn}</div>
                            </div>
                            <div>
                                <div className="text-left">Phone No :</div>
                            </div>
                            <div className="ml-2">
                                <div className="text-left">{phonenumber}</div>
                            </div>
                            <div>
                                <div className="text-left">ID NO:</div>
                            </div>
                            <div className="ml-2">
                                <div className="text-left">{idnumber}</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[183px] left-[98px] text-white text-[30px] font-bold">
                        <img className="h-[192px] w-[186px] rounded-[27px]" src={image} alt="ID PHOTO" />
                    </div>
                    <div className="absolute top-[546px] left-[136px] w-[150px]">
                        <img className="h-[50px]" src={authsign} alt="Signature" />
                    </div>
                    <div className="absolute top-[597px] left-[166px] h-[10px]">
                        <p className="font-mono font-medium text-[15px]"> PRINCIPAL </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded" onClick={handlePrint}>
                    PRINT
                </button>
            </div>
        </>
    );
};

export default Thirdone;
