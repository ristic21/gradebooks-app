import httpService from "./HttpService";

class StudentsService {

    constructor() {
        this.axios = httpService.axiosInstance;
    }

    async getAll() {
        try {
            const { data } = await this.axios.get("/students");
            return data;
        } catch (error) {
            throw new Error(error);
        }

    };


    async add(newStudent) {
        try {
            const { data } = await this.axios.post('students', newStudent);

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



}

export const studentsService = new StudentsService();