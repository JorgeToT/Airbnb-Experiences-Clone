import star from "../assets/star.png";

function Card(props) {
  return (
    <div className="card">
      <img
        src={require("../assets/" + props.image)}
        alt=""
        className="card--img"
      />
      <div className="card--info">
        <img src={star} alt="" className="card--star" />
        <span className="card--rating">{props.rating}</span>
        <span className="card--reviews gray">({props.reviewCount}) • </span>
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
