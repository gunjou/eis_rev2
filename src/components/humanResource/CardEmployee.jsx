import React from "react";
import { HiOutlineChevronDoubleUp, } from "react-icons/hi";
import { CgArrowsExchange } from "react-icons/cg";

const CardEmployee = ({type}) => {
	let card;
  switch (type) {
		case "finance":
				card = { title: "Semua Pegawai", value: 1202, trend: 1.5, predict: 0.0, fill: "#b494ff"}; break;
    case "kunjungan":
        card = { title: "Aparatur Sipil Negara (ASN)", value: 840, trend: 4.0, predict: 0.0, fill: "#df3493"}; break;
    case "pelayanan":
        card = { title: "Pegawai Tidak Tetap Daerah", value: 5, trend: 0.5, predict: 0.0, fill: "#ea94ff"}; break;
    case "inventory":
        card = { title: "Pegawai Non ASN", value: 319, trend: 0.5, predict: 0.0, fill: "#6e9ffe"}; break;
    case "medical-record":
        card = { title: "Dokter Paruh Waktu", value: 27, trend: 20.0, predict: 0.0, fill: "#55caaf"}; break;
    case "human-resource":
        card = { title: "Dokter Kontrak", value: 11, trend: 25.0, predict: 0.0, fill: "#ffba94"}; break;
    default:
        break;
}
  return (
    <div className='CardEmployee grow text-white'>
			<div className={"bg-["+card.fill+"]/90 p-2 rounded-md drop-shadow-lg"}>
        <div className="flex ">
          <div className="text-lg flex text-left font-semibold">
						{card.title}
            <span className="flex text-sm absolute right-2">
              {card.trend}%
              <HiOutlineChevronDoubleUp className="text-sm"/>
            </span>
					</div>
        </div>
        <div className="text-3xl p-2 font-semibold">{card.value}</div>
        <div className="flex gap-4">
          <div className="flex pb-0.5">
            <span className="text-sm pr-1.5">Predict</span>
            <span className="flex text-sm">
              {card.predict}%
              <CgArrowsExchange className="text-sm"/>
            </span>
          </div>
        </div>
      </div>
		</div>
  )
}

export default CardEmployee