import "./history.css";

function History() {
  return (
    <div className="container">
      <div className="history__section">
        <div className="history__section_1">
          <hr className="history__hr" />
          <h3 className="heading__h3">
            Where Tradition Meets Technology: Uniting the Gorsi Tribe Across
            Generations
          </h3>
          <p className="history_paragraph paragraph">
            The Gorsi community has a rich history rooted in culture, honor, and
            resilience. This platform is dedicated to preserving our heritage by
            sharing the stories of those who have made significant contributions
            to our tribe.
          </p>
          <p className="history_paragraph paragraph">
            From historical accounts to the achievements of modern-day
            trailblazers, we aim to create a digital archive that connects Gorsi
            across generations. Join us in honoring our legacy and building a
            stronger, united future for our tribe.
          </p>
          <div className="history__section_1_img">
            <img src="/hero.jpg" alt="" />
            <img src="/hero.jpg" alt="" />
          </div>
        </div>
        <div className="history__section_2">
          <img src="/hero.jpg" alt="" />
          <h3 className="heading__h3">A Brief History About Gorsi</h3>
          <p className="history_paragraph paragraph">
            The Gujars belong to the north-western parts of India like Gujarat,
            Rajasthan, Himachal Pradesh, Jammu & Kashmir, Uttar Pradesh,
            Uttranchal, Haryana, and Punjab. They are mostly Muslims, the rest
            being either Hindus or Sikhs. Gujarat is said to be named after them
            as they settled there in the 6th century.
          </p>
          <div className="readmore__section">
            <button className="btn">Read More</button>
            <hr className="history__hr" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
