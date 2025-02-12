import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./api";
import { toast } from "react-toastify";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isvalidate = () => {
    const error = {};
    if (!formData.email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "Invalid email";
    }
    if (!formData.password) {
      error.password = "Password is required";
    }

    setError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isvalidate()) {
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    setLoading(true);

    login(data)
      .then((response) => {
        if (response.message) {
          setLoading(false);
          toast.success(`${response.message}`);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error?.response?.data?.message) {
          toast.error(`${error?.response?.data?.message}`);
        }
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <div className="register">
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <Link to="/register">
              <Typography variant="h5" gutterBottom>
                register here
              </Typography>
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!error.email}
              helperText={error.email}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!error?.password}
              helperText={error?.password}
            />
            {loading ? (
              <Button
                disabled={true}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            )}
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
