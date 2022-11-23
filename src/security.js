import purify from "dompurify";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
const apiUrl = "http://localhost:5004";
axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  const storedJwt = localStorage.getItem("token");
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const getJwt = async () => {
    const { data } = await axios.get(`/jwt`);
    setJwt(data.token);
  };
}

useEffect(() => {
  const getCsrfToken = async () => {
    const { data } = await axios.get("/csrf-token");
    axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;
  };
  getCsrfToken();
}, []);

export default tokenFunc;
