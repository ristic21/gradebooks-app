import httpService from "./HttpService";

class TeachersService {

    constructor() {
        this.axios = httpService.axiosInstance;
    }

    async getAllPaginate({ first_name, last_name }) {
        try {
            const { data } = await this.axios.get("/teachers", {
                params: {
                    first_name,
                    last_name
                }
            });
            return data;
        } catch (error) {
            throw new Error(error);
        }

    };

    async getAll() {
        try {
            const { data } = await this.axios.get("/teachers-get-all");
            return data;
        } catch (error) {
            throw new Error(error);
        }

    };

    async get(gradebookId) {
        try {
            const { data } = await this.axios.get(`/gradebooks/${gradebookId}?filter={"include":["comments"]}`);
            return data;
        } catch (error) {
            console.log(error);
        }

    }

    async add(newPost) {
        try {
            const { data } = await this.axios.post('gradebooks/create', newPost);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async edit(teachersId, newUser) {
        try {
            const { data } = await this.axios.put(`teachers/${teachersId}/edit`, newUser);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(gradebookId) {
        try {
            const { data } = await this.axios.delete(`gradebooks/${gradebookId}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async addComment(newComment, postId) {
        try {
            const { data } = await this.axios.post(`/gradebooks/${postId}/comments`, newComment);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    getComments = async (id) => {
        try {
            return this.comments = await this.axios.get(`/gradebooks/${id}/comments`);
        } catch (error) {
            throw new Error(error);
        }

    };

}

export const teachersService = new TeachersService();