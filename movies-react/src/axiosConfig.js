import axios from "axios";

// Set up default Axios configuration
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default axios;
