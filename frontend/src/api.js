import axios from "axios";

export const API = axios.create({
  baseURL: "https://testbackendnewlatest.onrender.com/api"
});