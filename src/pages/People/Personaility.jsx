function Personaility({ reverse }) {
  return (
    <div className="container">
      <div
        className={
          reverse ? `personality__wrapper reverse` : `personality__wrapper`
        }
      >
        <img src="/people.jpg" className="personality__img" alt="" />

        <div className="personality__text">
          <h3 className="heading__h3 personality__heading">CH Rehman Ali</h3>
          <p className="paragraph ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            facilis doloribus nam id voluptatum numquam ullam iusto incidunt
            quidem delectus recusandae culpa aspernatur fugiat quae, earum
            quisquam minima debitis? Minus.
          </p>

          <button className="btn personality__btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Personaility;
