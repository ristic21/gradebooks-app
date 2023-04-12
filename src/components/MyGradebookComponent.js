import { Link } from "react-router-dom";

export const MyGradebookComponent = ({ myGradebook, activeUser, filteredStudents, handleDelete }) => {


    console.log(myGradebook[0]?.id)
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-column align-items-center mb-3">
                {<p className="display-4">Grade teacher:{activeUser.first_name + ' ' + activeUser.last_name}</p>}
                <p className="display-4">List of students in the grade</p>
                <br />
                {!myGradebook[0] && <p className="h5">Teacher does not have grade</p>}

                {activeUser.gradebook_id !== 0 ? < ul > {
                    filteredStudents.map((student) => {
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

                </ul> : <p className="display-5">Teacher does not have his own grade.</p>}
                <Link className="btn btn-warning btn-outline-dark" style={{ margin: 3 }} to={`/gradebooks/${myGradebook[0]?.id}/students/create`} >Add students</Link>
                <Link className="btn btn-warning btn-outline-dark" style={{ margin: 3 }} to={`/gradebooks/${myGradebook[0]?.id}/edit`} >Edit</Link>
                <button className="btn btn-danger btn-outline-dark" style={{ margin: 3 }} onClick={() => handleDelete(myGradebook[0].id)}>Delete</button>
            </div >
        </div >

    );
};
