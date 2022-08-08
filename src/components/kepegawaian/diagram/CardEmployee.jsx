import { Tooltip } from "@mui/material";
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function GetTrend(value) {
  if (value > 0) {
    return (<span className="text-green-300 flex"><IoMdArrowDropup/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-500 flex"><IoMdArrowDropdown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-white flex"> ⇋ {Math.abs(value)}%</span>);
  }
}

function GetPredict(value) {
  if (value > 0) {
    return (<span className="text-green-300 flex"><HiOutlineChevronDoubleUp/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-500 flex"><HiOutlineChevronDoubleDown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-white flex"> ⇋ {Math.abs(value)}%</span>);
  }
}

const CardEmployee = ({type}) => {
  let card;
  switch (type) {
		case "semua":
				card = { title: "Semua Pegawai", value: 1202, trend: 1.5, predict: 0.0, fill: "#b494ff"}; break;
    case "asn":
        card = { title: "Aparatur Sipil Negara", value: 840, trend: 4.0, predict: 1.0, fill: "#F78983"}; break;
    case "pttd":
        card = { title: "Pegawai Tidak Tetap Daerah", value: 5, trend: 0.5, predict: 0.0, fill: "#6e9ffe"}; break;
    case "non-asn":
        card = { title: "Pegawai Non ASN", value: 319, trend: 0.5, predict: 0.0, fill: "#ff94aa"}; break;
    case "paruh-waktu":
        card = { title: "Dokter Paruh Waktu", value: 27, trend: 20.0, predict: 0.0, fill: "#55caaf"}; break;
    case "kontrak":
        card = { title: "Dokter Kontrak", value: 11, trend: 25.0, predict: 0.0, fill: "#ffba94"}; break;
    default:
        break;
}
  return (
    <div className="CardEmployee grow text-white">
      <div className={"bg-["+card.fill+"]/90 p-2 rounded-md drop-shadow-lg"}>
        <div className="flex ">
          <div className="text-base md:text-sm sm:text-xs  flex text-left font-semibold">
						{card.title}
            <Tooltip title="Trend" placement="top">
              <span className="flex text-sm absolute right-2 top-10">
                {GetTrend(card.trend)}
              </span>
            </Tooltip>
					</div>
        </div>
        <div className="text-3xl p-2 font-semibold">{card.value}</div>
        <div className="flex gap-4">
          <div className="flex pb-0.5">
            <p className="text-xs text-left font-normal cursor-pointer">details ⟶</p>
            <p className="absolute right-2 bottom-2 flex">
              <span className="text-sm pr-1.5">Predict :</span>
              <span className="flex text-sm">
                {GetPredict(card.predict)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEmployee