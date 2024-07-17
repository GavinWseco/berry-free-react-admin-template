import axios from "axios";
import CustomerPortal from "../Config/apiConfig";

const api = axios.create({
  baseURL: CustomerPortal,
  timeout: 16000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
export default function useApi() {
  return api;
}
