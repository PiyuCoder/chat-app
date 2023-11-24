import axios from "axios";
import { toast } from "react-toastify";

let url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    console.log(data);
    const res = await axios.post(`${url}/add`, data);

    if (!res.data.success) {
      toast.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(`${url}/users`);
    console.log("okay", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getConversation = async (data) => {
  try {
    const res = await axios.post(`${url}/conversation/get`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const newMessage = async (data) => {
  try {
    const res = await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = async (id) => {
  try {
    const res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log(error.message);
  }
};
