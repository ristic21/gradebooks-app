import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Page } from "./layout/Page";
import Router from "./Router";
import { useState } from "react";
import authService from "./services/AuthService";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  async function handleLogout() {
    await authService.logout();
    setIsAuthenticated(false);
  }

  return (
    <BrowserRouter>
      <Page isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} handleLogout={handleLogout}>
        <Router />
      </Page>
    </BrowserRouter>
  );
}

export default App;
