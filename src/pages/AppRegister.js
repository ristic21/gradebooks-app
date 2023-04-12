import { useEffect, useState } from "react";
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


  const [errorMessage, setErrorMessage] = useState("");



  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth]);

  async function handleRegister(e) {

    e.preventDefault();

    try {
      console.log(credentials);
      await authService.register(credentials);
      window.location.reload(true)
      history.push("/");
      console.log("Registered in successfully");
    } catch (error) {
      if (error.response.status === 422) {
        setErrorMessage(`First name: required,max:255 
          Last name: max:255
          Email: email, max:255, ends with .com
          Password: at least 8 chars, at least 1 digit`
        )
      };
      console.log("Exited with errors: " + error);
    }

  }
  return (
    <div>
      <RegisterComponent
        handleRegister={handleRegister}
        credentials={credentials}
        setCredentials={setCredentials}
        errorMessage={errorMessage}
      />
    </div>
  );
}
