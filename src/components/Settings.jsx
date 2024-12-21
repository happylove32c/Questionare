import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
      <main className='bg-blue-200 min-h-screen flex flex-col p-8 justify-center items-center gap-3'>
        <div className="header">
            <h1 className='text-2xl text-[#1C274C]'>Select Settings</h1>
        </div>
            <div className="Player_settings flex flex-col gap-4 justify-center items-center">
                <h1 className='text-2xl text-[#1C274C]'>Players</h1>

                <div className="buttons flex flex-row">

                <Link to="/names" className='p-2 m-2 border border-gray-700 flex gap-2 justijy-center items-center rounded-full hover:text-white hover:bg-[#1C274C] transition-all'>
                    <img src="https://www.svgrepo.com/show/521200/people.svg" className='h-6' alt="" /> Players
                </Link>

                <Link to="/names" className='p-2 m-2 border border-gray-700 flex gap-2 justijy-center items-center rounded-full hover:text-white hover:bg-[#1C274C] transition-all'>
                    <img src="https://www.svgrepo.com/show/449088/group.svg" className='h-6' alt="" /> Teams
                </Link>   

                </div>
            </div>
      </main>
    </div>
  )
}

export default Settings
