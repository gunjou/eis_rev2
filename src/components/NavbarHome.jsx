import React from 'react'
import { FiLogIn } from 'react-icons/fi';

const NavbarHome = () => {
  return (
    <div className="Navbar grid grid-cols-3 gap-4 bg-[#FEFEFE] sticky top-0 z-50 drop-shadow-lg shadow-teal-800">
        <div className="Logo w-48 p-3 col-span-2 cursor-pointer">
          <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="Jasamedika" />
        </div>
        <div className="Login col-span-1 text-right p-6">
          <a href="/login">
            <button type="button" class="text-white bg-[#42a7b3] hover:bg-teal-800 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 mb-2" >
              <FiLogIn className="mr-3 text-lg" />
              Login
            </button>
          </a>
        </div>
      </div>
  )
}

export default NavbarHome