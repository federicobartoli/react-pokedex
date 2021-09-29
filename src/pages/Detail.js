// Routers
import { Link, Redirect, useParams } from "react-router-dom";

const Detail = (props) => {
  const { id } = useParams();
  return <p>{id}</p>;
};

export default Detail;
