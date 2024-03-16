// App.jsx / App.tsx

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useState } from "react";
import { getSavedCode, saveCode } from "./Util";
const MyCKEditor = () => {
  const [html, setHTML] = useState("");

  useEffect(() => {
    setHTML(getSavedCode("ckeditor"));
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <CKEditor
        editor={ClassicEditor}
        data={html}
        onChange={(_, editor) => {
          setHTML(editor.getData());
          saveCode("ckeditor", editor.getData());
        }}
      />
      <div
        style={{
          maxWidth: "100vw",
          overflowWrap: "break-word",
          margin: "1rem",
        }}
      ></div>
    </div>
  );
};

export default MyCKEditor;
