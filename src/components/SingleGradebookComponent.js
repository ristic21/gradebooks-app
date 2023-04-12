import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { teachersService } from "../services/TeachersService";
import { gradebooksService } from "../services/GradebookService";
import jwt_decode from "jwt-decode";

export const SingleGradebookComponent = ({ students, teachers, gradebook }) => {

    const history = useHistory()
    const id = parseInt(useParams().id)

    const filteredStudents = students.filter((student) => student.gradebook_id === id);

    const gradeTeacher = teachers.filter((teacher) => gradebook.user_id === teacher.id);

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.id;


    if (user_id === gradebook.user_id) {
        history.push("/my-gradebook");
    }




    return (

        <div className="d-flex flex-wrap justify-content-center">
            {gradeTeacher[0] !== undefined ? <p className="display-4" style={{ width: 70 + '%' }}>Grade teacher:{gradeTeacher[0]?.first_name + ' ' + gradeTeacher[0]?.last_name}</p> : <p className="display-4">No teacher found for this grade</p>}
            <br />
            <div className="d-flex flex-column align-items-center mb-3">
                <p className="display-4">List of students in the grade</p>

                <ul className="list-group justify-content-center" style={{ marginRight: 300 }}>{filteredStudents.map((student) => {
                    return (
                        <li
                            key={student.id}
                            style={{
                                border: "3px solid orange",
                                width: 300,
                                marginTop: 15,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <img src={student.image_url} className="card-img-top" alt="..."></img>

                            First name: {student.first_name}
                            <br />
                            Last name: {student.last_name}
                        </li>)
                })
                }
                </ul>

            </div>
        </div>
    );
};
