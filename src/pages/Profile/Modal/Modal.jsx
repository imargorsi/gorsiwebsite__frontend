import "./modal.css";

import CloseIcon from "../../../Icons/Close.icon";

function Modal({ setModalOpen }) {
  return (
    <div className="modalwrapper">
      <div className="modalbox">
        <div className="modalheader">
          <h3 className="heading__h3">Edit Profile</h3>
          <CloseIcon
            onClick={() => setModalOpen(false)}
            style={{ width: "2rem", cursor: "pointer" }}
          />
        </div>
        <hr className="modalhr" />

        <div className="modalfooter">
          <button onClick={() => setModalOpen(false)} className="btn closebtn">
            Close
          </button>
          <button className="btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
