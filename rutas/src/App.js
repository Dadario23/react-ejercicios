import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h2>Probando Link</h2>
      <hr />
      <Router>
        <Link to="/">Main </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Switch>
          <Route exact path="/">
            <h2>Main page</h2>
          </Route>
          <Route path="/about">
            <h2>About page</h2>
          </Route>
          <Route path="/contact">
            <h2>contact page</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
