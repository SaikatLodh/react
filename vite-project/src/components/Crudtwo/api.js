import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://tureappapiforreact.onrender.com",
});

export const createuser = async (data) => {
  try {
    const response = await api.post("/student/create", data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    if (error?.response?.data?.error?.name?.message) {
      toast.error(`${error?.response?.data?.error?.name?.message}`);
    }
    if (error?.response?.data?.error?.email?.message) {
      toast.error(`${error?.response?.data?.error?.email?.message}`);
    }
    if (error?.response?.data?.error?.phone?.message) {
      toast.error(`${error?.response?.data?.error?.phone?.message}`);
    }
    if (error?.response?.data?.error?.city?.message) {
      toast.error(`${error?.response?.data?.error?.city?.message}`);
    }
    if (error?.response?.data?.error?.address?.message) {
      toast.error(`${error?.response?.data?.error?.address?.message}`);
    }
    if (error?.response?.data?.error?.state?.message) {
      toast.error(` ${error?.response?.data?.error?.state?.message}`);
    }
    if (error?.response?.data?.error?.section?.message) {
      toast.error(`${error?.response?.data?.error?.section?.message}`);
    }
    if (error?.response?.data?.error?.classes?.message) {
      toast.error(`${error?.response?.data?.error?.classes?.message}`);
    }
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/student/show");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
