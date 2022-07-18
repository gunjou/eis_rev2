import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

// const itemColumns = [
// 	{ field: "id", headerName: "ID", width: 60, },
// 	{ field: "itemName", headerName: "Item Name", width: 400, editable: true, },
// 	{ field: "itemType", headerName: "Item Type", width: 120, editable: true, },
// 	{ field: "unitType", headerName: "Unit Type", width: 120, editable: true, },
// 	{ field: "qty", headerName: "Qty", type: "number", width: 90, editable: true, },
// 	{ field: "price", headerName: "Price (IDR)", type: "number", width: 150, editable: true, },
// 	{ field: "totalCost", headerName: "Total Cost", type: "number", width: 200, editable: true, },
// 	{ field: "date", headerName: "Date", width: 110, editable: true, },
// 	{ field: "status", headerName: "Status", width: 110, editable: true, },
// ];

const allItemRows = [
	{ id: 1, itemName: "RINGER LACTAT 500 ML INF*", itemType: "Obat", unitType: "BOTOL", qty: 22498, price: 8670, totalCost: 189768960, date: "2022-07-06", status: 'optimal' },
	{ id: 2, itemName: "OMEPRAZOLE 40 MG INJ - OGB DEXA (E-CAT)", itemType: "Obat", unitType: "VIAL", qty: 7850, price: 11249, totalCost: 85154930, date: "2022-07-06", status: 'optimal' },
	{ id: 3, itemName: "LEVOFLOXACIN 500 MG INFUS MBF", itemType: "Obat", unitType: "BOTOL", qty: 20045, price: 23980, totalCost: 480007660, date: "2022-07-06", status: 'optimal' },
	{ id: 4, itemName: "ONDANSETRON IV/IM 4 MG*", itemType: "Obat", unitType: "AMPUL", qty: 0, price: 1338, totalCost: 0, date: "2022-07-06", status: 'optimal' },
	{ id: 5, itemName: "kertas ekg 63 mm x 100mm x 300 lembar 14", itemType: "BHP", unitType: "LEMBAR", qty: 2, price: 112000, totalCost: 224000, date: "2022-07-06", status: 'understock' },
	{ id: 6, itemName: "kertas ekg 63 x 30 roll 27", itemType: "BHP", unitType: "ROLL", qty: 12, price: 138600, totalCost: 1663200, date: "2022-07-06", status: 'understock' },
	{ id: 7, itemName: "CHANNA 500MG (KIMIA FARMA)", itemType: "Obat", unitType: "KAPSUL", qty: 22929, price: 7563, totalCost: 170152374, date: "2022-07-06", status: 'overstock' },
	{ id: 8, itemName: "LEVOFLOXACIN 750 MG/150 ML INF *BTT", itemType: "Obat", unitType: "SOF", qty: 880, price: 92813, totalCost: 72951018, date: "2022-07-06", status: 'optimal' },
	{ id: 9, itemName: "CEFTAZIDIM INJEKSI 1 G INJ (E-CAT)", itemType: "Obat", unitType: "VIAL", qty: 40077, price: 21325, totalCost: 854300825, date: "2022-07-06", status: 'optimal' },
	{ id: 10, itemName: "kertas ekg 145mm x 150mm x 400 lembar", itemType: "BHP", unitType: "LEMBAR", qty: 0, price: 391000, totalCost: 0, date: "2022-07-06", status: 'optimal' },
];

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

function GetStatus(proops) {
  if (proops === 'understock') {
    return(<div className=" text-center rounded text-white bg-[#F78983]">understock</div>)
  } else if (proops === 'overstock') {
    return(<div className=" text-center rounded text-white bg-[#ffba94]">overstock</div>)
  } else {
    return(<div className=" text-center rounded text-white bg-[#55caaf]">optimal</div>)
  }
}


const ItemDetail = () => {
	const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='ItemDetail'>
			<Paper sx={{ width: "99%", overflow: "hidden" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">ID</TableCell>
                <TableCell className="tableCell">Item Name</TableCell>
                <TableCell className="tableCell">Item Type</TableCell>
                <TableCell className="tableCell">Unit Type</TableCell>
                <TableCell className="tableCell" align="right">
                  Qty
                </TableCell>
                <TableCell className="tableCell" align="right">
                  Price (IDR)
                </TableCell>
                <TableCell className="tableCell" align="right">
                  Total Cost
                </TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allItemRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id} </TableCell>
                    <TableCell className="tableCell">{row.itemName}</TableCell>
                    <TableCell className="tableCell">{row.itemType}</TableCell>
                    <TableCell className="tableCell">{row.unitType}</TableCell>
                    <TableCell className="tableCell" align="right">{row.qty}</TableCell>
                    <TableCell className="tableCell" align="right">{formatter.format(row.price)}</TableCell>
                    <TableCell className="tableCell" align="right">{formatter.format(row.totalCost)}</TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="">
                      {/* <div className=" text-center text-white rounded bg-red-700">{row.status}</div> */}
                      {GetStatus(row.status)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={allItemRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
		</div>
  )
}

export default ItemDetail