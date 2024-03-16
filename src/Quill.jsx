import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveCode, getSavedCode } from "./Util";
import { useEffect } from "react";
const MyQuillEditor = () => {
  const [html, setHTML] = useState("");

  useEffect(() => {
    setHTML(getSavedCode("quill"));
  }, []);

  const setValue = (value) => {
    saveCode("quill", value);
  };
  return (
    <ReactQuill
      style={{ margin: "1rem" }}
      theme="snow"
      value={html}
      onChange={setValue}
    />
  );
};

export default MyQuillEditor;
