import axios from "axios";

export const instance = axios.create({
  baseURL: "http://test.indiaindex.com/",
  mode: "cors",
});
