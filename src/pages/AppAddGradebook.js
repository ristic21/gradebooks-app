import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { gradebooksService } from "../services/GradebookService";
import { AddGradebookComponent } from "../components/AddGradebookComponent";
import { teachersService } from "../services/TeachersService";

export const AppAddGradebook = () => {

  const history = useHistory()

  const [credentials, setCredentials] = useState({
    name: "",
    user_id: 0,
  });
  const [teachers, setTeachers] = useState([]);
  const [gradebooks, setGradebooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleAddGradebook(e) {
    e.preventDefault();
    try {
      console.log(credentials);
      const response = await gradebooksService.add(credentials);
      console.log("Gradebook added successfully");
      const newGradebookId = gradebooks.length;
      const updatedTeacher = { ...teachers.find((teacher) => teacher.id === credentials.user_id), gradebook_id: newGradebookId };
      console.log(updatedTeacher);
      await teachersService.edit(updatedTeacher.id, updatedTeacher);
      console.log("Teacher updated successfully");
      history.push("/");
    } catch (error) {
      console.log("Exited with errors: " + error);
      if (error.response && error.response.status === 422) {
        setErrorMessage("Grade name must have from 2 to 255 characters")
      };
    }
  }

  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, [isAuth]);

  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, [isAuth]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const dataTeachers = await teachersService.getAll();
        const dataGradebooks = await gradebooksService.getGradebooks();
        setGradebooks(dataGradebooks);
        setTeachers(dataTeachers);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  console.log(teachers)
  const unAsignedTeachers = teachers.filter((teacher) => teacher.gradebook_id === 0);


  return <AddGradebookComponent teachers={unAsignedTeachers} handleAddGradebook={handleAddGradebook} credentials={credentials} setCredentials={setCredentials} errorMessage={errorMessage} />;
};













// Što se tiče dodavanja razrednog starešine:
// U listi vidimo samo Profesore koji predhodno nisu razredne starešine, (vučemo postojeće podatke iz baze)

// Na kraju forme imam dugme “Submit”. Ako su podaci neispravni, dobijam validacione poruke. 
// Ako su podaci ispravni, dnevnik je dodat i preusmeren sam na stranicu “Gradebooks”.

// Pored dugmeta “Submit” imam i dugme “Cancel” koje me preusmerava na “Gradebooks” stranicu.
