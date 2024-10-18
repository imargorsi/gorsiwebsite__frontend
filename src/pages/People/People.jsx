import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import "./people.css";

import CallToAction from "../../components/CalltoAction/CallToAction";

import Personaility from "./Personaility";

function People() {
  return (
    <div>
      <Breadcrumb title={"Famous Gorsi Personalities"} />
      <div className="people__wrapper">
        <Personaility />
      </div>

      <CallToAction
        text="This website is still under development, and we are doing our best to
          add all the notable Gorsi personalities from around the world. In the
          meantime, if you know of any individuals worth adding, please submit
          their details using the form below."
        btntext={"Submit Form"}
      />
    </div>
  );
}

export default People;
