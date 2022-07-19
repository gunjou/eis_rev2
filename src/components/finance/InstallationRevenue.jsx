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

const rows = [
	{ id: 1, namaInstalasi: 'Instalasi Farmasi', jumlah: 16725000 },
	{ id: 2, namaInstalasi: 'Instalasi Gawat Darurat', jumlah: 6245000 },
	{ id: 3, namaInstalasi: 'Instalasi Laboratorium', jumlah: 2757700 },
	{ id: 4, namaInstalasi: 'Instalasi Rawat Jalan', jumlah: 17725000 },
	{ id: 5, namaInstalasi: 'Instalasi Rawat Inap', jumlah: 7069900 },
	{ id: 6, namaInstalasi: 'Instalasi Pemulasaran Jenazah', jumlah: 200000 },
	{ id: 7, namaInstalasi: 'Instalasi Radiologi', jumlah: 4005000 },
	{ id: 8, namaInstalasi: 'Instalasi Bedah Sentral dan Ruang Rawat Sehari', jumlah: 250000 },
	{ id: 9, namaInstalasi: 'Instalasi Ambulance', jumlah: 150000 },
];

const InstallationRevenue = () => {
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
    <div className='InstallationRevenue'>
			<Paper sx={{ width: "99%", overflow: "hidden" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">No</TableCell>
                <TableCell className="tableCell">Nama Instalasi</TableCell>
                <TableCell className="tableCell" align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id} </TableCell>
                    <TableCell className="tableCell">{row.namaInstalasi}</TableCell>
                    <TableCell className="tableCell" align="right">{formatter.format(row.jumlah)}</TableCell>
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

export default InstallationRevenue