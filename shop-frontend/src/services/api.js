import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081",
});

export const getProducts = () => API.get("/products");
export const createOrder = (order) => API.post("/orders", order);

export default API;
