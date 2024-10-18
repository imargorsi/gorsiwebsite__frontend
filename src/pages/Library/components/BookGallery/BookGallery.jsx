import { Link } from "react-router-dom";

function BookGallery() {
  return (
    <div className="galleryWrapper">
      <div className="single__book">
        <a
          href="/documents/gujjar-history-by-rana-ali-hassan-chauhan-pdf-free.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="" src="pdf.png" className="gallery__books " />
        </a>
      </div>

      <div className="single__book">
        <a
          href="/documents/gujjar-tribe.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="" src="pdf2.png" className="gallery__books " />
        </a>
      </div>
    </div>
  );
}

export default BookGallery;
