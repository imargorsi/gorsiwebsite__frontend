import ClipboardIcon from "../../../Icons/Clipboared.icon";

const CopyToClipboardComponent = () => {
  const copyToClipboard = async () => {
    try {
      const text = document.querySelector(".paragraph").innerText;
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="copytoclipboared">
      <p className="paragraph">www.gorsi.online/profile/2</p>
      <ClipboardIcon onClick={copyToClipboard} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default CopyToClipboardComponent;
