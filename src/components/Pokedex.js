import classes from "./Pokedex.module.css";

const Pokedex = (props) => {
  return <div className={classes.pokedex}>{props.children}</div>;
};

export default Pokedex;
