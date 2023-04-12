import { useState, useEffect } from "react";
import { HomeComponent } from "../components/HomeComponent";
import { useHistory } from "react-router-dom";


export const AppAddStudents = () => {
    const history = useHistory();
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        if (isAuth) {
            history.push("/");
        } else {
            history.push("/login");
        }
    }, [isAuth]);


    return (
        <div>
            add students
        </div>
    );
};
