import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export const getReq = (method) =>
  API.get(`/api/${method}`, {
    headers: { verificationtoken: "ulamYPMnafsAsJJXdSfqjZhasg23faSICreybtXN" },
  });
export const getPage = (method, page) =>
  API.get(`/api/${method}?page=${page}`, {
    headers: { verificationtoken: "ulamYPMnafsAsJJXdSfqjZhasg23faSICreybtXN" },
  });
export const getOneReq = (id, method) =>
  API.get(`/api/${method}/${id}`, {
    headers: { verificationtoken: "ulamYPMnafsAsJJXdSfqjZhasg23faSICreybtXN" },
  });
export const getSimilar = (method, name) =>
  API.get(`/api/${method}s/similar?name=${name}`, {
    headers: { verificationtoken: "ulamYPMnafsAsJJXdSfqjZhasg23faSICreybtXN" },
  });
export const getLocation = (name) =>
  API.get(`/api/cars/location?name=${name}`, {
    headers: { verificationtoken: "ulamYPMnafsAsJJXdSfqjZhasg23faSICreybtXN" },
  });
