// Routers
import { Link } from "react-router-dom";
import classes from "./PokeCard.module.css";
import Catched from "./Catched";

const PokeCard = (props) => {
  return (
    <li className={`${classes.card} ${props.type}`}>
      <figure>
        <Link to={`/detail/${props.id}`}>
          <img src={props.img} alt={props.name} />
        </Link>
      </figure>
      <p>{props.id}</p>
      <h5>{props.name}</h5>
      <Catched catchedHandler={props.catchedHandler} />
    </li>
  );
};

export default PokeCard;
