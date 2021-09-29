import classes from "./InfoCard.module.css";

const InfoCard = (props) => {
  return (
    <div className={classes.infos}>
      <strong>Abilities:</strong>
      <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability.ability.name}</li>;
        })}
      </ul>
      <strong>Shiny:</strong>

      <img src={props.sprites.front_shiny} alt={`shiny ${props.name}`} />
    </div>
  );
};

export default InfoCard;
