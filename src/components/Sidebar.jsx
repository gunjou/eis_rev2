import React, {useState} from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineDashboard, MdBarChart, MdOutlineInventory2 } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa";
import { TbFileDollar } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { NavLink } from "react-router-dom";


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

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="Sidebar bg-white">
			{!isOpen ? 
      <div className="header pl-3 pr-3">
				<div className="logo pt-3 pb-1">
				<a href="/">
					<img src={process.env.PUBLIC_URL + "images/loader.svg"} alt="Jasamedika" />
				</a>
				</div>
				<div onClick={() => setIsOpen(!isOpen)} className="flex items-center text-lg before:content-[''] before:flex-1 before:border-b-2 text-gray-700 cursor-pointer">
          <MdArrowForwardIos className="hover:text-[#42a7b3]"/>
        </div>
				<div className="items text-gray-700 ">
          <ul>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/dashboard" style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdOutlineDashboard className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/service" style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdBarChart className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/inventory" style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdOutlineInventory2 className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-0.5" >
              <NavLink to="/#/medical-record" style={({ isActive }) => (isActive ? active : nonactive)}>
                <FaFileMedical className="text-[20px]" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/finance" style={({ isActive }) => (isActive ? active : nonactive)}>
                <TbFileDollar className="text-2xl" />
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-1" >
               <NavLink to="/#/human-resource" style={({ isActive }) => (isActive ? active : nonactive)}>
                <ImProfile className="text-xl" />
              </NavLink>
            </li>
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
				<div onClick={() => setIsOpen(!isOpen)} className="flex items-center text-lg before:content-[''] before:flex-1 before:border-b-2 text-gray-700 cursor-pointer">
          <MdArrowBackIosNew className="hover:text-[#42a7b3]"/>
        </div>
				<div className="items text-gray-700 ">
          <ul>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/dashboard" style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdOutlineDashboard className="text-2xl" />
                <span className="pl-2">Dashboard</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/service" style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdBarChart className="text-2xl" />
                <span className="pl-2">Service</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/inventory" style={({ isActive }) => (isActive ? active : nonactive)}>
                <MdOutlineInventory2 className="text-2xl" />
                <span className="pl-2">Inventory</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-0.5" >
              <NavLink to="/#/medical-record" style={({ isActive }) => (isActive ? active : nonactive)}>
                <FaFileMedical className="text-[20px]" />
                <span className="pl-2.5">Medical Record</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3]" >
              <NavLink to="/#/finance" style={({ isActive }) => (isActive ? active : nonactive)}>
                <TbFileDollar className="text-2xl" />
                <span className="pl-2">Finance</span>
              </NavLink>
            </li>
            <li className="item-center hover:text-[#42a7b3] pl-1" >
               <NavLink to="/#/human-resource" style={({ isActive }) => (isActive ? active : nonactive)}>
                <ImProfile className="text-xl" />
                <span className="pl-2">Human Resource</span>
              </NavLink>
            </li>
          </ul>
        </div>
			</div>
			}
    </div>
    
  );
};

export default Sidebar;
