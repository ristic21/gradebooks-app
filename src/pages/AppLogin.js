import { useState, useEffect } from "react";
import { LoginComponent } from "../components/LoginForm";
import authService from "../services/AuthService";
import { useHistory } from "react-router-dom";



export const AppLogin = () => {

    const history = useHistory()

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            console.log(credentials);
            await authService.login(credentials);
            console.log("Logged in successfully");
            history.push("/");
            window.location.reload(true)
        } catch (error) {
            console.log("Exited with errors: " + error);
            if (error.response.status === 401) {
                setErrorMessage("Invalid credentials")
            };
        }
    }

    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        if (isAuth) {
            history.push("/");
        }
    }, [isAuth]);


    return (
        <div>
            <LoginComponent handleLogin={handleLogin} credentials={credentials} setCredentials={setCredentials} errorMessage={errorMessage} />
        </div>
    );
};