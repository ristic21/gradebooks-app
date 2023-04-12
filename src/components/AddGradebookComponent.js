import { Link } from "react-router-dom";

export const AddGradebookComponent = ({ teachers, handleAddGradebook, credentials, setCredentials, errorMessage }) => {
    console.log(teachers)
    return (
        <form onSubmit={handleAddGradebook} style={{ marginLeft: 7 + 'em', marginTop: 3 + 'em' }}>
            <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                    required
                    value={credentials.name}
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, name: target.value })
                    }
                    type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label htmlFor="teacherSelect">Teacher</label>
                <select
                    className="form-control"
                    id="teacherSelect"
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, user_id: parseInt(target.value) })
                    }
                    value={credentials.user_id}
                >
                    <option value=''>Select a teacher</option>
                    {teachers?.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>
                            {teacher.first_name} {teacher.last_name}
                        </option>
                    ))}
                </select>
            </div>
            <button style={{ margin: 5 }} type="submit" className="btn btn-primary">Add Gradebook</button>
            <Link style={{ margin: 5 }} className="btn btn-secondary btn-outline-dark" to="/">Cancel</Link>
            {errorMessage && <div style={{ margin: 50 }} className="alert alert-danger">{errorMessage}</div>}

        </form>
    );
};
