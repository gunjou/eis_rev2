import React from 'react'
import BedAvailability from '../components/liveReports/diagram/BedAvailability'
import TrendService from '../components/liveReports/diagram/TrendService'

const LiveReports = () => {
  return (
    <div className="LiveReports text-left m-2 text-gray-700 pr-1">
      <div className="Title text-xl font-semibold">
        Live Report
      </div>
      {/* Card */}
      <div className="flex rounded-lg pb-4">
        {/* <div className="grid grid-cols-6 grow gap-3">
          <CardEmployee type={"semua"} />
          <CardEmployee type={"asn"} />
          <CardEmployee type={"pttd"} />
          <CardEmployee type={"non-asn"} />
          <CardEmployee type={"paruh-waktu"} />
          <CardEmployee type={"kontrak"} />
        </div> */}
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
        <div className="grow basis-1/6 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendidikan dan Jenis Kelamin</p>
          {/* <EducationGender /> */}
        </div>
        <div className="grow basis-1/2 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pegawai Berdasarkan Instalasi</p>       
          {/* <InstalasiPegawai /> */}
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-row">
        {/* < /> */}
      </div>

    </div>
  )
}

export default LiveReports