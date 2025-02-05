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

const createUser = async (data) => {
  const response = await axios.post(
    "https://tureappservar.onrender.com/user",
    data,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data
};

export { getapi, postapi,createUser };
