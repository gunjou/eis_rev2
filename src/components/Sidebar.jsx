import { Tooltip } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { tgl_awal, tgl_akhir } from "./NavbarContents";
// icons
import { AiOutlineDownload, AiOutlineUpload } from "react-icons/ai";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FaHospitalUser } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineInventory2 } from "react-icons/md";
import { RiStethoscopeLine } from "react-icons/ri";


const active = {
	display: 'flex',
  color: '#42a7b3',
  padding: '8px',
  fontWeight: 'bold',
  width: '100%',
  textAlign: 'left',
}

const nonactive = {
	display: 'flex',
  padding: '8px',
}

function expandDate(date) {
  var date = new Date(date);
  var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var extractDate = `${year}-${month+1}-${day}`;

  return extractDate;
};

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
  const nameHospital = localStorage.getItem("rs_name");
  const logoHospitalUrl = localStorage.getItem("rs_logo");

  if (tgl_awal != null && tgl_akhir != null) {
    var startDate = expandDate(tgl_awal);
    var endDate = expandDate(tgl_akhir);
  }
  else {
    var startDate = expandDate(new Date());
    var endDate = expandDate(new Date());
  }
  
  const filterDate = `?tgl_awal=${startDate}&tgl_akhir=${endDate}`;
  return (
    <div className="Sidebar bg-white h-96 sticky top-0 z-30">
			{!isOpen ? 
      <div className="header pl-3 pr-3">
				<div className="logo pt-3 pb-1">
				<a href="/">
					<img src={process.env.PUBLIC_URL + "images/loader.svg"} alt="Jasamedika" />
				</a>
				</div>
        <Tooltip title="Expand" placement="right">
          <div onClick={() => setIsOpen(!isOpen)} className="flex items-center text-lg before:content-[''] before:flex-1 before:border-b-2 text-gray-700 cursor-pointer">
            <MdArrowForwardIos className="hover:text-[#42a7b3]"/>
          </div>
        </Tooltip>
				<div className="items text-gray-700 ">
          <ul>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/live-reports"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <div>
                  <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 ml-1.5 hover:bg-[#42a7b3]">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  </span>
                </div>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/kunjungan"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <FaHospitalUser className="text-[23px]" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/pelayanan"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <RiStethoscopeLine className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/pendapatan"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <AiOutlineDownload className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/pengeluaran"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <AiOutlineUpload className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/inventory"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdOutlineInventory2 className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-0.5" >
               <NavLink to={"/kepegawaian"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <BsFileEarmarkPerson className="text-xl" />
              </NavLink>
            </li>
            <div>
              <div className="mt-7 ml-1">
                <img src={process.env.PUBLIC_URL + "logo_hospital/" + logoHospitalUrl} alt={nameHospital} width="29" height="30" />
              </div>
            </div>
            {/* <li className="item-center hover:text-[#42a7b3] pl-0.5" >
              <NavLink to="/indikator-pelayanan" style={({ isActive }) => (isActive ? active : nonactive)}>
                <GoDashboard className="text-[20px]" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-0.5" >
              <NavLink to="/kepustakaan" style={({ isActive }) => (isActive ? active : nonactive)}>
                <IoLibraryOutline className="text-[20px]" />
              </NavLink>
            </li> */}
          </ul>
        </div>
			</div>
				:
      <div className="header pl-3 pr-3">
				<div className="logo pt-3 pb-1 w-48">
				<a href="/">
					<img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="Jasamedika" />
				</a>
				</div>
          <div className="flex items-center text-lg before:content-[''] before:flex-1 before:border-b-2 text-gray-700 ">
            <Tooltip title="Collapse" placement="right">
              <MdArrowBackIosNew className="hover:text-[#42a7b3] cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            </Tooltip>
          </div>
				<div className="items text-gray-700 ">
          <ul>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/live-reports"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <div>
                  <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 ml-1.5 mr-1">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  </span>
                </div>
                <span className="pl-2">Live Reports</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/kunjungan"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <FaHospitalUser className="text-[23px]" />
                <span className="pl-2">Kunjungan Pasien</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/pelayanan"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <RiStethoscopeLine className="text-2xl" />
                <span className="pl-2">Pelayanan Pasien</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/pendapatan"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <AiOutlineDownload className="text-2xl" />
                <span className="pl-2">Pendapatan</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/pengeluaran"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <AiOutlineUpload className="text-2xl" />
                <span className="pl-2">Pengeluaran</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to={"/inventory"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdOutlineInventory2 className="text-2xl" />
                <span className="pl-2">Inventory</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-0.5" >
               <NavLink to={"/kepegawaian"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}>
                <BsFileEarmarkPerson className="text-xl" />
                <span className="pl-2.5">Kepegawaian</span>
              </NavLink>
            </li>
            <div>
              <div className="grid justify-items-center pt-7">
                <img src={process.env.PUBLIC_URL + "logo_hospital/" + logoHospitalUrl} alt="Jasamedika" width="100" height="99" />
              </div>
              <li className="font-bold pt-1" >
                  {/* <NavLink to={"/kepegawaian"+filterDate} style={({ isActive }) => (isActive ? active : nonactive)}> */}
                  <span className="m-auto">{nameHospital}</span>
                {/* </NavLink> */}
              </li>
            </div>
            {/* <li className="item-center hover:text-[#42a7b3] pl-0.5" >
              <NavLink to="/indikator-pelayanan" style={({ isActive }) => (isActive ? active : nonactive)}>
                <GoDashboard className="text-[20px]" />
                <span className="pl-2.5">Indikator Pelayanan</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-0.5" >
              <NavLink to="/kepustakaan" style={({ isActive }) => (isActive ? active : nonactive)}>
                <IoLibraryOutline className="text-[20px]" />
                <span className="pl-2.5">Kepustakaan</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
			</div>
			}
    </div>
    
  );
};

export default Sidebar;
