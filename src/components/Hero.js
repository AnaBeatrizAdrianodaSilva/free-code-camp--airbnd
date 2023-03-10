import groupOfImages from "../img/group_img.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={groupOfImages} alt="Group of Images" />

      <div className="hero__text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
  )
}