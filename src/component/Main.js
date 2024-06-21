import React from 'react'
import Sdetail from './Sdetail'
import ViewStudentid from './ViewStudentid'
import Newdeatails from './Newdeatails'
import Thirdone from './Thirdone'

const Main = () => {
  return (
    <div className='flex   justify-center flex-wrap'>
        <div className='mr-40'>
      <Sdetail/>
      </div>
      <div className='mt-0'>
      <ViewStudentid/>
      <Newdeatails/>
      <Thirdone/>
      </div>
      
    </div>
  )
}

export default Main
