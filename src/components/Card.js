import cardImg from "../img/card_img.png";
import { AiFillStar } from "react-icons/ai";

export default function Card() {
  return (
    <section className="card">
      <span>SOLD OUT</span>
      <img src={cardImg} alt="Card" />

      <div className="information">

        <p> 
          <AiFillStar className="icon" /> 5.0 <span>(6).USA</span> 
        </p>

        <p>Life lessons with Katie Zaferes</p>

        <p>
          <strong>From &#36;136</strong> / person
        </p>

      </div>
    </section>
  )
}