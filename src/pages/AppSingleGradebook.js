import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { studentsService } from "../services/StudentsService";
import { SingleGradebookComponent } from "../components/SingleGradebookComponent";
import { teachersService } from "../services/TeachersService";
import { gradebooksService } from "../services/GradebookService";
import SingleGradebookComments from "../components/CommentsComponent";

export const AppSingleGradebook = () => {

    const { id } = useParams();
    const history = useHistory()
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [gradebook, setGradebook] = useState({})
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));
    useEffect(() => {
        if (!isAuth) {
            history.push("/login");
        }
    }, [isAuth]);


    useEffect(() => {
        const getAll = async (id) => {
            try {
                const dataStudents = await studentsService.getAll();
                const dataTeachers = await teachersService.getAll();
                const dataGradebook = await gradebooksService.get(id)

                setGradebook(dataGradebook);
                setTeachers(dataTeachers);
                setStudents(dataStudents);
            } catch (error) {
                console.log(error);
            }
        };
        getAll(id);
    }, [id]);

    console.log(gradebook)
    return (
        <div>
            <SingleGradebookComponent students={students} teachers={teachers} gradebook={gradebook} />;
            <SingleGradebookComments gradebookId={id} />
        </div>)
};
