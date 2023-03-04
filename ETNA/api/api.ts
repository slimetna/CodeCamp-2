import axios from "axios";

// Partage de connexion : 192.168.43.29
// Connexion directe : 192.168.1.15

export const api = axios.create({
  baseURL: `http://192.168.1.15:3000`,
  timeout: 10000,
  withCredentials: true,
});
