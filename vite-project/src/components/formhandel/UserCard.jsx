import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { getapi } from "../../api";
import { Link } from "react-router-dom";

const UserCard = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getapi()
      .then((data) => {
        setUserData(data);
        setloading(false);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="px-4x">
      {loading ? (
        <div className=" life-test">
          {" "}
          <p>Loading...</p>{" "}
        </div>
      ) : (
        <div>
          <Link to="/addduser">
            <Button variant="outlined" sx={{ mt: 4 }}>
              Outlined
            </Button>
          </Link>

          <TableContainer component={Paper} sx={{ mt: 5 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Section</TableCell>
                  <TableCell>Classes</TableCell>
                  <TableCell>Slug</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {[...userData].reverse().map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.city}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.state}</TableCell>
                    <TableCell>{user.section}</TableCell>
                    <TableCell>{user.classes}</TableCell>
                    <TableCell>{user.slug}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default UserCard;
