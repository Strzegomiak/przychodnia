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
      name: `${x.nazwisko}`,
      specjalizacja: `${x.specjalizacja}`,
      days: x.dni,
    };
  });

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 900,
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
              Lekarz przyjmujący
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              Dni tygodnia
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                <span>{row.name}, </span>
                <span style={{ fontStyle: "italic" }}>{row.specjalizacja}</span>
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                {row.days}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
