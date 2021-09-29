import classes from "./Search.module.css";
const Search = (props) => {
  return (
    <div className={classes.search}>
      <label>
        <input
          onChange={props.handleFilteredSearch}
          value={props.searchTerm}
          type="text"
          required
        />
        <ul>
          <li custom-attribute="s">s</li>
          <li custom-attribute="e">e</li>
          <li custom-attribute="a">a</li>
          <li custom-attribute="r">r</li>
          <li custom-attribute="c">c</li>
          <li custom-attribute="h">h</li>
        </ul>
      </label>
    </div>
  );
};
export default Search;
