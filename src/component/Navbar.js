import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className='flex  fixed w-full  justify-center bg-blue-600 h-16 items-center '>
        <div className='flex items-center '>
      <Link className='mr-10' to='/filldetails' >Fill The Student Details</Link>
      
      <Link to='/viewdetails' >View The Generated Id Card </Link>
      </div>
    </div>
  )
}

export default Navbar
