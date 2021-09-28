import classes from "./Pokedex.module.css";

const Pokedex = (props) => {
  return <ul className={classes.pokedex}>{props.children}</ul>;
};

export default Pokedex;
