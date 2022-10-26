import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdSearch, IoMdCalendar } from 'react-icons/io'
import { BiCurrentLocation } from 'react-icons/bi'
import { BsPersonCircle, } from 'react-icons/bs'
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Tooltip } from "@mui/material";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./navbarContents.css";
import { registerLocale } from  "react-datepicker";
import id from 'date-fns/locale/id';
registerLocale('id', id)


function getFullscreenElement() {
	return document.fullscreenElement   //standard property
	|| document.webkitFullscreenElement //safari/opera support
	|| document.mozFullscreenElement    //firefox support
	|| document.msFullscreenElement;    //ie/edge support
}

function toggleFullscreen() {
	if(getFullscreenElement()) {
		 document.exitFullscreen();
	}else {
		document.documentElement.requestFullscreen().catch(console.log);
	}
}

function expandDate(date) {
  var date = new Date(date);
  var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var extractDate = `${year}-${month+1}-${day}`

  return extractDate;
}

export var tgl_awal = expandDate(new Date());
export var tgl_akhir = expandDate(new Date());


const NavbarContents = () => {
	const [isDropdown1, setisDropdown1] = useState(false);
	const [isDropdown2, setisDropdown2] = useState(false);
	const [isFull, setIsFull] = useState(false);
	// Date Picker
	const [dateRange, setDateRange] = useState([null, null]);
  const [dateStart, dateEnd] = dateRange;
  const navigate = useNavigate();
  const location = useLocation();
  

	function useOutsideAlerter(ref) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setisDropdown1(false);
					setisDropdown2(false);
				}
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}
const wrapperRef = useRef(false);
useOutsideAlerter(wrapperRef);
	  
	function fullScreen(event) {
		toggleFullscreen();
		setIsFull(!isFull);
	}


  return (
	<div className="NavbarContents bg-white flex sticky top-0 z-30">
		{/* Search */}
		<div class="flex-1 flex justify-center px-2 lg:ml-2 lg:justify-start p-2 pt-3 pb-3">
			<div class="max-w-lg w-full lg:max-w-xs">
				<label for="search" class="sr-only">Search </label>
				<form methode="get" action="#" class="relative z-50">
					<button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-cursor text-xl text-gray-700">
						<IoMdSearch />
					</button>
					<input type="text" name="s" id="s" class="block w-full pl-10 py-2 border-2 border-[#eeeff1] rounded-md leading-5 bg-[#eeeff1] text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-700 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
				</form>
			</div>
		{/* Date Range Picker */}
			<div className="flex-1 flex justify-center px-2 lg:ml-2 lg:justify-start gap-4">
				<div className="flex bg-[#eeeff1] rounded-lg text-gray-700 pr-2">
					<IoMdCalendar className="text-xl m-auto ml-3 mr-1"/>
					<ReactDatePicker
						locale="id"
						selectsRange={true}
						startDate={dateStart}
						endDate={dateEnd}
						onChange={(update) => {
              setDateRange(update);
              if (update[0] == null) {
                navigate({
                  pathname: location.pathname,
                  search: `?tgl_awal=${expandDate(new Date())}&tgl_akhir=${expandDate(new Date())}`
                });
                tgl_awal = new Date()
                tgl_akhir = new Date()
              }
              else {
                navigate({
                  pathname: location.pathname,
                  search: `?tgl_awal=${expandDate(update[0])}&tgl_akhir=${expandDate(update[1])}`
                });
                tgl_awal = update[0]
                tgl_akhir = update[1]
                // console.log(tgl_awal)
                // console.log(tgl_akhir)
              }
						}}
						withPortal
						isClearable={true}
						placeholderText="Masukkan rentang tanggal"
						dateFormat="dd/MM/yyyy"
						className="block w-42 pl-1 py-2 border-2 rounded-lg bg-[#eeeff1] border-[#eeeff1] focus:outline-none sm:text-sm transition duration-150 ease-in-out"
						/>
				</div>
        
				{/* Filter Wilayah */}
				<div className="flex bg-[#eeeff1] rounded-lg pr-2">
					<BiCurrentLocation className="text-xl m-auto ml-3 mr-1 "/>
					<select required className="text-sm focus:outline-none text-gray-700 bg-[#eeeff1]">
						<option value="semua" selected>Semua Wilayah</option>
						<option value="balikpapan">Balikpapan</option>
						<option value="samarinda">Samarinda</option>
						<option value="kutai-barat">Kutai Barat</option>
					</select>
				</div>
			</div>

		</div>

		<div className="Right flex m-5 pr-3">
			{/* Full Screen */}
			{!isFull ? 
				<Tooltip title="Fullscreen" placement="bottom">
					<BiFullscreen onClick={fullScreen} className="cursor-pointer text-2xl mr-3 hover:text-[#42a7b3]" />
				</Tooltip>
			: 
				<Tooltip title="Exit Fullscreen" placement="bottom">
					<p><BiExitFullscreen onClick={fullScreen} className="cursor-pointer text-2xl mr-3 hover:text-[#42a7b3]" /></p>
				</Tooltip>
			}

			{/* Notif */}
			<div className="notif text-2xl pr-4 flex">
				{!isDropdown1 ? 
				<>
					<Tooltip title="Notifikasi" placement="bottom">
						<span className="flex">
							<FiBell onClick={() => setisDropdown1(!isDropdown1)} className='hover:text-[#42a7b3] cursor-pointer'/>
							<span onClick={() => setisDropdown1(!isDropdown1)} class="text-white bg-red-600 absolute rounded-full text-xs -mt-1 font-semibold ml-2.5 py-0 px-1.5 cursor-pointer" >3</span>
						</span>
					</Tooltip>
				</>
					:
					<>
					<FiBell onClick={() => setisDropdown1(!isDropdown1)} className='hover:text-[#42a7b3] cursor-pointer z-20'/>
					<div ref={wrapperRef} className="dropdown absolute z-10 text-base text-gray-700 mt-7 bg-white rounded-lg drop-shadow-xl">
						<ul>
							<li className='p-2.5 cursor-pointer hover:bg-gray-200 hover:rounded-lg'>Notification 1</li>
							<li className='p-2.5 cursor-pointer hover:bg-gray-200 hover:rounded-lg'>Notification 2</li>
							<li className='p-2.5 cursor-pointer hover:bg-gray-200 hover:rounded-lg'>Notification 3</li>
						</ul>
					</div>
				</>
				}
			</div>

			{/* Users */}
			<div className="profile flex">
			{!isDropdown2 ? 
				<>
					<Tooltip title="Profile" placement="bottom-start">
					<div onClick={() => setisDropdown2(!isDropdown2)} className="flex hover:text-[#42a7b3] text-2xl cursor-pointer">
							<BsPersonCircle />
						<span className='flex text-sm pl-3 pt-0.5 '>
							Administrator
							<RiArrowDownSLine className='text-lg pt-1 '/>
						</span>
					</div>
					</Tooltip>
				</>
				:
				<>
				<div onClick={() => setisDropdown2(!isDropdown2)} className="flex hover:text-[#42a7b3] text-2xl cursor-pointer z-20">
					<BsPersonCircle />
					<span className='flex text-sm pl-3 pt-0.5 '>
						Administrator
						<RiArrowDownSLine className='text-lg pt-1 '/>
					</span>
				</div>
				<div ref={wrapperRef} className="dropdown text-left p-2 absolute z-10 text-base text-gray-700 mt-7 bg-white rounded-lg drop-shadow-xl">
					<ul>
						<li className='p-1 cursor-pointer'>Edit Profile</li>
						<a href="/#/login">
							<li className='p-1 cursor-pointer'>Logout</li>
						</a>
					</ul>
				</div>
				</>
			}
			</div>

		</div>

    </div>
  )
}

export default NavbarContents