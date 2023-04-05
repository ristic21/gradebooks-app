import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/home">
          Login
        </Link>
        <Link className="navbar-brand" to="/teachers">
          Register
        </Link>
      </nav>
    </div>
  );
};
