import classes from "./PokeCard.module.css";

const PokeCard = (props) => {
  return (
    <li className={classes.card}>
      <figure>
        <a href="/">
          <img src={props.img} />
        </a>
      </figure>
      {props.name}
    </li>
  );
};

export default PokeCard;
