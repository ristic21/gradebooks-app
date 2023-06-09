import httpService from "./HttpService";

class GradebooksService {

    constructor() {
        this.axios = httpService.axiosInstance;
    }

    async getAll(pageNumber, perPage) {
        try {
            const { data } = await this.axios.get(`/gradebooks?page=${pageNumber + 1}&per_page=${perPage}`);
            return data;
        } catch (error) {
            throw new Error(error);
        }
    };


    async getGradebooks() {
        try {
            const { data } = await this.axios.get("/gradebooks-get-all");
            return data;
        } catch (error) {
            throw new Error(error);
        }

    };


    async get(gradebookId) {
        try {
            const { data } = await this.axios.get(`/gradebooks/${gradebookId}`);
            return data;
        } catch (error) {
            console.log(error);
        }

    }

    async add(newGradebook) {
        try {
            const { data } = await this.axios.post('gradebooks', newGradebook);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async edit(gradebookId, newGradebook) {
        try {
            const { data } = await this.axios.put(`gradebooks/${gradebookId}/edit`, newGradebook);
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

export const gradebooksService = new GradebooksService();