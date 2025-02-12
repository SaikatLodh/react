import { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createuser } from "./api";
const Formhandel = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    state: "",
    section: "",
    classes: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.city) {
      errors.city = "City is required";
    }

    if (!formData.address) {
      errors.address = "Address is required";
    }
    if (!formData.state) {
      errors.state = "State is required";
    }
    if (!formData.section) {
      errors.section = "Section is required";
    }
    if (!formData.classes) {
      errors.classes = "Classes is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    setLoading(true);
    createuser(data)
      .then((response) => {
        setLoading(false);
        toast.success(`${response?.message}`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Product Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            fullWidth
            margin="normal"
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
          />

          <TextField
            fullWidth
            margin="normal"
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            error={!!errors.section}
            helperText={errors.section}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Classes"
            name="classes"
            value={formData.classes}
            onChange={handleChange}
            error={!!errors.classes}
            helperText={errors.classes}
          />

          {loading ? (
            <Button
              disabled={true}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: 10 }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: 10 }}
            >
              Submit
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default Formhandel;
