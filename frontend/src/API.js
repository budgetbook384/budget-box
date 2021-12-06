import axios from "axios";

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = "http://127.0.0.1:8000";
// }
baseURL = "https://budget-box-backend.herokuapp.com/";
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {

}