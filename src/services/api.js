import axios from "axios";

// Prefer env var, but default to deployed backend
const DEFAULT_BASE_URL = "https://smart-plant-backend-up2a.onrender.com/api";
const baseURL = (import.meta?.env?.VITE_API_URL || DEFAULT_BASE_URL).replace(/\/$/, "");

const API = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
