import { useRef } from "react";
import ClipboardIcon from "../../../Icons/Clipboared.icon";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router";

const CopyToClipboardComponent = () => {
  const { id } = useParams();
  const paragraphRef = useRef(null);

  const copyToClipboard = async () => {
    try {
      if (paragraphRef.current) {
        const text = paragraphRef.current.innerText;
        await navigator.clipboard.writeText(text);
        toast.success("Text copied to clipboard");
        console.log("Text copied to clipboard");
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="copytoclipboared">
      <Toaster position="top-center" reverseOrder={false} />
      <p
        className="profilelink__id"
        ref={paragraphRef}
        style={{ userSelect: "text" }}
      >
        {`www.gorsi.online/profile/${id}`}
      </p>
      <ClipboardIcon onClick={copyToClipboard} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default CopyToClipboardComponent;
