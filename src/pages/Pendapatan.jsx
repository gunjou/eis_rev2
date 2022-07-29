import React from 'react'
import CaraBayar from '../components/pendapatan/diagram/CaraBayar'
import InstalasiPendapatan from '../components/pendapatan/diagram/InstalasiPendapatan'
import JenisProdukPendapatan from '../components/pendapatan/diagram/JenisProdukPendapatan'
import KelasPendapatan from '../components/pendapatan/diagram/KelasPendapatan'
import TrendPendapatan from '../components/pendapatan/diagram/TrendPendapatan'

const Pendapatan = () => {
  return (
    <div className='Pendapatan text-left m-2 text-gray-700 pr-1'>
      <div className="Title text-xl font-semibold pb-3">
        Pendapatan
      </div>

      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-2/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Tren Pendapatan</p>       
          <TrendPendapatan />
        </div>
        <div className="grow basis-1/2 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan Berdasarkan Instalasi</p>
          <InstalasiPendapatan />
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan Berdasarkan Kelas</p>
          <KelasPendapatan />
        </div>
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan Berdasarkan Jenis Produk</p>       
          <JenisProdukPendapatan />
        </div>
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Pendapatan Berdasarkan Cara bayar</p>
          <CaraBayar />
        </div>
      </div>

    </div>
  )
}

export default Pendapatan