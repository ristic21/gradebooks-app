import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Page } from "./layout/Page";
import Router from "./Router";
import { useState } from "react";
import authService from "./services/AuthService";

function App() {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  // function parseJwt(token) {
  //   if (!token) { return; }
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace('-', '+').replace('_', '/');
  //   return JSON.parse(window.atob(base64));
  // }

  // console.log(parseJwt(localStorage.getItem("token")))

  async function handleLogout() {
    await authService.logout();
    setIsAuthenticated(false);
    window.location.reload(true)
  }

  return (
    <BrowserRouter>
      <Page
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      >
        <Router />
      </Page>
    </BrowserRouter>
  );
}

export default App;
