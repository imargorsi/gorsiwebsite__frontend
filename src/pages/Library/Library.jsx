import "./library.css";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import ToggleButton from "../../components/ToggleButton/ToggleButton";

import { useState } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";

import BookGallery from "./components/BookGallery/BookGallery";

import CallToAction from "../../components/CalltoAction/CallToAction";

function Library() {
  const [isActive, SetIsActive] = useState("useImages");

  const handleToggle = (toggleText) => {
    SetIsActive(toggleText);
  };

  return (
    <div>
      <Breadcrumb title={"Library"} />
      <div className="container">
        <div className="library__wrapper">
          <h3 className="heading__h3">
            Browse Our Library for Gorsi Resources
          </h3>
          <div className="togglebtn__wrapper">
            <ToggleButton
              toggleText={"Images"}
              isActive={isActive === "useImages"}
              onClick={() => handleToggle("useImages")}
            />
            <ToggleButton
              toggleText={"Books"}
              isActive={isActive === "useBooks"}
              onClick={() => handleToggle("useBooks")}
            />

            {isActive === "useImages" ? <ImageGallery /> : <BookGallery />}
          </div>
        </div>
      </div>
      <CallToAction
        text={
          "If you have any documents, books, images, or other resources that can positively contribute to our community, please don't hesitate to use the form below to submit them. All members of our clan can then have access to these valuable resources."
        }
        btntext={"Submit Form"}
      />
    </div>
  );
}

export default Library;
