import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
    <Layout>
      <h1 className="text-center font-bold text-4xl text-blue-950 mb-20 mt-10">" ขอโทษครับ ไม่มีหน้าที่ท่านหาอยู่ "</h1>
     <div className="flex justify-center ">
     <NavLink className='bg-black text-white p-5 rounded-full' to='/'>ย้อนกลับ</NavLink>
     </div>
    </Layout>
    </>
  )
}

export default NotFound