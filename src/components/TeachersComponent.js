import { Link, useHistory } from "react-router-dom";

export const TeachersComponent = ({ handleDelete, teachers }) => {
    console.log(teachers)
    const history = useHistory()
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-column align-items-center mb-3">
                <p className="display-3">Teachers</p>
                <ul className="list-group">

                    {teachers.map((teacher) => {
                        return (
                            <li key={teacher.id} className="list-group-item" style={{
                                border: "3px solid orange",
                                width: 300,
                                marginTop: 15,
                            }}>
                                <img src={teacher.image_url} className="card-img-top" alt="..."></img>

                                First name: {teacher.first_name}
                                <br />
                                Last name: {teacher.last_name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};
