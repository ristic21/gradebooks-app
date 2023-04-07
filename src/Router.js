import { Route, Switch, Redirect } from "react-router-dom";
import { AppHome } from "./pages/AppHome";
import { AppRegister } from "./pages/AppRegister";
import { AppLogin } from "./pages/AppLogin";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/home" component={AppHome} />
        <Route path="/register" component={AppRegister} />
        <Route path="/login" component={AppLogin} />
      </Switch>
    </div>
  );
};

export default Router;
