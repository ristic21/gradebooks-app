import { Route, Switch, Redirect } from "react-router-dom";
import { AppHome } from "./pages/AppHome";
import { AppRegister } from "./pages/AppRegister";
import { AppLogin } from "./pages/AppLogin";
import { AppGradebooks } from "./pages/AppGradebooks";
import { AppTeachers } from "./pages/AppTeachers";
import { AppMyGradebook } from "./pages/AppMyGradebook";
import { AppAddGradebook } from "./pages/AppAddGradebook";
import { AppSingleGradebook } from "./pages/AppSingleGradebook";
import { AppEditGradebook } from "./pages/AppEditGradebook";
import { AppAddStudents } from "./pages/AppAddStudents";


const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AppGradebooks} />
        <Route path="/teachers" component={AppTeachers} />
        <Route path="/my-gradebook" component={AppMyGradebook} />
        <Route path="/gradebooks/create" component={AppAddGradebook} />


        <Route path="/register" component={AppRegister} />
        <Route path="/login" component={AppLogin} />
        <Route exact path="/gradebooks/:id">
          <AppSingleGradebook />
        </Route>

        <Route path="/gradebooks/:id/edit" component={AppEditGradebook} />
        <Route path="/gradebooks/:id/students/create" component={AppAddStudents} />

      </Switch>
    </div>
  );
};

export default Router;
