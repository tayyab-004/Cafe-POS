import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// API Endpoints
export const login = (data) => api.post("/api/user/login", data);
export const register = (data) => api.post("/api/user/register", data);
export const getUserData = () => api.get("/api/user");
export const logout = () => api.post("/api/user/logout");

// Table Endpoints
export const addTable = (data) => api.post("/api/table/", data);
export const getTables = () => api.get("/api/table");
export const updateTable = ({ tableId, ...tableData }) =>
  api.put(`/api/table/${tableId}`, tableData);

// Payment Endpoints
export const createOrderRazorpay = (data) =>
  api.post("/api/payment/create-order", data);
export const VerifyPaymentRazorpay = (data) =>
  api.post("/api/payment/verify-payment", data);

// Order Endpoints
export const addOrder = (data) => api.post("/api/order/", data);
export const getOrder = () => api.get("/api/order");
export const updateOrderStatus = ({ orderId, orderStatus }) =>
  api.put(`/api/order/${orderId}`, { orderStatus });
