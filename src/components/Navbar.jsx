import React from 'react'
import { FiLogIn } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="Navbar grid grid-cols-3 gap-4 border border-red-500">
        <div className="Logo w-48 p-3 col-span-2 cursor-pointer">
            <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="Jasamedika" />
        </div>
        <div className="Login col-span-1 text-right p-6">
        <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 mb-2">
            <FiLogIn className='mr-3 text-lg'/>
            Login
        </button>
        </div>
    </div>
  )
}

export default Navbar