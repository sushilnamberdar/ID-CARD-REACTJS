import React from 'react'
import Sdetail from './Sdetail'
import ViewStudentid from './ViewStudentid'
import Newdeatails from './Newdeatails'
import Thirdone from './Thirdone'

const Main = () => {
  return (
    <div className='flex   justify-center items-center flex-wrap'>
        <div className=' mb-40 lg:mr-40'>
      <Sdetail/>
      </div>
      <div>
      <ViewStudentid/>
      <Newdeatails/>
      <Thirdone/>
      </div>
      
    </div>
  )
}

export default Main
