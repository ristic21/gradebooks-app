import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export const Header = ({
  isAuthenticated,
  handleLogout,
}) => {

  return (
    <div>
      {!isAuthenticated && (
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/login">
            Login
          </Link>
          <Link className="navbar-brand" to="/register">
            Register
          </Link>
        </nav>
      )}
      {isAuthenticated && (
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Gradebooks
          </Link>
          <Link className="navbar-brand" to="/teachers">
            All proffesors
          </Link>
          <Link className="navbar-brand" to="/my-gradebook">
            My gradebook
          </Link>
          <Link className="navbar-brand" to="/gradebooks/create">
            Add gradebook
          </Link>
          <button
            className="btn btn-warning"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </nav>
      )}
    </div>
  );
};
