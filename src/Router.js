import { Route, Switch, Redirect } from "react-router-dom";
import { AppHome } from "./pages/AppHome";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={AppHome} />
        {/* <Route exact path="/teachers" component={AppPosts} />
        <Route path="/teachers/:id" component={SinglePost} />
        <Route path="/teachers/:id" component={AddPost} />
        <Route path="/edit/:id" component={EditPost} /> */}
      </Switch>
    </div>
  );
};

export default Router;
