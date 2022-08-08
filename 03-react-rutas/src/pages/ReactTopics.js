import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        consectetur saepe voluptatem, ea impedit nemo ex magni excepturi rerum
        nesciunt fuga? Recusandae perferendis excepturi aliquam rerum reiciendis
        iste fuga cumque?
      </p>
    </div>
  );
};

const ReactTopics = () => {
  //let match = useRouteMatch();
  // console.log(match);
  //path nos permite construir rutas relativas <Route>, mientras url nos permite contruir enlaces relativos <Link> o <Navlink>.
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolorem a vitae harum possimus sint temporibus? Nisi perspiciatis
            quaerat sunt necessitatibus suscipit quas molestiae. Voluptas fuga
            sapiente eum adipisci omnis.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
