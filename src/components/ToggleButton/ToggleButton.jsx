import "./togglebtn.css";

function ToggleButton({ toggleText, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        isActive
          ? "toggle__library__btn toggle__library__btn__active"
          : "toggle__library__btn"
      }
    >
      {toggleText}
    </button>
  );
}

export default ToggleButton;
