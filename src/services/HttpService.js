import axios from "axios";

class HttpService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8000/api",
        });
        this.axiosInstance.interceptors.request.use(function (req) {
            const token = localStorage.getItem("token");
            if (token) {
                req.headers["Authorization"] = `Bearer ${token}`;
            }
            return req;
        });
    }
}

const httpService = new HttpService();

export default httpService;