import { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/AuthService";
import { RegisterComponent } from "../components/RegisterForm";

export function AppRegister() {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        image_url: "",
    });


    async function handleRegister(e) {
        e.preventDefault();

        try {
            await authService.register(credentials);
            history.push("/home");
        } catch (error) {
            console.log('Exited with errors: ' + error)
        }
        console.log("Registered in successfully");
    }
    return (
        <div>
            <RegisterComponent handleRegister={handleRegister} credentials={credentials} setCredentials={setCredentials} />
        </div>
    );
};
