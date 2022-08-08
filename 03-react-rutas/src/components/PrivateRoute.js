import { Route, Redirect } from "react-router-dom";

/* onst PrivateRoute = (props) => {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */

//simular Autenticacion

let auth;
auth = null;
auth = true;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
