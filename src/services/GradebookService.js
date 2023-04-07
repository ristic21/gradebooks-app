import httpService from "./HttpService";

class GradebooksService {

    constructor() {
        this.axios = httpService.axiosInstance;
    }

    getAll = async () => {
        try {
            return this.gradebooks = await this.axios.get("/gradebooks");
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
            const { data } = await this.axios.post('posts', newPost);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async edit(id, newPost) {
        try {
            const { data } = await this.axios.put(`posts/${id}`, newPost);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(gradebookId) {
        try {
            const { data } = await this.axios.delete(`gradebooks/${postId}`);
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