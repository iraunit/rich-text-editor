import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { saveCode, getSavedCode } from "./Util";
import { useEffect } from "react";
const MyJoditEditor = () => {
  const editor = useRef(null);
  const [html, setHTML] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: html || "Start typing...",
    }),
    [html]
  );

  useEffect(() => {
    setHTML(getSavedCode("jodit"));
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <JoditEditor
        ref={editor}
        value={html}
        config={config}
        tabIndex={1}
        onChange={(newContent) => {
          saveCode("jodit", newContent);
        }}
      />
    </div>
  );
};

export default MyJoditEditor;
