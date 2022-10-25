import axios from "axios";

const ApiManager = axios.create({
  baseURL: "https://localhost:7052",
  responseType: "json",
  withCredentials: true,
});
 
export default ApiManager;
