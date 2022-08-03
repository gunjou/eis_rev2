import React from 'react'
import CardKunjungan from '../components/pelayananPasien/diagram/CardKunjungan'
import Education from '../components/pelayananPasien/diagram/Education'
import KelasPasien from '../components/pelayananPasien/diagram/KelasPasien'
import KelompokPasien from '../components/pelayananPasien/diagram/KelompokPasien'
import Perkerjaan from '../components/pelayananPasien/diagram/Perkerjaan'
import Dokter from '../components/pelayananPasien/diagram/Dokter'
import TopDiagnosa from '../components/pelayananPasien/diagram/TopDiagnosa'
import CardStandarMutu from '../components/pelayananPasien/diagram/CardStandarMutu'
import KepuasanPasien from '../components/pelayananPasien/diagram/KepuasanPasien'

const PelayananPasien = () => {
  return (
    <div className='PelayananPasien text-left m-2 text-gray-700 pr-1'>
      <div className="Title text-xl font-semibold pb-3">
        PelayananPasien
      </div>

      {/* Card */}
      <div className="Card">
        <span className="gap-3 grid grid-cols-4 pb-4">
          <CardKunjungan type="pasien-rawat-inap" />
          <CardKunjungan type="pasien-igd" />
          <CardKunjungan type="pasien-rawat-jalan" />
          <CardKunjungan type="pasien-radiologi" />
          <CardKunjungan type="pasien-laboratorium" />
          <CardKunjungan type="pasien-rehabilitasi" />
          <CardKunjungan type="pasien-bedah" />
          <CardKunjungan type="farmasi" />
        </span>
      </div>

      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-2/5 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Kelas</p>       
          <div className="Card grid grid-cols-3 m-2 gap-2 pb-2">
            <CardStandarMutu type={"bor"} />
            <CardStandarMutu type={"alos"} />
            <CardStandarMutu type={"toi"} />
            <CardStandarMutu type={"bto"} />
            <CardStandarMutu type={"ndr"} />
            <CardStandarMutu type={"gdr"} />
          </div>
        </div>
        <div className="grow basis-1/2 rounded-lg bg-[#eeeff1] p-2">
          {/* Pelayanan Berdasarkan Kelas */}
            <KelasPasien />
          </div>
        <div className="grow basis-1/5 rounded-lg bg-[#eeeff1] p-2">
        {/* Kepuasan Terhadap Pelayanan */}
            <KepuasanPasien />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
        {/* Pelayanan Berdasarkan Kelompok */}
          <KelompokPasien />
        </div>
        <div className="grow basis-2/5 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Dokter</p>
          <Dokter />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex gap-3 pb-3">
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          {/* Pelayanan Berdasarkan Top Diagnosa */}
          <TopDiagnosa />
        </div>
        <div className="grow basis-1/6 rounded-lg bg-[#eeeff1] p-2">
          {/* Pelayanan Berdasarkan Pendidikan */}
          <Education />
        </div>
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Perkerjaan</p>
          <Perkerjaan />
        </div>
        
      </div>
    </div>
  )
}

export default PelayananPasien