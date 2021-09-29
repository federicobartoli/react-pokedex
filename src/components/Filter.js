//CSS
import classes from "./Filter.module.css";
//Components
import Search from "./Search.js";

const Filter = (props) => {
  return (
    <div className={classes.pokewrapper}>
      <div className={classes.options_container}>
        {props.options.map((option, key) => {
          return (
            <div key={key} className={classes.options}>
              <div
                onClick={() => props.handler(option)}
                id={option}
                className={`${classes.option} ${key === 0 && classes.selected}`}
              >
                <div className={`${classes.pokeball} `}>
                  <div className={classes.upperhalf}> </div>
                  <div className={classes.lowerhalf}> </div>
                  <div className={classes.base}> </div>
                  <div className={classes.innercircle}> </div>
                  <div className={`${classes.indicator} ${classes.visible}`}>
                    {" "}
                  </div>
                  <div className={classes.indicatorinner}> </div>
                </div>
                <div>{option}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Search
        handleFilteredSearch={props.handleFilteredSearch}
        searchTerm={props.searchTerm}
      />
    </div>
  );
};

export default Filter;
