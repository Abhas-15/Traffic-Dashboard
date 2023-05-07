import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Roads.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Airport Road-Outer Ring Road Road", 18908424, "12 Jan 2020"),
  createData("MG Road-Koramangala Road", 18908423, "12 Jan 2020"),
];

const makeStyle = (status) => {
  if (status === "No Injury") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Fatal") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#f5f5dc",
      color: "#e1ad01",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Tab">
      <h3>Week's Slowest Roads</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Route</TableCell>
              <TableCell align="left">Road Number</TableCell>
              <TableCell align="left">Date</TableCell>
              {/* <TableCell align="left">Status</TableCell> */}
              {/* <TableCell align="left"></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                {/* <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell> */}
                {/* <TableCell align="left" className="Details">
                  Vehicle Details
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
