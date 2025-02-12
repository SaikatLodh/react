import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getUser } from "./api";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Getuser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div>
      <Link to="/addduser">
        <Button variant="outlined" sx={{ mt: 4 }}>
          Post
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">phone</TableCell>
              <TableCell align="right">city</TableCell>
              <TableCell align="right">address</TableCell>
              <TableCell align="right">state</TableCell>
              <TableCell align="right">section</TableCell>
              <TableCell align="right">classes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...user]?.reverse()?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{row.section}</TableCell>
                <TableCell align="right">{row.classes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Getuser;
