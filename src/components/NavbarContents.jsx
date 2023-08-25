import { TextField, Tooltip } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import id from 'date-fns/locale/id';
import React, { useEffect, useRef, useState } from "react";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCurrentLocation, BiExitFullscreen, BiFullscreen } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { FiBell } from 'react-icons/fi';
import { IoMdSearch } from 'react-icons/io';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useLocation, useNavigate } from "react-router-dom";
import "./navbarContents.css";
import Logout from "../pages/Logout";
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


const NavbarContents = (props) => {
	const [isDropdown1, setisDropdown1] = useState(false);
	const [isDropdown2, setisDropdown2] = useState(false);
	const [isFull, setIsFull] = useState(false);
	// Date Picker
	const [startDate, setStartDate] = React.useState(null);
	const [endDate, setEndDate] = React.useState(null);
	// Apply date filter and navigate
  const navigate = useNavigate();
  const location = useLocation();
  
	// console.log(expandDate(startDate))
	// console.log(expandDate(endDate))

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
							<IoMdSearch className="text-gray-600" />
						</button>
						<input type="text" name="s" id="s" class="block w-full pl-10 py-[6.5px] border-[1px] border-[#cdcece] rounded-[4px] leading-5 bg-[#eeeff1] text-gray-300 placeholder-gray-400 hover:border-[1px] hover:border-gray-900 focus:py-[5.5px] focus:outline-none focus:border-2 focus:border-blue-500 focus:text-gray-700 sm:text-base transition duration-150 ease-in-out" placeholder="Search"/>
					</form>
				</div>
			{/* Date Range Picker */}
				<div className="flex-1 flex justify-center px-1 lg:ml-2 lg:justify-start gap-4">
					<div className="flex w-[390px] gap-2 rounded-lg text-gray-700">
						{/* Tgl awal */}
						<div className="flex bg-[#eeeff1] rounded-lg">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="tgl awal"
									inputFormat="DD/MM/YYYY"
									value={startDate}
									onChange={(newDate) => {
										// setStartDate(newDate)
										if (newDate == null) {
											setStartDate(new Date())
											tgl_awal = new Date()
										}
										else {
											setStartDate(newDate)
											tgl_awal = newDate
										}
									}}
									renderInput={(params) => <TextField size="small" fullWidth {...params } />}
									InputAdornmentProps={{ position: 'start' }}
									/>
							</LocalizationProvider>
						</div>
						<div className="mt-2">-</div>
						{/* Tgl akhir */}
						<div className="flex bg-[#eeeff1] rounded-lg">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="tgl akhir"
									inputFormat="DD/MM/YYYY"
									value={endDate}
									onChange={(newDate) => {
										// setStartDate(newDate)
										if (newDate == null) {
											setEndDate(new Date())
											tgl_akhir = new Date()
										}
										else {
											setEndDate(newDate)
											navigate({
												pathname: location.pathname,
												search: `?tgl_awal=${expandDate(startDate)}&tgl_akhir=${expandDate(newDate)}`
											});
											tgl_akhir = newDate
										}
									}}
									renderInput={(params) => <TextField size="small" fullWidth {...params } />}
									InputAdornmentProps={{ position: 'start' }}
									/>
							</LocalizationProvider>
						</div>
					</div>
					
					{/* Filter Wilayah */}
					{/* <div className="flex bg-[#eeeff1] rounded-md pr-2 border-[1px] border-[#cdcece] hover:border-[1px] hover:border-gray-900 ">
						<BiCurrentLocation className="text-xl m-auto ml-3 mr-1 text-gray-600 "/>
						<select required className="text-sm focus:outline-none text-gray-700 bg-[#eeeff1] ">
							<option value="semua" selected>Semua Wilayah</option>
							<option value="balikpapan">Balikpapan</option>
							<option value="samarinda">Samarinda</option>
							<option value="kutai-barat">Kutai Barat</option>
						</select>
					</div> */}
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
							{/* <li className='submit p-1 cursor-pointer' onClick={handleLogout}>Logout</li> */}
							<Logout />
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