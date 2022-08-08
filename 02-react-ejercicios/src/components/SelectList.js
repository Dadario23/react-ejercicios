import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  // console.log(data, error, loading);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  // console.log(id);
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  // console.log(label);
  let options = data[title];

  // let recorrido = options.forEach((el) => el.nombre);
  //console.log(recorrido);

  // console.log(data);
  // options.forEach((el) => console.log(el.nombre));

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige una {title}</option>
        {data &&
          options.map((el) => (
            <option key={el.id} value={el.nombre}>
              {el.nombre}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList;
