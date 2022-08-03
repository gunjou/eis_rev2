import React from 'react'
import CaraBayar from '../components/pengeluaran/diagram/CaraBayar'
import InstalasiPengeluaran from '../components/pengeluaran/diagram/InstalasiPengeluaran'
import JenisProdukPengeluaran from '../components/pengeluaran/diagram/JenisProdukPengeluaran'
import KlaimAsuransi from '../components/pengeluaran/diagram/KlaimAsuransi'
import TrendPengeluaran from '../components/pengeluaran/diagram/TrendPengeluaran'

const Pengeluaran = () => {
  return (
    <div className='Pengeluaran text-left m-2 text-gray-700 pr-1'>
      <div className="Title text-xl font-semibold pb-3">
        Pengeluaran
      </div>

      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-2/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Tren Pengeluaran</p>       
          <TrendPengeluaran />
        </div>
        <div className="grow basis-1/2 rounded-lg bg-[#eeeff1] p-2">
        {/* Pengeluaran Berdasarkan Instalasi */}
          <InstalasiPengeluaran />
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
        {/* Pengeluaran Berdasarkan Rekanan (Klaim Asuransi) */}
          <KlaimAsuransi />
        </div>
        <div className="grow basis-1/3 rounded-lg bg-[#eeeff1] p-2">
        {/* Pengeluaran Berdasarkan Jenis Produk */}
          <JenisProdukPengeluaran />
        </div>
        <div className="grow basis-1/5 rounded-lg bg-[#eeeff1] p-2">
        {/* Pengeluaran Berdasarkan Cara bayar */}
          <CaraBayar />
        </div>
      </div>

    </div>
  )
}

export default Pengeluaran