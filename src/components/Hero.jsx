import photoGrid from "../assets/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img src={photoGrid} alt="" className="hero--photo" />
      <article>
        <h1 className="hero--tittle">Online Experiences</h1>
        <p className="hero--description">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </article>
    </section>       
  );
}

export default Hero;
