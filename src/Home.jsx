import { useState } from "react";
import { getSavedCode } from "./Util";
import CopyToClipboard from "react-copy-to-clipboard";
import { useEffect } from "react";
const Home = () => {
  const [html, setHTML] = useState("");

  useEffect(() => {
    setHTML(getSavedCode("jodit"));
  }, []);

  const onTagChange = (event) => {
    if(event.target.id ==="copy") {

    } else setHTML(getSavedCode(event.target.id));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        <button id="jodit" onClick={onTagChange}>
          Jodit
        </button>
        <button id="ckeditor" onClick={onTagChange}>
          CkEditor
        </button>
        <button id="quill" onClick={onTagChange}>
          Quill
        </button>
        <CopyToClipboard
          text={html}
          onCopy={() => {
            alert("Copied");
          }}
        >
          <button>Copy to clipboard</button>
        </CopyToClipboard>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Home;
