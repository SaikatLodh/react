import axios from "axios";
const getapi = async () => {
  const response = await axios.get(
    "https://tureappservar.onrender.com/student/show"
  );
  return response.data.data;
};

const postapi = async (data) => {
  const response = await axios.post(
    "https://tureappservar.onrender.com/student/create",
    data,
    { headers: { "Content-Type": "application/json" } }
  );

  return response.data;
};

const createProduct = async (data) => {
  const response = await axios.post(
    "https://tureappapiforreact.onrender.com/api/product/create",
    data,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data;
};

const getUser = async () => {
  const response = await axios.get(
    "https://tureappapiforreact.onrender.com/api/product"
  );
  return response.data;
};

const getsingleProduct = async (id) => {
  const response = await axios.get(
    `https://tureappapiforreact.onrender.com/api/product/${id}`
  );
  return response.data;
};

const updateproduct = async (id, data) => {
  const response = await axios.post(
    `https://tureappapiforreact.onrender.com/api/product/update/${id}`,
    data,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(
    `https://tureappapiforreact.onrender.com/api/product/delete/${id}`
  );

  return response.data;
};

export {
  getapi,
  postapi,
  createProduct,
  getUser,
  getsingleProduct,
  updateproduct,
  deleteProduct,
};
