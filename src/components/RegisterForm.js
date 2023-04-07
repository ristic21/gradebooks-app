export const RegisterComponent = ({ handleRegister, credentials, setCredentials }) => {
    return (
        <form onSubmit={handleRegister} style={{ margin: 2 + 'em' }} >
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">First name</label>
                <input
                    required
                    value={credentials.first_name}
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, first_name: target.value })
                    }
                    type="text" className="form-control" id="firstName" placeholder="Enter first name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Last name</label>
                <input required
                    value={credentials.last_name}
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, last_name: target.value })
                    }
                    type="text" className="form-control" id="lastName" placeholder="Enter last name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input required
                    value={credentials.email}
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, email: target.value })
                    }
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    required
                    value={credentials.password}
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, password: target.value })
                    }
                    type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword">Confirm password</label>
                <input
                    required
                    value={credentials.confirmed_password}
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, confirmed_password: target.value })
                    }
                    type="password" className="form-control" id="exampleInputConfirmedPassword" placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Image url</label>
                <input
                    required
                    value={credentials.image_url}
                    onChange={({ target }) =>
                        setCredentials({ ...credentials, image_url: target.value })
                    }
                    type="text" className="form-control" id="imageUrl" placeholder="Enter image url" />
            </div>
            <div className="form-check">
                <input required type="checkbox" className="form-check-input" id="termsAndConditions" />
                <label className="form-check-label" htmlFor="exampleCheck1">I accept terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
};
