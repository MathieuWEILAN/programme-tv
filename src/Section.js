const Section = (props) => {
  return (
    <div className="program">
      <div className="part1">
        <div className="time">{props.time}</div>
        <img src={props.image} alt="" />
      </div>
      <div className="part2">
        <h1>{props.title}</h1>
        <p>{props.type}</p>
        <div className="duration">{props.duration}</div>
        <span className="test">
          {props.direct === true && <span>Direct</span>}
        </span>
        <span>{props.isUnseen === true && <div>Inedit</div>}</span>
      </div>
    </div>
  );
};

export default Section;
