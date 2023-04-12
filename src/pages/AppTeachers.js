import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { teachersService } from "../services/TeachersService";
import { TeachersComponent } from "../components/TeachersComponent";
import ReactPaginate from 'react-paginate';

export const AppTeachers = () => {
  const history = useHistory();
  const [teachers, setTeachers] = useState([]);
  const [firstNameFilter, setFirstNameFilter] = useState("");
  const [lastNameFilter, setLastNameFilter] = useState("");
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const [pageNumber, setPageNumber] = useState(0);
  const teachersPerPage = 10;
  const pagesVisited = pageNumber * teachersPerPage;

  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, [isAuth]);

  useEffect(() => {
    const getAll = async () => {
      const data = await teachersService.getAllPaginate({
        first_name: firstNameFilter,
        last_name: lastNameFilter,
        page: pageNumber + 1,
        per_page: teachersPerPage,
      });
      setTeachers(data.data);
    };
    getAll();
  }, [firstNameFilter, lastNameFilter, pageNumber]);

  const handleFirstNameChange = (e) => {
    setFirstNameFilter(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastNameFilter(e.target.value);
  };

  const pageCount = Math.ceil(teachers.length / teachersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="firstNameFilter" className="form-label">
          First Name Filter
        </label>
        <input
          type="text"
          className="form-control"
          id="firstNameFilter"
          value={firstNameFilter}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastNameFilter" className="form-label">
          Last Name Filter
        </label>
        <input
          type="text"
          className="form-control"
          id="lastNameFilter"
          value={lastNameFilter}
          onChange={handleLastNameChange}
        />
      </div>
      <TeachersComponent teachers={teachers.slice(pagesVisited, pagesVisited + teachersPerPage)} />

    </div>
  );
};
