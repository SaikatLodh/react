import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "./api";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    answer: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isvalidate = () => {
    const error = {};
    if (!formData.name) {
      error.name = "Name is required";
    }
    if (!formData.email) {
      error.email = "Email is required";
    }
    if (!formData.password) {
      error.password = "Password is required";
    }
    if (!formData.phone) {
      error.phone = "Phone is required";
    }
    if (!formData.answer) {
      error.answer = "Answer is required";
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
    register(data)
      .then((response) => {
        if (response?.message) {
          setLoading(false);
          toast.success(`${response.message}`);
          navigate("/login");
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
              register
            </Typography>
            <Link to="/">
              <Typography variant="h5" gutterBottom>
                Login here
              </Typography>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!error?.name}
              helperText={error?.name}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!error?.email}
              helperText={error?.email}
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
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={!!error?.phone}
              helperText={error?.phone}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              error={!!error?.answer}
              helperText={error?.answer}
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
                Register
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Register
              </Button>
            )}
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
