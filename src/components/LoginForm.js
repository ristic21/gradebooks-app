export const LoginComponent = () => {
    return (
        <form style={{ marginLeft: 7 + 'em', marginTop: 3 + 'em' }}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
        </form>
    );
};
