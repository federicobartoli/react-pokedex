import classes from "./Catched.module.css";

const Catched = (props) => {
  return (
    <label>
      <input onChange={props.catchedHandler} type="checkbox" id="test" />
      <span className={classes.pokeball}></span>
    </label>
  );
};

export default Catched;
