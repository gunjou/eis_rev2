import React from 'react'
import AgeGender from '../components/kunjunganPasien/diagram/AgeGender'
import CardKunjungan from '../components/kunjunganPasien/diagram/CardKunjungan'
import Education from '../components/kunjunganPasien/diagram/Education'
import KelasPasien from '../components/kunjunganPasien/diagram/KelasPasien'
import KelompokPasien from '../components/kunjunganPasien/diagram/KelompokPasien'
import Perkerjaan from '../components/kunjunganPasien/diagram/Perkerjaan'
import Rujukan from '../components/kunjunganPasien/diagram/Rujukan'
import StatusPulang from '../components/kunjunganPasien/diagram/StatusPulang'

export const KUNJUNGAN_PORT = "8001"

const KunjunganPasien = () => {
  return (
    <div className='KunjunganPasien text-left m-2 text-gray-700 pr-1'>
      <div className="Title text-xl font-semibold pb-3">
        Kunjungan Pasien
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
          {/* Kunjungan Berdasarkan Kelas */}
          <KelasPasien />
        </div>
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          {/* Kunjungan Berdasarkan Kelompok */}
          <KelompokPasien />
        </div>
        <div className="grow basis-1/5 rounded-lg bg-[#eeeff1] p-2">
          {/* Kunjungan Berdasarkan Rujukan */}
          <Rujukan />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-3 pb-3">
        <div className='grow  basis-1/3'>
          <div className="grow  rounded-lg mb-3 bg-[#eeeff1] p-4">
            {/* Status Pulang */}
            <StatusPulang />
          </div>        
          <div className="grow  rounded-lg bg-[#eeeff1] p-2">
          {/* Kunjungan Umur dan Jenis Kelamin */}
            <AgeGender />
          </div>        
        </div>
        <div className="grow basis-1/6 rounded-lg bg-[#eeeff1] p-2">
          {/* Kunjungan Berdasarkan Pendidikan */}
          <Education />
        </div>        
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          {/* Kunjungan Berdasarkan Perkerjaan */}
          <Perkerjaan />
        </div>        
        
      </div>

    </div>
  )
}

export default KunjunganPasien