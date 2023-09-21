import axios from "axios";

export const instance = axios.create({
  //creating interceptor for the api, if in future we need to add a token for each api call which is made, and just use this axios instance to make api call, with out adding the while URL.
  baseURL: "http://test.indiaindex.com/",
  mode: "cors",
});
