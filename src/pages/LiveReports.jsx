import React from 'react'
import BedAvailability from '../components/liveReports/diagram/BedAvailability'
import CaraBayar from '../components/liveReports/diagram/CaraBayar'
import GenderAge from '../components/liveReports/diagram/GenderAge'
import KelompokPasien from '../components/liveReports/diagram/KelompokPasien'
import KunjunganInstalasi from '../components/liveReports/diagram/KunjunganInstalasi'
import PendapanJenisProduk from '../components/liveReports/diagram/PendapanJenisProduk'
import PendapanKelas from '../components/liveReports/diagram/PendapanKelas'
import PendapatanInstalasi from '../components/liveReports/diagram/PendapatanInstalasi'
import PresensiPegawai from '../components/liveReports/diagram/PresensiPegawai'
import Rujukan from '../components/liveReports/diagram/Rujukan'
import TrendService from '../components/liveReports/diagram/TrendService'

export const REALTIME_PORT = "8007"

const LiveReports = () => {
  return (
    <div className="LiveReports text-left m-2 text-gray-700 pr-1">
      <div className="Title text-xl font-semibold pb-3">
        Live Report
      </div>
      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Ketersediaan Tempat Tidur Per Kelas</p>       
          <BedAvailability />
        </div>
        <div className="grow basis-2/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Trend Pelayanan Pasien</p>
          <TrendService />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Absensi Pegawai</p>
          <PresensiPegawai />
        </div>
        <div className="grow basis-3/5 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pasien Berdasarkan Instalasi</p>       
          <KunjunganInstalasi />
        </div>
        <div className="grow basis-1/5 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Asal Rujukan</p>       
          <Rujukan />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Kelompok Pasien</p>
          <KelompokPasien />
        </div>
        <div className="grow basis-2/5 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pasien Berdasarkan Usia dan Jenis Kelamin</p>       
          <GenderAge />
        </div>
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan per Jenis Produk</p>
          <PendapanJenisProduk />
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-2/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan per Instalasi</p>
          <PendapatanInstalasi />
        </div>
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan Berdasarkan Cara Bayar</p>       
          <CaraBayar />
        </div>
        <div className="grow basis-2/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan per Kelas</p>       
          <PendapanKelas />
        </div>
      </div>

    </div>
  )
}

export default LiveReports