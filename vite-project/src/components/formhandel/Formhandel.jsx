import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { postapi } from "../../api";
import { useNavigate } from "react-router-dom";
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

  const [error, setError] = useState({});
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setError(validationErrors);
    setloading(true);
    postapi(formData)
      .then((data) => {
        if (data.message) {
          setloading(false);
          navigate("/");
        }
      })
      .catch((error) => alert(error) && setloading(false));
  };

  const validateForm = (value) => {
    const errors = {};
    if (value.name === "") {
      errors.name = "name is required";
    }

    if (value.name.length < 3) {
      errors.name = "Must be at last 3 characters";
    }

    if (value.email === "") {
      errors.email = "email is required";
    }

    if (value.email.length < 3) {
      errors.email = "Must be at last 3 characters";
    }

    if (value.phone === "") {
      errors.phone = "phone is required";
    }

    if (value.phone.length < 3) {
      errors.phone = "Must be at last 3 character";
    }

    if (value.city === "") {
      errors.city = "city is required";
    }

    if (value.city.length < 3) {
      errors.city = "Must be at last 3 character";
    }

    if (value.address === "") {
      errors.address = "address is required";
    }

    if (value.address.length < 3) {
      errors.address = "Must be at last 3 character";
    }

    if (value.state === "") {
      errors.state = "state is required";
    }

    if (value.state.length < 3) {
      errors.state = "Must be at last 3 character";
    }

    if (value.section === "") {
      errors.section = "section is required";
    }

    if (value.section.length < 3) {
      errors.section = "Must be at last 3 character";
    }

    if (value.classes === "") {
      errors.classes = "classes is required";
    }

    if (value.classes.length < 3) {
      errors.classes = "Must be at last 3 character";
    }
    return errors;
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Card variant="outlined" sx={{ mt: 5, p: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Add user
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.name}
                helperText={error.name}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.email}
                helperText={error.email}
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                type="text"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.phone}
                helperText={error.phone}
              />
              <TextField
                fullWidth
                label="City"
                name="city"
                type="text"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.city}
                helperText={error.city}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                type="text"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.address}
                helperText={error.address}
              />
              <TextField
                fullWidth
                label="State"
                name="state"
                type="text"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.state}
                helperText={error.state}
              />
              <TextField
                fullWidth
                label="Section"
                name="section"
                type="text"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.section}
                helperText={error.section}
              />
              <TextField
                fullWidth
                label="Classes"
                name="classes"
                type="text"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={error.classes}
                helperText={error.classes}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                {loading ? "Loading..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Formhandel;
