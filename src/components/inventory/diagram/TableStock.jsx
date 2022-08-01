import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

const rows = [
	{ id: 1, type: 'Obat', name:'RINGER LACTAT 500 ML INF*', supplier: 'Dexa Medica', qty: 22498, price: 8670, totalCost: 189768960, status: 'optimal' },
	{ id: 2, type: 'Obat', name:'OMEPRAZOLE 40 MG INJ - OGB DEXA (E-CAT)', supplier: 'Medikon Prima Laboratories', qty: 7850, price: 11249, totalCost: 85154930, status: 'optimal' },
	{ id: 3, type: 'Obat', name:'LEVOFLOXACIN 500 MG INFUS MBF', supplier: 'Bio Farma (Persero)', qty: 20045, price: 23980, totalCost: 480007660, status: 'optimal' },
	{ id: 4, type: 'Obat', name:'ONDANSETRON IV/IM 4 MG*', supplier: 'Bio Farma (Persero)', qty: 0, price: 1338, totalCost: 0, status: 'optimal' },
	{ id: 5, type: 'BHP', name:'kertas ekg 63 mm x 100mm x 300 lembar 14', supplier: 'Ambumax', qty: 2, price: 112000, totalCost: 224000, status: 'understock' },
	{ id: 6, type: 'BHP', name:'kertas ekg 63 x 30 roll 27', supplier: 'Ambumax', qty: 12, price: 138600, totalCost: 1663200, status: 'understock' },
	{ id: 7, type: 'Obat', name:'CHANNA 500MG (KIMIA FARMA)', supplier: 'Etercon Pharma', qty: 22929, price: 7563, totalCost: 170152374, status: 'overstock' },
	{ id: 8, type: 'Obat', name:'LEVOFLOXACIN 750 MG/150 ML INF *BTT', supplier: 'Etercon Pharma', qty: 880, price: 92813, totalCost: 72951018, status: 'optimal' },
	{ id: 9, type: 'Obat', name:'CEFTAZIDIM INJEKSI 1 G INJ (E-CAT)', supplier: 'Bio Farma (Persero)', qty: 40077, price: 21325, totalCost: 854300825, status: 'optimal' },
	{ id: 10, type: 'BHP', name:'kertas ekg 145mm x 150mm x 400 lembar', supplier: 'Ambumax', qty: 0, price: 391000, totalCost: 0, status: 'optimal' },
];

const TableStock = () => {
	const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className='TableStock grow'>
			<Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">No</TableCell>
                <TableCell className="tableCell">Jenis</TableCell>
                <TableCell className="tableCell">Nama</TableCell>
                <TableCell className="tableCell">Supplier</TableCell>
                <TableCell className="tableCell" align="right">Kuantitas</TableCell>
                <TableCell className="tableCell" align="right">Harga Satuan</TableCell>
                <TableCell className="tableCell" align="right">Total Harga</TableCell>
                <TableCell className="tableCell" align="center">Status</TableCell>
                {/* <TableCell className="tableCell" align="right">Pasien</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id} </TableCell>
                    <TableCell className="tableCell text-sm">{row.type}</TableCell>
                    <TableCell className="tableCell text-sm">{row.name}</TableCell>
                    <TableCell className="tableCell text-sm">{row.supplier}</TableCell>
                    <TableCell className="tableCell text-sm" align="right">{row.qty}</TableCell>
                    <TableCell className="tableCell text-sm" align="right">{formatter.format(row.price)}</TableCell>
                    <TableCell className="tableCell text-sm" align="right">{formatter.format(row.totalCost)}</TableCell>
                    <TableCell className="tableCell text-sm" align="center">{GetStatus(row.status)}</TableCell>
                    {/* <TableCell className="tableCell text-sm" align="right">{row.jumlah}</TableCell> */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
		</div>
  )
}

export default TableStock