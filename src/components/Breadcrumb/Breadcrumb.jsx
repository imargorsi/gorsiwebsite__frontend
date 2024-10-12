import "./breadcrumb.css";

function Breadcrumb({ title }) {
  return (
    <div className="breadcrumb__background">
      <div className="container">
        <div className="breadcrumb__wrapper">
          <h3 className="heading__h3 breadcrumb__title">{title}</h3>
          <p className="paragraph breadcrumb__subtitle">Home / {title}</p>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
