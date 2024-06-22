import React from 'react'
import Sdetail from './Sdetail'
import ViewStudentid from './ViewStudentid'
import Newdeatails from './Newdeatails'
import Thirdone from './Thirdone'

const Main = () => {
  return (
    <div className='flex   justify-center items-center flex-wrap'>
        <div className=' mb-40 lg:mr-40 ' >
      <Sdetail/>
      </div>
      <div className='grid lg:mt-0 sm:mt-0 xlg:mt-0  items-center justify-center'>
      <ViewStudentid/>
      <Newdeatails/>
      <Thirdone/>
      </div>
      
    </div>
  )
}

export default Main
