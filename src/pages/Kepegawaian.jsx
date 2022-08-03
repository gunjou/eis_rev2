import React from 'react'
import CardEmployee from '../components/kepegawaian/diagram/CardEmployee'
import CategoryPegawai from '../components/kepegawaian/diagram/CategoryPegawai'
import EducationGender from '../components/kepegawaian/diagram/EducationGender'
import InstalasiPegawai from '../components/kepegawaian/diagram/InstalasiPegawai'
import StatusEmployee from '../components/kepegawaian/diagram/StatusEmployee'

const Kepegawaian = () => {
  return (
    <div className='Kepegawaian text-left m-2 text-gray-700 pr-1'>
      <div className="Title text-xl font-semibold pb-3">
        Kepegawaian
      </div>
      {/* Card */}
      <div className="flex rounded-lg pb-4">
        <div className="grid grid-cols-6 grow gap-3">
          <CardEmployee type={"semua"} />
          <CardEmployee type={"asn"} />
          <CardEmployee type={"pttd"} />
          <CardEmployee type={"non-asn"} />
          <CardEmployee type={"paruh-waktu"} />
          <CardEmployee type={"kontrak"} />
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-2/3 rounded-lg bg-[#eeeff1] p-2">
        {/* Kategori Pegawai */}
          <CategoryPegawai />
        </div>
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
        {/* Status Pegawai */}
          <StatusEmployee />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/6 rounded-lg bg-[#eeeff1] p-2">
        {/* Pendidikan dan Jenis Kelamin */}
          <EducationGender />
        </div>
        <div className="grow basis-1/2 rounded-lg bg-[#eeeff1] p-2">
        {/* Pegawai Berdasarkan Instalasi */}
          <InstalasiPegawai />
        </div>
      </div>

      {/* Row 3 */}
      {/* <div className="flex flex-row">
        < />
      </div> */}

    </div>
  )
}

export default Kepegawaian