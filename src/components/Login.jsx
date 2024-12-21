import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './parts/Footer';

const Login = () => {
  return (
  <>
          <main className='bg-blue-200 min-h-screen flex flex-col justify-center items-center gap-3'>
            <img src="https://www.svgrepo.com/show/529151/question-square.svg" className='h-12' alt="Spotify" />
            <Link to="/names"
                className='p-2 m-2 border border-gray-700 rounded-full hover:text-white hover:bg-[#1C274C] transition-all'>
                Get Started
            </Link>
          
        </main>
        <Footer/>
  </>
  )
}

export default Login