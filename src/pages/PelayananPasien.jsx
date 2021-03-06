import React from 'react'
import AgeGender from '../components/pelayananPasien/diagram/AgeGender'
import CardKunjungan from '../components/pelayananPasien/diagram/CardKunjungan'
import Education from '../components/pelayananPasien/diagram/Education'
import KelasPasien from '../components/pelayananPasien/diagram/KelasPasien'
import KelompokPasien from '../components/pelayananPasien/diagram/KelompokPasien'
import Perkerjaan from '../components/pelayananPasien/diagram/Perkerjaan'
import Dokter from '../components/pelayananPasien/diagram/Dokter'
import StatusPulang from '../components/pelayananPasien/diagram/StatusPulang'
import TopDiagnosa from '../components/pelayananPasien/diagram/TopDiagnosa'

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
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Kelas</p>       
          <KelasPasien />
        </div>
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Kelompok</p>
          <KelompokPasien />
        </div>
        <div className="grow basis-1/5 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Dokter</p>
          <Dokter />
      </div>

      {/* Row 2 */}
      </div>
      <div className="flex gap-3 pb-3">
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Top Diagnosa</p>
          <TopDiagnosa />
        </div>
        <div className="grow basis-1/6 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pelayanan Berdasarkan Pendidikan</p>
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