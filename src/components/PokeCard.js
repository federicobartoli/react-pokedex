// Routers
import { Link } from "react-router-dom";
import classes from "./PokeCard.module.css";
import Catched from "./Catched";

const PokeCard = (props) => {
  return (
    <div className={`${classes.card} ${props.type}`}>
      <div>
        <figure>
          <Link to={`/detail/${props.id}`}>
            <img src={props.img} alt={props.name} />
          </Link>
        </figure>
        <p>{props.id}</p>
        <h5>{props.name}</h5>
        {!props.hideCatched && (
          <Catched
            id={props.id}
            catched={props.catched}
            catchedHandler={props.catchedHandler}
          />
        )}
      </div>
      {props.children}
    </div>
  );
};

export default PokeCard;
