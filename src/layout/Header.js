import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export const Header = ({ isAuthenticated, setIsAuthenticated, handleLogout }) => {
  console.log(!isAuthenticated)
  return (

    < div >
      {
        !isAuthenticated && (
          <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/login">
              Login
            </Link>
            <Link className="navbar-brand" to="/register">
              Register
            </Link>
          </nav>

        )
      }
      {
        isAuthenticated && (
          <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/login">
              Login
            </Link>
            <Link className="navbar-brand" to="/register">
              Register
            </Link>
          </nav>
        )
      }
    </div >
  );
};
