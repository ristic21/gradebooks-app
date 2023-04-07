import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/login">
                    Login
                </Link>
                <Link className="navbar-brand" to="/register">
                    Register
                </Link>
            </nav>
        </div>
    );
};
