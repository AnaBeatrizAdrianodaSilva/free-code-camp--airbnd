import cardImg from "../img/card_img.png";
import starImg from "../img/Star.png";

export default function Card() {
  return (
    <section className="card">
      <span>SOLD OUT</span>
      <img src={cardImg} alt="Card" />

      <div className="information">
        
        <div className="information__text">
          <img src={starImg} alt="start img" className="star" />

          <span>5.0</span>
          <span className="gray">(6) .</span>
          <span className="gray">USA</span>
        </div>

        <p>Life lessons with Katie Zaferes</p>

        <p>
          <strong>From &#36;136</strong> / person
        </p>

      </div>
    </section>
  )
}