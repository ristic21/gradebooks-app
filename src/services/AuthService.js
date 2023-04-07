import httpService from "./HttpService";

class AuthService {

    constructor() {
        this.axios = httpService.axiosInstance;
    }

    async login(credentials) {
        const { data } = await this.axios.post("/login", credentials);
        localStorage.setItem("token", data.token);
    }

    async register(userData) {
        const { data } = await this.axios.post("/register", userData);
        localStorage.setItem("token", data.token);
    }

    async logout() {
        await this.axios.post("/logout");
        localStorage.removeItem("token");
    }
}

const authService = new AuthService();
export default authService;