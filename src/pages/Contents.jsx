import React from 'react'
import NavbarContents from '../components/NavbarContents';
import Sidebar from '../components/Sidebar';
import ToTop from '../ToTop';
import Dashboard from './Dashboard';
import Finance from './Finance';
import HumanResource from './HumanResource';
import Inventory from './Inventory';
import MedicalRecord from './MedicalRecord';
import Service from './Service';

const Contents = ({type}) => {
    let page;

	switch (type) {
		case "dashboard":
			page = { src: <Dashboard />, };
			break;
		case "service":
			page = { src: <Service />, };
			break;
		case "inventory":
			page = { src: <Inventory />, };
			break;
		case "medical-record":
			page = { src: <MedicalRecord />, };
			break;
		case "finance":
			page = { src: <Finance />, };
			break;
		case "human-resource":
			page = { src: <HumanResource />, };
			break;
		default:
			break;
	}

  return (
    <div className='Contents flex'>
        <Sidebar className='sticky'/>
        <div className="container">
            <NavbarContents />
            {page.src}
        </div>
		<ToTop />
    </div>
  )
}

export default Contents