import React, { useState, useEffect } from "react";
import { tgl_awal, tgl_akhir } from "../../NavbarContents";
import { Tooltip } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { DataGrid, GridToolbar, } from "@mui/x-data-grid"
import { columns, rows } from "../datatable/tableDetailCard"
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown, } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
// import { GetPredict, GetTrend } from "../../GetIndicator";


function GetTrend(value) {
  if (value > 0) {
    return (<span className="text-white flex"><IoMdArrowDropup/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-500 flex"><IoMdArrowDropdown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-gray-700 flex"> ⇋ {Math.abs(value)}%</span>);
  }
}

function GetPredict(value) {
  if (value > 0) {
    return (<span className="text-white flex"><HiOutlineChevronDoubleUp/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-500 flex"><HiOutlineChevronDoubleDown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-gray-700 flex"> ⇋ {Math.abs(value)}%</span>);
  }
}

function expandDate(date) {
  var date = new Date(date);
  var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var extractDate = `${year}-${month+1}-${day}`;

  return extractDate;
};

const CardKunjungan = ({type}) => {
  let card;
  const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

  // temporary
  const value = [59, 89, 76, 50, 2, 3, 12, 6, 19, 21, 76, 50, 2, 3];
  const [data, setdata] = useState({
    judul: "",
    label: "",
    value: 0,
    trend: 0,
    predict: 0,
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/kunjungan/card_pasien?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          value: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);

  switch (type) {
    case "pasien-rawat-inap":
      card = { img: "images/icon-pasien-rawat-inap.png", trend: -16.8, predict: 18.4, title: "Pasien Rawat Inap", value: value[2], fill: "bg-[#6e9ffe]/90" }; break;
    case "pasien-igd":
      card = { img: "images/icon-pasien-emergency.png", trend: 28.8, predict: 36, title: "Pasien IGD", value: value[1], fill: "bg-[#ffba94]/90" }; break;
    case "pasien-rawat-jalan":
      card = { img: "images/icon-pasien-rawat-jalan.png", trend: 17.3, predict: 9.4, title: "Pasien Rawat Jalan", value: value[0], fill: "bg-[#b494ff]/90" }; break;
    case "pasien-radiologi":
      card = { img: "images/icon-radiologi.png", trend: 26, predict: -4.7, title: "Pasien Radiologi", value: value[3], fill: "bg-[#94d9ff]/90" }; break;
    case "pasien-laboratorium":
      card = { img: "images/icon-laboratorium.png", trend: 33.4, predict: 7.8, title: "Pasien Laboratorium", value: value[4], fill: "bg-[#aaca55]/90" }; break;
    case "pasien-rehabilitasi":
      card = { img: "images/icon-pasien.png", trend: 32.6, predict: -19.2, title: "Pasien Rehabilitasi", value: value[5], fill: "bg-[#55caaf]/90" }; break;
    case "pasien-bedah":
      card = { img: "images/icon-bedah.png", trend: 5.6, predict: 9.6, title: "Pasien Bedah", value: value[6], fill: "bg-[#ff94aa]/90" }; break;
    case "farmasi":
      card = { img: "images/icon-farmasi.png", trend: -0.2, predict: 12.4, title: "Pasien Farmasi", value: value[7], fill: "bg-[#38b497]/90" }; break;
    default:
      break;
  }
  return (
    <div className="CardKunjungan grow">
      <div className={card.fill + " grid-cols-2 flex p-2 bg-white rounded-lg text-[#eeeff1] drop-shadow-lg"}>
        <div className="col-span-1 text-left ">
          <p className="title text-sm pb-2.5 font-semibold">{card.title}</p>
          <div className="value text-3xl pb-1.5 font-semibold flex">
						{card.value}
            <Tooltip title="Trend" placement="right">
              <sup className="flex text-base font-normal cursor-default">
                {GetTrend(card.trend)}
              </sup>
            </Tooltip>
					</div>
          <p onClick={handleOpen} className="text-xs text-left cursor-pointer">details ⟶</p>
					<img className="w-16 pb-2.5 absolute top-2 right-2" src={process.env.PUBLIC_URL + card.img} alt="icon" />
					<p className="padding w-20"></p>
          <Tooltip title="Predict" placement="left">
		  			<p className="flex text-xs absolute bottom-2 right-5 cursor-default">
	  					{GetPredict(card.predict)}
  					</p>
          </Tooltip>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal rounded-lg ml-[10%] mr-[10%] mt-10 bg-[#eeeff1] p-5">
          <div className="header text-2xl pb-2 flex">
            {card.title}
            <p onClick={handleClose} className="close absolute right-6 mr-[10%] text-3xl cursor-pointer">x</p>
          </div>
          {/* Data Table */}
          <div className="body">
            {card.title === "Pasien Rawat Jalan"
              ? 
              <div className="table-detail">
              <Box sx={{ width: '100%', height: 420 }}>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // components={{ Toolbar: GridToolbar, }}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                disableExport
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },}}
                disableVirtualization
                />
              </Box>
            </div>
              : 
              <p>Data Tidak tersedia</p>
            }
            
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CardKunjungan