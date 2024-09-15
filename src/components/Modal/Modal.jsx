import "./modal.css";

import CloseIcon from "../../Icons/Close.icon";
import EditUserForm from "../../pages/Profile/form/EditUserForm";
function Modal({ setModalOpen }) {
  return (
    <div className="modalwrapper no-scroll">
      <div className="modalbox">
        <div className="modalheader">
          <h3 className="heading__h3">Edit Profile</h3>
          <CloseIcon
            onClick={() => setModalOpen(false)}
            style={{ width: "2rem", cursor: "pointer" }}
          />
        </div>
        <hr className="modalhr" />
        <div className="modalbody">
          <EditUserForm setModalOpen={setModalOpen} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
