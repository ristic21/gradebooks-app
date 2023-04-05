import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Page } from "./layout/Page";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Router />
      </Page>
    </BrowserRouter>
  );
}

export default App;
