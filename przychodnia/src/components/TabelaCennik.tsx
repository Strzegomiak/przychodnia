import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({ valuesArray }: any) {
  const rows = valuesArray.map((x: any) => {
    return {
      name: x.nazwa,
      price: x.cenaAlternatywna ? x.cenaAlternatywna : x.cena,
    };
  });

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 800,
        minWidth: 350,
        padding: "5px",
      }}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: "Poppins, sans-serif ",
                fontWeight: "bold",
              }}
            >
              Nazwa usługi
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontFamily: "Poppins, sans-serif ",
                fontWeight: "bold",
              }}
            >
              Cena (zł)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "Poppins, sans-serif ",
                  fontWeight: "300",
                  wordBreak: "break-word",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
