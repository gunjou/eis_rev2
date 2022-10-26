// import *, { useEffect, useState } as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { expandDate, GetSortOrder } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

const rows = [
  {id: 1, name: 'TAMOFEN 10 MG TAB (EC)', in: 30, out: 11, sisa: 19, },
  {id: 2, name: 'VITAMIN B-KOMPLEK (REG)', in: 40, out: 15, sisa: 25, },
  {id: 3, name: 'ACETYLCYSTEINE 200 MG TAB (EC)', in: 70, out: 34, sisa: 36, },
  {id: 4, name: 'ABILIFY 15 MG TAB (EC)', in: 40, out: 20, sisa: 20, },
  {id: 5, name: 'VALSARTAN NI-160 MG TAB (REG)', in: 25, out: 6, sisa: 19, },
  {id: 6, name: 'TRIAMCINOLON 4 MG TAB (EC)', in: 36, out: 9, sisa: 27, },
  {id: 7, name: 'RINGER LACTAT 500 ML INF*', in: 25, out: 6, sisa: 19, },
  {id: 8, name: 'OMEPRAZOLE 40 MG INJ - OGB DEXA (E-CAT)', in: 36, out: 9, sisa: 27, },
  {id: 9, name: 'LEVOFLOXACIN 500 MG INFUS MBF', in: 38, out: 11, sisa: 27, },
  {id: 10, name: 'ONDANSETRON IV/IM 4 MG*', in: 32, out: 10, sisa: 22, },
];

const TopProduct = () => {
	const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const [data, setData] = useState({
    judul: "",
    label: "",
    produk: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/inventory/top_produk?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          produk: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  var new_data = []
  try {
    data.produk.sort(GetSortOrder("stock"))
    data.produk.map((row, idx) => new_data.push({index: idx+1, name: row.name, sisa: row.stock}))
  }
  catch(err) {
    
  }
  // console.log(new_data)

  return (
    <div className='TopProduct'>
			<Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">No</TableCell>
                <TableCell className="tableCell">Nama</TableCell>
                <TableCell className="tableCell" align="right">In</TableCell>
                <TableCell className="tableCell" align="right">Out</TableCell>
                <TableCell className="tableCell" align="right">Sisa Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {new_data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.index}>
                    <TableCell className="tableCell">{row.index} </TableCell>
                    <TableCell className="tableCell text-sm">{row.name}</TableCell>
                    <TableCell className="tableCell text-sm" align="right">{0}</TableCell>
                    <TableCell className="tableCell text-sm" align="right">{0}</TableCell>
                    {/* <TableCell className="tableCell text-sm" align="right">{row.in}</TableCell>
                    <TableCell className="tableCell text-sm" align="right">{row.out}</TableCell> */}
                    <TableCell className="tableCell text-sm" align="right">{row.sisa}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
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

export default TopProduct