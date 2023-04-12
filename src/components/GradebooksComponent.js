import { Link, useHistory } from "react-router-dom";

export const GradebooksComponent = ({ gradebooks, teachers }) => {
    console.log(gradebooks)
    const history = useHistory()
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    console.log(teachers)
    return (
        <div className="d-flex flex-wrap justify-content-center">

            <ul>{gradebooks.map((gradebook) => {
                const gradeTeacher = teachers.filter((teacher) => gradebook.user_id === teacher.id)
                console.log(gradeTeacher)
                return (
                    < div >

                        <li
                            key={gradebook.id}
                            style={{
                                border: "3px solid orange",
                                width: 300,
                                marginTop: 15,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >

                            Name: {gradebook.name}
                            <br />
                            First name of teacher: {gradeTeacher ? gradeTeacher[0]?.first_name : 'None'}
                            <br />
                            Last name of teacher: {gradeTeacher ? gradeTeacher[0]?.last_name : 'None'}
                            <br />
                            Created at: {formatDate(gradebook.created_at)}
                            <Link className="btn btn-sm btn-primary btn-outline-light" to={`/gradebooks/${gradebook.id}`}>View gradebook</Link>

                        </li>
                    </div>)
            })
            }
            </ul >


        </div >
    );
};