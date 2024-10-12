import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import "./people.css";

import Personaility from "./Personaility";

function People() {
  return (
    <div>
      <Breadcrumb title={"Famous Gorsi Personalities"} />
      <div className="people__wrapper">
        <Personaility />
      </div>

      <div className="underdev__bg">
        <div className="underdev__wrapper container">
          <p className="paragraph">
            This website is still under development, and we are doing our best
            to add all the notable Gorsi personalities from around the world. In
            the meantime, if you know of any individuals worth adding, please
            submit their details using the form below.
          </p>
          <button className="btn underdev__btn">Submit Form</button>
        </div>
      </div>
    </div>
  );
}

export default People;
