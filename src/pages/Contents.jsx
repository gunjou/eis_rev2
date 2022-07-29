import React from 'react'
import NavbarContents from '../components/NavbarContents';
import Sidebar from '../components/Sidebar';
import ToTop from '../ToTop';
import LiveReports from './LiveReports';
import KunjunganPasien from './KunjunganPasien';
import PelayananPasien from './PelayananPasien';
import Pendapatan from './Pendapatan';
import Pengeluaran from './Pengeluaran';
import Inventory from './Inventory';
import Kepegawaian from './Kepegawaian';
import IndikatorPelayanan from './IndikatorPelayanan';
import Kepustakaan from './Kepustakaan';

const Contents = ({type}) => {
    let page;

	switch (type) {
		case "live-reports":
			page = { src: <LiveReports />, };
			break;
		case "kunjungan":
			page = { src: <KunjunganPasien />, };
			break;
		case "pelayanan":
			page = { src: <PelayananPasien />, };
			break;
		case "pendapatan":
			page = { src: <Pendapatan />, };
			break;
		case "pengeluaran":
			page = { src: <Pengeluaran />, };
			break;
		case "inventory":
			page = { src: <Inventory />, };
			break;
		case "kepegawaian":
			page = { src: <Kepegawaian />, };
			break;
		case "indikator-pelayanan":
			page = { src: <IndikatorPelayanan />, };
			break;
		case "kepustakaan":
			page = { src: <Kepustakaan />, };
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