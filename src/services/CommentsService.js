import httpService from "./HttpService";

class CommentsService {

    constructor() {
        this.axios = httpService.axiosInstance;
    }

    async addComment(newComment, gradebookId, userId) {
        try {
            const { data } = await this.axios.post(`/gradebooks/${gradebookId}/comments`, {
                content: newComment,
                user_id: userId
            });

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

export const commentsService = new CommentsService();
