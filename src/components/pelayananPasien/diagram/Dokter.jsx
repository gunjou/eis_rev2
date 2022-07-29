import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rows = [
	{ id: 1, namaDokter: 'dr. H.M. Darwis Dahlan, Sp.B', jumlah: 16 },
	{ id: 2, namaDokter: 'dr. Tri Seno Adji Budhi, Sp.OG', jumlah: 62 },
	{ id: 3, namaDokter: 'dr. Widianto Prasetyawan, Sp.U', jumlah: 27 },
	{ id: 4, namaDokter: 'dr. Ketut Rama Wijaya, Sp.OG', jumlah: 17 },
	{ id: 5, namaDokter: 'dr. Tedy Teguh Satriadi, Sp.OG', jumlah: 70 },
	{ id: 6, namaDokter: 'dr. Tonny Hartono, Sp.A', jumlah: 20 },
	{ id: 7, namaDokter: 'dr. Daniel Susatyo Wirawan, Sp.A', jumlah: 40 },
	{ id: 8, namaDokter: 'dr. Sudhana Sogata, Sp.RM', jumlah: 25 },
	{ id: 9, namaDokter: 'dr. Julhismira, Sp.RAD', jumlah: 15 },
	{ id: 10, namaDokter: 'dr. Adi Aryanto, Sp.OT', jumlah: 5 },
];

const Dokter = () => {
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
    <div className="Dokter">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {/* <TableCell className="tableCell">No</TableCell> */}
                <TableCell className="tableCell">Nama Dokter</TableCell>
                <TableCell className="tableCell" align="right">Pasien</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    {/* <TableCell className="tableCell">{row.id} </TableCell> */}
                    <TableCell className="tableCell text-sm">{row.namaDokter}</TableCell>
                    <TableCell className="tableCell text-sm" align="right">{row.jumlah}</TableCell>
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

export default Dokter