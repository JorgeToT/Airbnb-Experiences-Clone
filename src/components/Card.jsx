import star from "../assets/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require("../assets/" + props.coverImg)}
        alt=""
        className="card--img"
      />
      <div className="card--info">
        <img src={star} alt="" className="card--star" />
        <span className="card--rating">{props.stats.rating}</span>
        <span className="card--reviews gray">
          ({props.stats.reviewCount}) •{" "}
        </span>
        <span className="card--location gray">{props.location}</span>
      </div>
      <p className="card--tittle">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
