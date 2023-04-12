export const LoginComponent = ({ handleLogin, credentials, setCredentials, errorMessage }) => {
    return (
        <form onSubmit={handleLogin} style={{ marginLeft: 7 + 'em', marginTop: 3 + 'em' }}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    required
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
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
            {errorMessage && <div style={{ margin: 50 }} className="alert alert-danger">{errorMessage}</div>}
        </form>

    );
};
