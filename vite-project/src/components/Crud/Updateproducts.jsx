import { useEffect, useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { updateproduct, getsingleProduct } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

const Updateproducts = () => {
  const { id } = useParams();
  const [singledata, setSingledata] = useState({});

  useEffect(() => {
    getsingleProduct(id)
      .then((data) => setSingledata(data.data))
      .catch((error) => alert(error));
  }, [id]);

  useEffect(() => {
    if (singledata) {
      setFormData({
        name: singledata.name || "",
        category: singledata.category || "",
        price: singledata.price || "",
        description: singledata.description || "",
        image: null, // File inputs cannot be pre-filled
      });
    }
  }, [singledata]);
  const [formData, setFormData] = useState({
    name: singledata.name,
    category: "",
    price: "",
    description: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    updateproduct(id, data)
      .then((data) => {
        if (data.message) {
          navigate("/");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Update Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              name="category"
              type="category"
              value={formData.category}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              name="price"
              type="tel"
              value={formData.price}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginTop: 10 }}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: 10 }}
            >
              Update
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Updateproducts;
