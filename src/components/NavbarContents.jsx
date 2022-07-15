import React, {useState} from 'react'
import { IoMdSearch } from 'react-icons/io'
import { BsPersonCircle } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'

const NavbarContents = () => {
	const [isDropdown1, setisDropdown1] = useState(false);
	const [isDropdown2, setisDropdown2] = useState(false);
  return (
	<div className="NavbarContents bg-white flex">
		{/* Search */}
		<div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-start p-2 pt-3 pb-3">
			<div class="max-w-lg w-full lg:max-w-xs">
				<label for="search" class="sr-only">Search </label>
				<form methode="get" action="#" class="relative z-50">
					<button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-cursor text-xl text-gray-700">
						<IoMdSearch />
					</button>
					<input type="text" name="s" id="s" class="block w-full pl-10 py-2 border-2 border-[#eeeff1] rounded-md leading-5 bg-[#eeeff1] text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-700 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
				</form>
			</div>
		</div>

		<div className="Right flex m-5 pr-3">
			{/* Notif */}
			<div className="notif text-2xl pr-6 flex">
				{!isDropdown1 ? 
				<>
				<FiBell onClick={() => setisDropdown1(!isDropdown1)} className='hover:text-[#42a7b3] cursor-pointer'/>
				<span onClick={() => setisDropdown1(!isDropdown1)} class="text-white bg-red-600 absolute rounded-full text-xs -mt-1 font-semibold ml-2.5 py-0 px-1.5 cursor-pointer" >9</span>
				</>
					:
					<>
				<FiBell onClick={() => setisDropdown1(!isDropdown1)} className='hover:text-[#42a7b3] cursor-pointer'/>
				<div className="dropdown p-2 absolute z-10 text-base text-gray-700 mt-7 bg-white rounded-lg drop-shadow-xl">
					<ul>
						<li className='p-1 cursor-pointer'>Notification 1</li>
						<li className='p-1 cursor-pointer'>Notification 2</li>
						<li className='p-1 cursor-pointer'>Notification 3</li>
					</ul>
				</div>
					</>
				}
			</div>
			<div className="profile flex">
			{isDropdown2 ? 
			<>
				<div onClick={() => setisDropdown2(!isDropdown2)} className="flex hover:text-[#42a7b3] text-2xl cursor-pointer">
					<BsPersonCircle />
					<span className='flex text-sm pl-3 pt-0.5 '>
						Administrator
						<RiArrowDownSLine className='text-lg pt-1 '/>
					</span>
				</div>
				<div className="dropdown text-left p-2 absolute z-10 text-base text-gray-700 mt-7 bg-white rounded-lg drop-shadow-xl">
					<ul>
						<li className='p-1 cursor-pointer'>Edit Profile</li>
						<a href="/login">
							<li className='p-1 cursor-pointer'>Logout</li>
						</a>
					</ul>
				</div>
			</>
				:
				<>
				<div onClick={() => setisDropdown2(!isDropdown2)} className="flex hover:text-[#42a7b3] text-2xl cursor-pointer">
					<BsPersonCircle />
					<span className='flex text-sm pl-3 pt-0.5 '>
						Administrator
						<RiArrowDownSLine className='text-lg pt-1 '/>
					</span>
				</div>
				</>
			}
			</div>

		</div>

    </div>
  )
}

export default NavbarContents