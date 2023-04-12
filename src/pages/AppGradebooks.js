import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gradebooksService } from "../services/GradebookService";
import { GradebooksComponent } from "../components/GradebooksComponent";
import ReactPaginate from 'react-paginate';
import { teachersService } from "../services/TeachersService";

export const AppGradebooks = () => {
  const [gradebooks, setGradebooks] = useState([]);
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));
  const [page_number, setPageNumber] = useState(0);
  const [per_page, setPerPage] = useState(10);
  const [total_count, setTotalCount] = useState(0);
  const [teachers, setTeachers] = useState([]);


  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, [isAuth]);

  useEffect(() => {
    const getAll = async () => {
      const data = await gradebooksService.getAll(page_number, per_page);
      const dataTeachers = await teachersService.getAll();
      setGradebooks(data.data);
      setTeachers(dataTeachers);
      setTotalCount(data.total_count);
    };
    getAll();
  }, [page_number, per_page]);

  const page_count = Math.ceil(total_count / per_page);

  const handlePageClick = (data) => {
    console.log('check if clicked')
    const selectedPage = data.selected;
    setPageNumber(page_number);
  };

  return (
    <>
      <GradebooksComponent gradebooks={gradebooks} teachers={teachers} />
      {!gradebooks && <p className="display-4" style={{ width: 70 + '%' }}>There are no grades to show</p>}

      <button className="btn btn-outline-dark" onClick={() => { setPerPage(per_page + 10) }}>Load more</button>
    </>
  );
};
