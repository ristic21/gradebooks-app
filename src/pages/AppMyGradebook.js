import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MyGradebookComponent } from "../components/MyGradebookComponent";
import jwt_decode from "jwt-decode";
import { studentsService } from "../services/StudentsService";
import { gradebooksService } from "../services/GradebookService";

export const AppMyGradebook = () => {
  const history = useHistory();

  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const [activeUser, setActiveUser] = useState({});
  const [gradebooks, setGradebooks] = useState([]);
  const [students, setStudents] = useState([]);


  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    } else {
      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      setActiveUser({
        id: decodedToken.id,
        first_name: decodedToken.first_name,
        last_name: decodedToken.last_name,
        gradebook_id: decodedToken.gradebook_id,
      });
    }
  }, [isAuth, history]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const dataStudents = await studentsService.getAll();
        const dataGradebooks = await gradebooksService.getGradebooks()

        setGradebooks(dataGradebooks);
        setStudents(dataStudents);

      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  const myGradebook = gradebooks.filter((gradebook) => gradebook.user_id === activeUser.id);
  const filteredStudents = students.filter((student) => student.gradebook_id === myGradebook[0]?.id);


  const handleDelete = async (myGradebookId) => {
    window.confirm('Are you sure you want to delete this gradebook?')
    await gradebooksService.delete(myGradebookId);
    const updatedTeacher = { ...activeUser, gradebook_id: 0 };
    setActiveUser(updatedTeacher);
    setGradebooks(gradebooks.filter((gradebook) => gradebook.id !== myGradebookId));
    history.push('/');
  };
  console.log(activeUser)
  return <MyGradebookComponent myGradebook={myGradebook} activeUser={activeUser} filteredStudents={filteredStudents} handleDelete={handleDelete} />;
};
