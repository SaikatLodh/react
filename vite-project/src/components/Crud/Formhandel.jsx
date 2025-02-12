import { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { createProduct } from "../../api";
import { useNavigate } from "react-router-dom";

const Formhandel = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.category) tempErrors.category = "category is required";
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    //   tempErrors.email = "Invalid email format";
    if (!formData.price) tempErrors.price = "Price  is required";
    if (!formData.description)
      tempErrors.description = "Description is required";
    if (!formData.image) tempErrors.image = "Image is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    createProduct(data)
      .then((data) => {
        if (data.message) {
          navigate("/");
        }
      })
      .catch((error) => alert(error));
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
            label="Category"
            name="category"
            type="category"
            value={formData.category}
            onChange={handleChange}
            error={!!errors.category}
            helperText={errors.category}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            name="price"
            type="tel"
            value={formData.price}
            onChange={handleChange}
            error={!!errors.price}
            helperText={errors.price}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginTop: 10 }}
          />
          {errors.photo && (
            <Typography color="error">{errors.photo}</Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: 10 }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Formhandel;
