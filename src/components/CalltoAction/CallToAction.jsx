import "./calltoaction.css";

function CallToAction({ text, btntext }) {
  return (
    <div className="underdev__bg">
      <div className="underdev__wrapper container">
        <p className="paragraph">{text}</p>
        <button className="btn underdev__btn">{btntext}</button>
      </div>
    </div>
  );
}

export default CallToAction;
