import { toast } from "react-toastify";
import axios from "axios";

const login = async (userData) => {
  const response = await axios.post(
    "https://tureappapiforreact.onrender.com/api/login",
    userData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const register = async (data) => {
  const response = await axios.post(
    "https://tureappapiforreact.onrender.com/api/register",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export { login, register };
