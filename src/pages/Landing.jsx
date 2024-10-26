import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <div className="h-lvh flex flex-col justify-center items-center bg-pink-200">
        <div className="p-10 mx-5 bg-white flex flex-col gap-5 rounded-xl">
            <h1 className="text-3xl text-pink-900 font-bold text-center">Welcome to Higher Secondary Registration Portal</h1>
            <Link to={"/reg"}>
            <button className='text-white w-full hover:scale-95 transition animate-pulse rounded-full text-xl border-4 border-pink-500 bg-pink-600 px-2 py-1'>Register Now<i className='mx-3 fa-solid fa-arrow-right-from-bracket'></i></button>
            </Link>
        </div>
        <div className='mt-10 px-3 text-center'>
            <p className='font-light text-pink-500'>Copyright &copy; Designed and Developed by Sarang P Achari</p>
        </div>
    </div>
    </>
  )
}

export default Landing
