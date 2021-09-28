import classes from "./Catched.module.css";

const Catched = (props) => {
  return (
    <label className={classes.switch}>
      <input onChange={props.catchedHandler} type="checkbox" />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default Catched;
