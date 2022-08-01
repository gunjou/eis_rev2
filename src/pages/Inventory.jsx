import React from 'react'
import CardKPI from '../components/inventory/diagram/CardKPI'
import Supplier from '../components/inventory/diagram/Supplier'
import TableStock from '../components/inventory/diagram/TableStock'
import TopProduct from '../components/inventory/diagram/TopProduct'
import TrendStockMoving from '../components/inventory/diagram/TrendStockMoving'
import TypeAset from '../components/inventory/diagram/TypeAset'
import TypeProduct from '../components/inventory/diagram/TypeProduct'

const Inventory = () => {
  return (
    <div className='Inventory text-left m-2 text-gray-700 pr-1'>
      <div className="Title text-xl font-semibold">
        Inventory
      </div>

      {/* Card KPI */}
      <div className="Top pb-3">
        <span className="gap-8 flex pb-1">
          <CardKPI type="optimal" />
          <CardKPI type="understock" />
          <CardKPI type="overstock" />
        </span>
      </div>

      {/* Row 1 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-2/3 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'> Tren Stock Moving</p>       
          <TrendStockMoving />
        </div>
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Stok Berdasarkan Supplier</p>
          <Supplier />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row gap-3 pb-3">
        <div className="grow basis-1/2 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Top Produk N : In | Out</p>
          <TopProduct />
        </div>
        <div className="grow basis-1/5 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Jenis Produk</p>       
          <TypeProduct />
        </div>
        <div className="grow basis-1/4 rounded-lg bg-[#eeeff1] p-2">
          <p className='pb-2'>Jenis Aset</p>
          <TypeAset />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-row">
        <TableStock />
      </div>

    </div>
  )
}

export default Inventory